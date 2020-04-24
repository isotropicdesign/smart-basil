---
template: post
title: How To Eliminate Render-blocking Resources For Wordpress Websites
subtitle: "⛔ to render blocking \U0001F469‍\U0001F4BB. Let's fix this."
date: 2020-04-19T11:11:00.000+00:00
excerpt: Getting rid of render blocking resources will help your Wordpress website
  load much faster. Implement this fix correctly and you'll see a noticeable increase
  in pagespeed.
image: "/images/Remove Render Blocking WP.jpg"
thumb_image: "/images/Remove Render Blocking WP.jpg"

---
In this article, we'll discuss what render blocking resources are and how to fix them. Addressing this is one of the best things to do to directly improve your Google PageSpeed Report, website speed, and SEO rankings.

![A screenshot showing the Render-Blocking Resources opportunity that Google PageSpeed shows to some website owners.](/images/Fix Render Blocking Resources.png "Fix Render Blockign Resources")

Here's what Google has to say about render blocking resources in their [PageSpeed Report](https://speedopp.com/#report):

> Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources?utm_source=lighthouse&utm_medium=unknown).
>
> There are a number of WordPress plugins that can help you [inline critical assets](https://wordpress.org/plugins/search/critical+css/) or [defer less important resources](https://wordpress.org/plugins/search/defer+css+javascript/). Beware that optimizations provided by these plugins may break features of your theme or plugins, so you will likely need to make code changes.

## What's a render blocking resource?

On a Wordpress site, typical render blocking resources are

When a visitor navigates to any website, the web browser "renders" the page.  It renders the page by reading all of the HTML code, from top to bottom, rendering it, and displaying the visual website to the user. When reading this code, if the browser comes across any CSS or JS (JavaScript) it needs to stop the rendering process, download the file, process it, and restart the rendering process again.

Here's an example. Say your basic website consisted of the following bunch of code:

* Head
* CSS
* _Footer Javascript_
* _Footer CSS_
* Section 1
* Footer

The browse loads the head, stops to download and process the base CSS, then the CSS and JS for the footer, then loads Section 1, and finally the footer.

Notice the issue? The browser is loading CSS and JS for the footer, which isn't "immediately visible" to the user _before_ Section One. In most cases, the footer doesn't need to need to be viewed immediately: it'll be out of the range of the initial viewport. So there's no point in loading this CS and JS, because it stops the browser from rendering for something visitors won't immediately see.

That's known as a render blocking resource, and is one of the leading causes of a slow Wordpress website.

By eliminating these render blocking resources, you can drastically speed up the loading time of your webpage. In the example below, this site can save about 1 1/5th of a second by addressing this.

![The list of improvement opportunities that Google shows.](/images/RenderBlocking Seconds.jpg "Opportunities List")

## How To Eliminate Render-Blocking Resources

For such a major problem, it's pretty easy to fix. We simply need to move the render blocking code & files lower, so the browser loads the visible content first.

_In this section, we'll introduce the actual mechanics behind the strategies used to fix render-blocking resources. Unless you're a frontend developer, you don't need to do any of this (plugins do it automatically), but it's a good idea to understand how everything works. If you don't want to, simply skip to the next section._

The two categories of render blocking content are CSS and JavaScript, each of which has different strategies to eliminate their impact on page speed.

First, understand that there's some CSS and JS that are needed to load your page. If you move these essential scripts and styling, your site might break. Luckily, Google Page Speed (usually) tells you which can be moved (and the plugins that you'll use to optimize this site will do this automatically).

**For CSS, there are a few things to do, depending on when and where it's needed.**

For CSS required immediately (typically this pertains to styles that apply to HTML elements that load in the initial viewport), it's best to inline it. Here's an example of inline CSS:

    <p style="color: blue;">This is a paragraph.</p>

For CSS stylesheets/styles that are conditional (the most common application of this are different styles for different screen sizes, also known as responsive design), call this in the head using the link attribute.

      <link rel="stylesheet" type="text/css" href="theme.css">

All other CSS should be loaded asynchronously (async), a concept that we'll introduce further in the next section. You can load it by including an onload attribute:

    <link rel="stylesheet" href="theme.css" media="print" onload="this.media='all'">

**For JavaScript, you can choose to defer it, or async it.**

* Async: Lets Javascript load while the browser is rendering the page. This means that the rendering process doesn't stop, it occurs in tandem with the script download. Note that to run the script, the browser _still_ must stop its rendering process.
* Defer: Does everything Async does but waits to run the script until the page is fully rendered.

> Here are some graphics that visually represent both Asynchronous and Deferred loading of JS:
>
> ![Normal JavaScript Execution. HTML Parsing paused for script fetching and execution](https://bitsofco.de/content/images/2017/02/Normal-Execution.png "Normal JavaScript Execution. HTML Parsing paused for script fetching and execution")
>
> Normal JavaScript Execution. HTML Parsing paused for script fetching and execution.
>
> ![Asynchronous JavaScript Execution. HTML parsing is paused only for the script execution](https://bitsofco.de/content/images/2017/02/Async-Execution.png)
>
> Asynchronous JavaScript Execution. HTML parsing is paused only for the script execution.
>
> ![Deferred JavaScript Execution. HTML parsing is never paused. Script execution happens after parsing is complete](https://bitsofco.de/content/images/2017/02/Defer-Execution.png)
>
> Deferred JavaScript Execution. HTML parsing is never paused. Script execution happens after parsing is completed.

_These graphics were sourced from_ [_BitsOfCo_](https://bitsofco.de/async-vs-defer/)_._

How do you actually implement the loading styles? It's just a simple addition to your existing code:

    <script [defer]OR[async] src="script.js">

There's no "best" choice for loading style -- everything really depends on your situation.

Also -- You can also move the script in the actual HTML source of the page. For example, scripts essential to the page are typically loaded in the header, while scripts that are needed, but not immediately are loaded in the footer.

* If the script is below the content that's needed immediately, then it may be best to leave it as it is.
* If the script isn't dependent on other files and/or doesn't have any dependencies, async may be a good choice.
* Does it have a dependency on something in the page and isn't immediately required? It may be best to move it to the footer.
* Does it have a dependency on something in the page, needs to stay where it is, _and_ impact the initial loading of the webpage? Deferring it is probably your best bet.

Now that you understand how to fix this, here's some good news. With Wordpress, there are _dozens_ of plugins that automatically implement the fixes mentioned above, while determining which strategy is best for your specific website. All you need to do is install, configure, and run it.

## Wordpress Plugins That Automate This Process

Wordpress has some amazing plugins (both free and paid) that can address your PageSpeed issues - specifically render blocking resources. We'll _list_ some plugins that we use (both with SpeedOpp and designing custom websites with [Isotropic](https://isotropic.co), our parent company and digital agency) here to point you in the right direction. You can browse [our blog](https://speedopp.com/blog) to see tutorials regarding the implementation and setup of some of them.

### WP Rocket

[WP Rocket](http://out.speedopp.com/wp-rocket) is our current favorite Wordpress speed plugin. It's paid, but extremely powerful - the price to value ratio is off the charts. It'll allow you to do a lot, but specific to this post, you can load Javascript deferred, exclude some files from this optimization (the important ones that are required immediately) and run the deferral in "safe mode" which attempts to automatically exclude essential scripts from the deferral. On the CSS side, you can automatically determine which CSS should be loaded asynchronously on your site, and apply that loading style (all as a background process). We love this plugin because it's super powerful (and _easy_) for both developers and less-technical website owners.

### WP Fastest Cache

WP Fastest Cache is a full page speed plugin that included CSS and Javascript tools. It'll allow you to defer the loading of most scripts and styles, fixing the render blocking issue. Best of all its _free_ and used by hundreds of thousands.

There are many, many more that can be found by searching Google or Wordpress.org for caching and render-blocking optimization plugins.

Plugins may fall short in some regards. For example, some scripts _cannot_ be altered. This is especially true with scripts and styling files that are required by your Wordpress theme. If the plugin doesn't recognize your websites dependency on these assets, it could unknowingly have them load later then needed, resulting in a broken frontend (don't worry, this can be undone).

In some cases, it's best to go into the actual HTML of the webpage, identify every file that may block website rendering and determine if it should be addressed or left. If it should be addressed, you should then figure out which strategy is best (keeping in mind its own dependencies, dependencies from the website, and a host of other conditions, which we mentioned in the prior section).

If your Wordpress website breaks everytime you attempt to fix render blocking resources, it's likely due to the plugin being unable to understand the importance of a script/css file.

***

That's where SpeedOpp comes in. We address _every single_ PageSpeed opportunity (including render blocking resources) by manually reviewing and auditing your site, determining the best course of action, and implementing tried-and-true strategies. Basically, we'll do everything that's mentioned in this post and more, professionally and quickly. If we don't boost your PageSpeed score, you get your money back.

It's a completely personalized service that is tailored to the requirements of your individual website. Boosting the speed of your website increases SEO, lowers bounce rates, and leads to more conversions. If you’re looking for a low cost, high impact way to bolster your digital appearance, consider SpeedOpp.

[Interested? Get started here.](https://speedopp.com/contact)