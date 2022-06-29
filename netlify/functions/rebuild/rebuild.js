const { schedule } = require('@netlify/functions');
const fetch = require('node-fetch');

const REBUILD_URL = process.env.BUILD_HOOK_URL;

const handler = async function(event, context) {

    await fetch(REBUILD_URL, { method: 'POST'});

    return {
        statusCode: 200,
    };
};

module.exports.handler = schedule("@hourly", handler);