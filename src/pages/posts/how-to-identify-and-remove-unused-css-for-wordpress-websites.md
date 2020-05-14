---
template: post
title: How To Identify And Remove Unused CSS for Wordpress Websites
subtitle: "Goodbye bloat \U0001F92E, hello speed \U0001F44D"
date: 2020-04-20T22:21:00.000+00:00
excerpt: 'Finding and removing unused CSS will save about 35% of unnecessary data
  transfer. Not only will this save bandwidth, it''ll speed up your website immensely. '
image: "/images/Remove CSS Wordpress.jpg"
thumb_image: "/images/Remove CSS Wordpress.jpg"

---
Unlike some other [PageSpeed opportunities](https://speedopp.com/posts/how-to-eliminate-render-blocking-resources-for-wordpress-websites/), getting this right can be quite tricky, as removing the wrong thing can break your site (so always, always back up your files).

Let's take a look at some CSS frameworks and their sizes:

* Bootstrap - about 116KB uncompressed
* Semantic - 800KB uncompressed
* Foundation - 164KB uncompressed

Say you're only using 5-10 components on your Wordpress site out of hundreds. That means you may be loading the entire framework (100-400KB) to use (20-30KB) of code.

Pagebuilder plugins, like Elementor, Divi and Beaver Builder are becoming ever more popular with agencies and website owners alike: build visually, edit visually, do everything visually. But with them, you're adding a _ton_ of code to your public website. For example, all of Elementor's CSS (frontend.css and frontend.min.css) has a size of roughly 200KB, uncompressed.

Essential CSS is loaded in the header of the website and is **render blocking**.

When a visitor navigates to any website, the web browser "renders" the page. It renders the page by reading all of the HTML code, from top to bottom, rendering it, and displaying the visual website to the user. When reading this code, if the browser comes across any CSS or JS (JavaScript) it needs to stop the rendering process, download the file, process it, and restart the rendering process again.

Most other assets can be loaded in ways that don't impact the rendering process, but essential CSS _must_ be loaded in a manner that is inherently render blocking. That means that making this file as small and compact as possible is super important.

![](/images/UnUsedCSS.png)

_An example of what can be improved on an example wordpress installation with Elementor._

In the remainder of the post, we'll present our three step process that we run through when removing unneeded CSS from Wordpress websites. If you're not interested in learning how to manually do this, skip to **Are There Plugins?** to learn about potential plugins to automate this process with Wordpress, and the issues you may encounter with them.

## Identify

The first step is identifying which CSS classes aren't called when the page loads. These are what need to be removed, which makes the filesize smaller, which allows your site to load much quicker. Chrome has a really helpful tool to aid you in this process:

_⇶ -> More Tools -> Coverage_

Access it by CTRL+Shift+I. On the window that pops up, click on the menu icon (on the top right, three vertical dots), go to more tools, and click on Coverage.

The coverage tool will pop up, which identifies unused CSS in real time. Click "**Start Instrumenting Coverage and Reload Page**", which will generate a list of all of the code used in your site, calculate the percentage unused, and display it visabally.

![](/images/Unused CSS.png)

Clicking on the file will show what code is used and what code isn't needed in the individual file:

![](/images/Layer 4.png)

This tool is great to point you to the files that need the most attention (and those that you can remove all together). For example, in the first photo (a screenshot of Coverage's file list) you can learn a few things. First, frontend.min.css is _almost_ completely unused. 96.3% of it isn't called into the page. It's also the largest file, coming in at 205KB. Addressing it will seriously speed up page speed. Another insight that Coverage is good for: finding CSS files that can be completely removed from the page. For example, our site is calling the Roboto webfont. Coverage is showing that it's not used at all in this page (there are not elements using the Roboto font), so you can simply remove this file from the individual page. No point in loading something that's not used at all.

When identifying CSS classes, there are some that aren't currently in use, but cannot be removed. Typically, these apply responsively and are identified as dynamic classes. Some examples include anything that starts with @media, or classes that apply to elements hidden by (or called upon by) Javascript. This is why it's difficult to remove unused CSS -- sometimes it's meant to be unused unless a condition is met.

So what you need to do is:

1. check every single page in the website
2. while running every snippet of Javascript
3. under every responsive version of every page in the site

If it's still not used, then it can go.

So, the pervious checklist shows why this is such a difficult proposition. It's a bit unrealistic to remove every bit of unused CSS. The best way to make the page run as smooth as possible is removing only the elements that you _know_ aren't used in any aspect of the site. So, if you know that you're not calling on a Bootstrap element in any section of the site, you can delete it. Same goes for fonts.

There are identification services which can help you speed this process up by automating identification and then outputting cleaned files. An item of note: **Always use the outputs as a guide.** They tend to remove some things that should't be removed and miss things that should (myClass:hover, myClass:focus, myClass:nth-child). The output is a good starting point and will help you save time, but you always need to check. These services will scan your CSS, call the webpage and see if there are any unused files:

* [https://purgecss.com/](https://purgecss.com/ "https://purgecss.com/")
* [https://www.jitbit.com/unusedcss/](https://www.jitbit.com/unusedcss/ "https://www.jitbit.com/unusedcss/")

[Unused-css.com](https://unused-css.com?fpr=speedopp) is another option that's a bit more advanced. They scan your JavaScript files as well as CSS. This is to see if any classes are injected by them, and helps address dynamic classes that other programs may remove from your files. It works pretty well on smaller, less complex websites, but it's paid and when used on larger websites, it tends to miss many CSS classes called only in JS.

## Remove

Once you've identified the classes that aren't absolutely necessary you can get rid of them by deleting them from the stylesheet, compiling and uploading it back to your server or CDN.

The _best/most effective_ way to do this is find someone super familiar with the CSS that makes up your site. This could be[ the agency that designed your site](https://isotropic.co), or a professional speed optimization service like SpeedOpp (that's us!). The process of doing this is painstaking and long, but well worth the effort you put in - you can increase page speed drastically.

You can also attempt to remove CSS using the plugin solution discussed below.

## Test

Before pushing any changes, you need to test, test and test some more. The best way to do this (manually) with a Wordpress site is downloading it as a copy, setting it up on a localhost and playing around. You can leverage VS Code or any other editing platform to make your life easier, as well.

## Are There Plugins?

There are some awesome plugins that do pretty much everything that we talked about above. The best plugin is called WP Asset Clean Up -- for CSS the free version works very well.

[WP Asset Clean Up](http://out.speedopp.com/asset-cleanup "Link To Developers Website")

Asset CleanUp scans your page and detects all the assets that are loaded. It'll then go ahead and allow you to "turn off" the unused assets. Here's an example:

![](/images/Asset Clean Up.png)

Here's the dashboard for one single .css file. It's pretty powerful.

The best feature of this plugin is the "Test Mode" -- you can make changes and review them on your website (only visible to Admins) _before_ pushing them live. If it breaks you site, you can simply toggle it back on.

This is a great plugin for devs and website owners alike, as it's pretty easy to use and understand and FREE. Use it in tandem with [WP Rocket](http://out.speedopp.com/wp-rocket) (a caching plugin) for _killer_ speeds.

([Read Our Full Review Here](https://speedopp.com/posts/The-Best-Wordpress-Plugin-To-Remove-Unused-CSS-And-How-To-Use-It))

***

If you're interested in optimizing your site without the hassle consider SpeedOpp. [Want to learn more? Click here.](https://speedopp.com/contact)