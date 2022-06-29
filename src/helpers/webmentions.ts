import sanitizeHTML from 'sanitize-html';

const API_ORIGIN = 'https://webmention.io/api/mentions.jf2';

export const getMentionsData = async function () {
  const domain = 'meteor10.sachagreif.com';
  const token = import.meta.env.WEBMENTION_IO_TOKEN;
  const url = `${API_ORIGIN}?domain=${domain}&token=${token}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const feed = await response.json();
      return feed;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getWebmentions = async function (url) {
  const data = await getMentionsData();
  const webmentions = data?.children;
  const allowedTypes = ['mention-of', 'in-reply-to'];

  const hasRequiredFields = (entry) => {
    const { author, published, content } = entry;
    return author.name && published && content;
  };
  const sanitize = (entry) => {
    const { content } = entry;
    if (content['content-type'] === 'text/html') {
      content.value = sanitizeHTML(content.value);
    }
    return entry;
  };

  return webmentions
    .filter((entry) => entry['wm-target'] === url)
    .filter((entry) => allowedTypes.includes(entry['wm-property']))
    .filter(hasRequiredFields)
    .map(sanitize);
};
