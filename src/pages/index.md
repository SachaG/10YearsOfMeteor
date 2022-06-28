---
layout: '../layouts/BaseLayout.astro'
setup: |
  import Person from '../components/Person.astro'
  import Image from '../components/Image.astro'
  import Footer from '../components/Footer.astro'
  import MeteorLogo from '../components/MeteorLogo.astro'
  import SevenPrinciples from '../components/SevenPrinciples.astro'
  import Hidden from '../components/Hidden.astro'
  import StateOfGraphQL from '../components/StateOfGraphQL.astro'

title: Reflecting on Meteor.js, Ten Years Later
published: false
description:
tags:
# cover_image: https://direct_url_to_image.jpg
# Use a ratio of 100:42 for best results.
---

##### Note: I am not currently affiliated, nor have I ever been at any time, with Meteor Development Group, Apollo, or Tiny. These are my own personal thoughts.

#### If you only got into web development in the past couple years, you might quite possibly have never heard about [Meteor](https://www.meteor.com/?source=10yearsmeteor).

<Person author={true} name="Sacha Greif" url="https://twitter.com/SachaGreif">I co-wrote [Discover Meteor](http://discovermeteor.com/), the leading Meteor ebook at the time. Since then I created the [State of JavaScript](http://stateofjs.com/) and [State of CSS](https://stateofcss.com/) developer surveys. Our third survey, the [State of GraphQL](https://stateofgraphql.com/?source=10yearsofmeteor), is now open.</Person>

But when it first came out in 2012 (before React or Vue even existed!) it was the hottest thing around for a while. Not only that, to this day Meteor still does many incredible things that the rest of the ecosystem has yet to catch up with.

And what's more, even if you've never used Meteor I'm willing to bet you've used software that was influenced by it, one way or another. So read on to learn more about Meteor's early rise, why it may have burned too bright, and the lasting impact it had on modern JavaScript development.

## 2012

Take yourself back to 2012. It's the aftermath of the financial crisis, but Barack Obama is president of the U.S. and assuring the world that there's hope. "Call Me Maybe" is topping the charts. And tech founders are to be admired (or at the most [made fun of](<https://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)>)), not yet feared for their over-sized power.

<Person name="Geoff Schmidt" url="https://twitter.com/GeoffQL">After being an early employee at Asana, Geoff Schmidt teamed up with Etherpad co-founder [David Greenspan](https://twitter.com/davidlg), [Matt Debergalis](https://twitter.com/debergalis), and [Nick Martin](https://www.linkedin.com/in/n1mmy) to found Skybreak, which eventually became Meteor. </Person>

Deep in Silicon Valley, a team of brilliant engineers currently enrolled in [YCombinator](https://www.ycombinator.com/) has a realization: building web apps is too damn hard!

Out of this realization is born Meteor: a unified architecture on top of Node.js that bundles client, server, and database all in one neat little package that you can run (or even deploy for free!) with a single command.

What's more, it was all reactive and in real-time! Can you imagine never having to write a `fetch()` or worrying about updating your client data cache? And all that using the same familiar MongoDB API syntax both on the server and client!

Yep, it turns out Meteor was already tackling a huge chunk of the problems of modern web development in 2012.

<StateOfGraphQL>

Do you use [GraphQL](https://graphql.org/)? If you do, and have 15 minutes to spare, please consider taking the first ever [State of GraphQL community survey](https://stateofgraphql.com/?source=10yearsofmeteor)! We just launched it, and we think it's going to be a huge help to figuring out which GraphQL tools and features people actually enjoy using.

</StateOfGraphQL>

## A Lone Pixel-Pusher

Way back in the early '10s I was earning a living [tweaking drop shadows in Photoshop](http://work.sachagreif.com/). As strange as it seems today, this was the tool of choice when it came to designing websites. This being the heyday of iPhone-inspired skeuomorphism, your paycheck depended on your ability to simulate a realistic leather texture for that call-to-action button.

Like many other UI designers though, I felt disillusioned that my beautiful creations didn't always survive the rocky transition from Photoshop to browser in one piece. This, along with a generous dose of Silicon Valley kool-aid (I had just been to the Valley for the first time in the summer of 2011, and it made a huge impression on me), pushed me to try and strike it rich on my own rather than keep playing second fiddle to unappreciative developers.

I wasn't starting from zero either: long before pushing pixels I had obtained my computer science diploma, even if I wasn't quite top of my class. For example, I was once suspected of plagiarism because I was incapable of explaining what my own code did (my defense: if I was going to copy somebody else's code, I would've copied something that works!). But web development had to be easier than C and Java, right?

I went through Michael Hartl's [Rails Tutorial](https://www.railstutorial.org/) but got overwhelmed with too many new concepts at once: routes, models, controllers, views, auth… All this combined with having to learn a new language meant Rails never quite clicked for me.

On the other hand, something that _did_ click was jQuery. It was JavaScript, which was a "normal-looking" programming language compared to Ruby, but with all the weird `DoSomethingWithTheDOM()` parts massaged into a sensible API.

The first project I built with jQuery was a little tool called [Patternify](http://www.patternify.com/), which still exists to this day! I had a ton of fun, but at some point I started being frustrated once more: playing around in the browser was fine, but to achieve anything _big_ you needed to involve a server and a database at some point.

<Image name="Patternify" url="http://patternify.com/">My first client-side only web app: a pixel pattern drawing app. </Image>

So here I was, a designer-slash-front-end-developer who loved JavaScript but was deathly afraid of servers. In other words, the perfect audience for Meteor.

## Discovering Meteor

Meteor made a big splash right from the get-go, with one of the biggest [Hacker News launches](https://news.ycombinator.com/item?id=3824908) of all time. As one commenter put it:

> My first impression of this: wow. If Meteor is all it appears to be, this is nothing short of revolutionary.

And revolutionary it was. Once my friend [Sean Grove](https://twitter.com/sgrove) pointed me to it (he was in the same YCombinator batch as the Meteor guys), Meteor immediately appealed to me.

At the time, I was trying to build a "Hacker News for designers", something that for whatever reason nobody has ever quite succeeded in doing. With its real-time capabilities, Meteor seemed like the perfect for this kind of web app. I got to work, deciding to make the project open-source in the hopes of attracting <s>unpaid labor</s> like-minded contributors, and [Telescope](https://www.smashingmagazine.com/2015/02/build-your-own-product-hunt-with-telescope-and-meteor/)
was born.

<Image name="Telescope" url="https://www.smashingmagazine.com/2015/02/build-your-own-product-hunt-with-telescope-and-meteor/">The default Telescope theme.</Image>

Throughout this whole process I got to know the other members of the budding Meteor community, one of which was [Tom Coleman](https://twitter.com/tmeasday), creator of Meteor's first package manager (Meteor launched without any kind of first-party package manager and only supported regular npm packages much later, which seems hard to imagine today).

<Person name="Tom Coleman" url="https://twitter.com/tmeasday">Tom founded development agency Percolate Studio with longtime collaborators [Dominic Nguyen](https://twitter.com/domyen) and [Zoltan Olah](https://twitter.com/zqzoltan). Later, the company was acquired by Meteor Development Group, and after that the trio went on to found [Chromatic](https://www.chromatic.com/) and maintain [Storybook](https://storybook.js.org/), the popular UI testing tool.</Person>

I was fresh off writing a [somewhat successful design e-book](https://v3.sachagreif.com/ebook/) so I approached Tom with a proposal: we'd combine his deep knowledge of Meteor and my design and marketing skills to write a Meteor tutorial book and establish ourselves as the de facto way to learn the framework just as it was taking off.

And guess what: _we did exactly that!_ [Discover Meteor](http://www.discovermeteor.com/) launched in 2013 and thanks in no small part to a big boost from the Meteor team quickly became one of the main resources to learn Meteor, just as we had hoped. The book quickly became a big part of both our lives, and was also a big financial success (you can read this [Gumroad case study](http://gumroad.s3.amazonaws.com/blog/DiscoverMeteorCaseStudy.pdf) to learn more.

<Image name="Discover Meteor" url="http://www.discovermeteor.com">Discover Meteor is no longer maintained and you can now read it for free.</Image>

We even had a [podcast](http://www.discovermeteor.com/podcast) and a [t-shirt](http://www.discovermeteor.com/tshirt), and I'm not sure how many other programming books can say the same. And did I mention _Discover Meteor_ was also translated into dozens of other languages by volunteers (we made all the translations freely available)?

## Things Cool Down

At first, it seemed like everything was great in Meteor land. Tom eventually [went to work for the Meteor Development Group](https://blog.meteor.com/welcoming-percolate-studio-to-meteor-development-group-160c798b3aff) (the company behind Meteor, also known as MDG) itself, the Meteor community was growing, and the book was doing great.

But as the rest of the JavaScript ecosystem kept evolving (this is around the time React was gaining traction), many voices inside the Meteor community started questioning Meteor's idiosyncratic approach.

<Person name="Arunoda Susiripala" url="https://twitter.com/arunoda">Arunoda created libraries to address many under-served aspects of early Meteor days including routing, server-side rendering, deployment, and performance monitoring. He went on to create [Storybook](https://storybook.js.org/), and work for [Vercel](https://vercel.com/) before creating gamedev company [GDi4K](https://www.gdi4k.com/).</Person>

It soon became clear that the community was splitting into two camps: those who appreciated Meteor's clear value proposition of simplifying web development by providing an all-in-one environment, and those who wanted more openness towards the npm ecosystem to avoid being left behind by the rest of the webdev community.

Here's the catch: the contents of the book clearly targeted the first camp, but we as programmers were firmly in the second. Were we supposed to keep advocating for practices we didn't follow ourselves? Or should we rewrite the book from scratch to match what we actually did, in the process risking killing the very simplicity that made the book appealing in the first place?

We could never decide, and _Discover Meteor_ slowly got out of date. And once Tom left the Meteor Development Group and stopped using Meteor altogether, it was clear that our adventure had come to an end.


<SevenPrinciples>

## 7 Principles, 10 Years Later

Meteor was famous for its "7 Principles", which made up the core of its philosophy. Let's look back to see how they hold up 10 years later when applied to the JavaScript apps of today.


> **1\. Data on the Wire**. Don’t send HTML over the network. Send data and let the client decide how to render it.

#### Verdict: 👎

It's since become apparent that you often _do_ need to send HTML over the network, and things seem to be moving back towards handling as much as possible of your HTML compilation on the server, not on the client. 


> **2\. One Language**. Write both the client and the server parts of your interface in JavaScript.

#### Verdict: 👍

It's now become commonplace to reuse components on both the server and client but that wasn't the case 10 years ago. And to this day Meteor still handles many aspects of server/client code sharing better than most other frameworks.


> **3\. Database Everywhere**. Use the same transparent API to access your database from the client or the server.

#### Verdict: 👎

The ability to write MongoDB commands (with some security constraints) from your browser was a big innovation at the time, but that paradigm never got popular beyond the borders of the Meteor community.


> **4\. Latency Compensation**. On the client, use prefetching and model simulation to make it look like you have a zero-latency connection to the database.

#### Verdict: 🤷

Also referred to as Optimistic UI, Latency Compensation is the idea of immediately showing the user the result of their actions by simulating the server response. While a nice idea in theory, in practice the complexity of updating the client cache and handling error states often makes it more trouble than it's worth.


> **5\. Full Stack Reactivity**. Make realtime the default. All layers, from database to template, should make an event-driven interface available.

#### Verdict: 🤷

While many frameworks embraced client-side reactivity (starting with, well, React), Meteor's _full-stack_ reactivity has never been replicated quite the same way. While invaluable for chat apps, games, and other real-time apps, it can often become a performance-hungry liability for more "traditional" web apps.


> **6\. Embrace the Ecosystem**. Meteor is open source and integrates, rather than replaces, existing open source tools and frameworks.

#### Verdict: 👍

If anything, Meteor didn't go far enough in this direction, since it still had its own build tool, package manager, etc. Today using the ecosystem is just a no-brainer for any new project.


> **7\. Simplicity Equals Productivity**. The best way to make something seem simple is to have it actually be simple. Accomplish this through clean, classically beautiful APIs.

#### Verdict: 👍

Meteor was, and still is, a pioneer in terms of simplicity and ease of use.

</SevenPrinciples>

## Burning Out

Tom wasn't the only one who wanted to explore new skies. MDG itself had ventured into the GraphQL space, and soon pivoted to become [Apollo](https://www.apollographql.com/), the company responsible for Apollo Client and Apollo Server among many other key building blocks of the GraphQL ecosystem.

<Image name="Apollo" url="https://www.apollographql.com">Out of Meteor, Apollo was born.</Image>

So what went wrong? I'm not privy to any inside information so this is just speculation on my part, but I think the team realized that the amount of work required to make Meteor work on a large enough scale to repay their investors was just too much. As it existed, Meteor could work as a niche tool for a specific kind of project, but it could never establish itself as a dominant force in enterprise software, which is where all the real money is.

Achieving this would not only have required years of additional effort, but also throwing away most of the past five years of work, alienating their current community in the process. So just like there was never a newer, better _Discover Meteor 2.0_, MDG also never launched a Meteor 2.0 to address its current flaws and instead wisely chose to focus on Apollo and move on.

## From Telescope to Vulcan

While others had moved on, I on the other hand wasn't out of Meteor land by any means.

Right from the start, my goal had been to find a framework that would let me launch web apps quickly and easily with JavaScript (the famed "Rails for JavaScript", if you will), and although Meteor came close, it wasn't quite there yet. Things like forms, models, internationalization, permissions, etc. were all missing, and I'd had to handle them myself for Telescope.

But what's interesting is that although I had intended for Telescope to be a Hacker News clone, people had started using it for all kinds of different community-based apps, tweaking the templates to match their use case. This was such a cool direction that I decided to pivot the project to become a full-fledged general purpose web framework, and thus [Vulcan.js](https://vulcan-docs.vercel.app/) was born.

<Image name="Vulcan.js" url="https://vulcan-docs.vercel.app/">Vulcan.js: a valiant attempt at creating the fabled "Rails for JavaScript".</Image>

Looking back, building Vulcan on top of Meteor instead of starting from scratch was not a good idea to say the least. I was hamstrung by all the same issues that Meteor was plagued with, without any of Meteor's advantages since I had eschewed the traditional Meteor building blocks in favor of React & co.

I had made the bet that the current Meteor community would see Vulcan as its escape raft towards the larger JavaScript ecosystem, a way to port their pure-Meteor apps to a hybrid Meteor-and-React model. But by then, the people who wanted to abandon Meteor had already long done so, and the remaining community of die-hards used Meteor because they actually liked it.

Then again, there was no way I could've built something like Vulcan from scratch without standing on Meteor's shoulders, so maybe it had to be this way? And despite its relative obscurity, Vulcan has been used by others to [build startups](https://letter.so/), was used at a time by popular community [LessWrong](https://www.lesswrong.com/), and has been used by myself to build multiple sites, including [Sidebar](https://sidebar.io/) (a design newsletter with over 80,000 subscribers) and an AirBnB-like apartment rental platform.

Today, thanks to the efforts of [Eric Burel](https://twitter.com/ericbureltech), the new version of Vulcan runs on [Next.js](https://vulcan-next.vercel.app/). We're trying to take the philosophy of Meteor, along with everything we learned in the past 10 years, and port it to the modern JavaScript ecosystem, similar to something like [RedwoodJS](https://redwoodjs.com/). The amount of work involved is daunting, and makes me all the more admirative of the original Meteor team, who didn't have React, Next.js, or GraphQL to leverage.

## Meteor Today

In 2019, [MDG sold Meteor to Tiny](https://techcrunch.com/2019/10/02/tiny-acquires-meteor/), a Canadian company that also owns [Dribbble](https://dribbble.com/), [Creative Market](https://creativemarket.com/), and [many other companies](https://www.tiny.com/companies) you probably know.

This marked a turning point for the framework: rather than try to conquer the world, Meteor would now focus on pleasing its existing community and growing at its own pace. This leaves us with a paradox: technically speaking, Meteor is the best and most stable it's ever been; yet there is little interest in learning it from people who aren't already using it.

<Image name="State of JS" url="https://2020.stateofjs.com/en-US/technologies/back-end-frameworks/meteor">According to the State of JavaScript survey, the percentage of developers interested in learning Meteor has been steadily going down.</Image>

And maybe that's fine. After all, as the creator of a very-niche-but-beloved framework myself, I'm in no position to be casting any stones.

Still… I can't help but think about what could have been. What if Meteor _had_ taken over the world like we all hoped it would? What if the problems that still plague web development to this day (state management, reactivity, data fetching) had been dealt with once and for all a decade ago?

<Image name="Meteor" url="https://www.meteor.com">Meteor today: much improved, but still very niche.</Image>

## The Meteor Legacy

At this point you might be forgiven for thinking that Meteor burned too bright and fizzled out in the night sky without leaving a trace. But you'd be mistaken. Meteor did make a lasting impact, in more ways than one.

<Person name="Evan You" url="https://twitter.com/youyuxi">Probably the most famous Meteor alumni, Evan You worked on Meteor's own Blaze UI framework before going on to revolutionize the front-end space with [Vue.js](https://vuejs.org/).</Person>

One of the new front-end frameworks that quickly outgrew Meteor's own popularity was [Vue](https://vuejs.org/), created by Evan You. And where did Evan work before creating Vue? You guessed it, MDG.

Or, you might've heard of a tool named [Storybook](https://storybook.js.org/). It was created by [Arunoda Susiripala](https://twitter.com/arunoda), who was by far the most active open-source Meteor contributor (in fact a running joke was to talk about "the Arunodas", plural, because his output was too much to be the work of a single individual).

Today, Storybook is maintained by a company called [Chromatic](https://www.chromatic.com/), which was [co-founded by a certain Tom Coleman](https://www.chromatic.com/blog/from-meteor-to-chroma/). Remember him?

And like I mentioned previously, the original Meteor team itself went on to create [Apollo](https://www.apollographql.com/).

And well, I guess there's also me. Back in 2016 I launched the annual [State of JavaScript](https://stateofjs.com/) developer survey. It's no Vue or Storybook, but it did establish itself over the years as one of the largest independent developer surveys around, and went on to spawn first the [State of CSS](https://stateofcss.com/) and now the [State of GraphQL](https://stateofgraphql.com/?source=10yearsofmeteor) surveys. And the whole reason why I launched this survey in the first place was because I was so confused by the JavaScript ecosystem at large, after being coddled by Meteor's walled garden for so long!

## A New Direction for Web Apps?

As I reflect on Meteor, an old debate has come back from the grave to once more rock the web development web: [SPAs vs MPAs](https://nolanlawson.com/2022/05/21/the-balance-has-shifted-away-from-spas/).

Single-Page Applications are apps that load all their JavaScript with one request, and then function more or less as a self-contained little piece of software from then on. On the other hand, Multi-Page Applications make back-and-forth requests to the server every time you navigate to a new page, thus their name. SPAs tend to have much of their logic run on the client (and also on the server for that first load, if server-side rendering (SSR) is supported), while MPAs have much lighter clients that are less resource-hungry.

<Person name="Jan Dvorak" url="https://twitter.com/storytellercz">Jan is one of the many people that keep the Meteor community alive today thanks to initiatives like the [Meteor Impact](https://impact.meteor.com/) online conference.</Person>

While I've always been bothered by the downsides of SPAs, I always thought the gap would be bridged sooner or later, and that performance concerns would eventually vanish thanks to things like code splitting, tree shaking, or SSR. But ten years later, many of these issues remain. Many SPA bundles are still bloated with too many dependencies, hydration is still slow, and content is still duplicated in memory on the client even if it already lives in the DOM.

Yet something might be changing: for whatever reason, it feels like people are finally starting to take note and ask why things have to be this way. [Remix](https://remix.run/) has taken the React community by storm by offering a back-to-basic, performance-first approach, while Next.js is embracing [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components) to solve some of the same issues.

Even tools that are more on the static side of things are evolving, with a new crop of options like [Astro](https://astro.build/), [Capri](https://capri.build/), or [Slinkity](https://slinkity.dev/) letting you control which components to hydrate or not.

To say nothing of up-and-coming front-end frameworks like [Marko](https://markojs.com/), [Qwik](https://qwik.builder.io/), and [Solid](https://www.solidjs.com/), which are all about giving you better control over rendering and being more efficient. While over in [Deno](https://deno.land/) land, [Fresh](https://fresh.deno.dev/) also embraces so-called "island architecture".

## Ten Years

A lot has changed in 10 years: between political upheavals, a devastating pandemic, and of course worsening climate change, the naive optimism of the early 2010s seems almost quaint. And we're also more conscious of the fact that access to fast internet connections and modern devices is not always equally distributed throughout the population.

In this new context, Meteor's all-JavaScript, all-real-time, all-the-time approach can seem a bit wasteful and excessive.

Don't get me wrong, I enjoyed pushing the boundaries of the browser and redefining what a web app could be as much as anybody else. But as we enter [JavaScript's third age](https://www.swyx.io/js-third-age/), maybe it's time to slow down and build web apps in a more efficient and sustainable manner.

I can only hope that in the process we manage to preserve just a tiny bit of that original Meteor magic and simplicity.

It's been 10 years, but there's yet to be another framework that burns quite as bright as Meteor did at its zenith. <MeteorLogo/>

<Footer>
  Written by [Sacha Greif](https://sachagreif.com/) in June 2022. Made with [Astro](https://astro.build/) and hosted on [Netlify](https://netlify.com/). Font stacks from [System Font Stack](https://systemfontstack.com/), set using the [Utopia](https://utopia.fyi/type/calculator) fluid type scale calculator. [Report issues](https://github.com/SachaG/10YearsOfMeteor/issues) or [get in touch](mailto:10yearsofmeteor@sachagreif.com).
</Footer>

<Hidden>

(the following content is hidden)

https://nolanlawson.com/2022/05/21/the-balance-has-shifted-away-from-spas/

https://nolanlawson.com/2022/05/25/more-thoughts-on-spas/

https://en.wikipedia.org/wiki/Meteor_(web_framework)
https://techcrunch.com/2012/04/11/meteor-launch/
https://www.quora.com/How-did-David-Greenspan-Etherpad-creator-team-up-with-Geoff-Schmidt-Asana-employee-9-worked-on-Luna-and-team-to-form-Meteor
https://medium.com/@sachagreif/an-open-letter-to-the-new-owners-of-meteor-353d64780b20

</Hidden>