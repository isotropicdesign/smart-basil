---
template: post
title: The Best Wordpress Plugin To Remove Unused CSS, And How To Use It
subtitle: "Quick and easy \U0001F4AA"
date: 2020-04-21T12:42:00Z
excerpt: 'Asset Clean Up is one of the best plugins to Remove Unused CSS and make
  a big (positive) dent in your PageSpeed score. Here''s why it''s important and the
  many reasons we recommend it. '
image: "/images/The Best Wordpress Plugin To Remove Unused CSS, And How To Use It.jpg"
thumb_image: "/images/The Best Wordpress Plugin To Remove Unused CSS, And How To Use
  It.jpg"

---
When running a Google PageSpeed or Lighthouse report, a common audit category that many website owners and developers encounter is “remove unused CSS”. This is an extremely common audit to fail (especially with WordPress websites), and addressing it can save you multiple seconds of page loading times. [(This post describes why)](https://speedopp.com/posts/how-to-identify-and-remove-unused-css-for-wordpress-websites/)

Lighthouse recommends that you **remove dead rules from stylesheets and defer the loading of CSS** not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. It’ll display this suggestion for all stylesheets that can save 2Kbs or more by removing CSS.

In this post, we're going to break down what exactly causes this PageSpeed opportunity to show, why removing unused CSS is one of the best things you can do for website loading speeds, and introduce a plugin to automate this whole process for WordPress websites.

Because some CSS contains essential styling information for web pages, it must be loaded before the content of the page is shown to the viewer.

Essential CSS loading _must_ be render blocking, so it is really important to remove as much unused CSS as possible to have the fastest loading pages. This is especially true in WordPress websites, where individual themes and plugins may call excessive CSS classes.

For example many of the Page Builders (think Elementor or Divi) have massive style sheets that total over 200 kilobytes, while only calling around 10% of the classes contained in them for the specific page.

Additionally many plug-ins contain CSS that's called every time any Wordpress page loads. This is especially detrimental to paid speed, because 100% of the style stylesheet might not be called on that individual page.. For example, if you have a forms plug-in that is only for the “Contact Us” page, but the stylesheet is loaded site-wide via a <link> element in your site header, you're spending countless milliseconds loading unneeded CSS. When you have 20 plugins, these milliseconds quickly add up to Seconds of time spent loading your page.

Those two points are the reason that one of the most common suggestions that WordPress website owners and developers encounter when running page speed tests is to “Remove Unused CSS”.

Cut out that bloat, and you’ve got a site that’ll load 1-2 seconds faster than before.

We wrote a blog post on how to manually remove unneeded CSS classes from your WordPress website, but in this post we want to introduce our favorite plugin that makes this process much quicker and easier.

## Asset Clean Up

[Asset Clean Up](http://out.speedopp.com/asset-cleanup) is an essential plugin to our “SpeedOpp Kit”, the base set of plugins that we install on all WordPress websites when running our speed optimization services. In the remainder of this post we're going to introduce its features, tell you why we like it, and teach you basics in using it. If done correctly, not only will you remove the” remove unneeded CSS” opportunity from your PageSpeed report, but you'll cut seconds off your actual site loading time.

Here’s what it can do and how you can use it.

The main feature of this plugin is called “unload”. Unload allows you to disable unused CSS files on a per-page basis. For the remainder of the essential CSS, Asset Clean Up merges and minifies the files -- lowering their total file size and reducing the number of HTTP requests loaded by the browser.

An example similar to the one given in the “ welcome page” of this plugin is as follows:

_Suppose you have a page where 20 files (CSS & JS) are loaded. All have a total size of 2.0 MB. Using Asset CleanUp, you can reduce the number to 8 files by unloading (aka, disabling) the other 12 files which aren’t needed on the specific page. By doing this, you reduce the total size of assets loaded to 1.0 MB. Now, if you combine and minify the remaining 8 files, the total size of the assets becomes 0.75 MB. In the end, the assets will load 2.6 times faster for your visitors and improve your Google PageSpeed score._

Here’s the UI, which shows up on individual backend pages in WordPress.

![](https://i.snipboard.io/D0poKZ.jpg)

You can simply toggle on and off individual CSS files, _instantly_ reducing unused CSS. _Please note that these screenshots are for the_ [_paid version_](http://out.speedopp.com/asset-cleanup) _of the plugin. Same UI, except in the free version, you can **only** remove unused CSS._

The plug-in allows you to test these changes before pushing them to the live site. If you did this manually, you would probably need to download a copy of your site and install it on a localhost, where you would test each individual file to see if it broke the site.

With Asset Clean Up, you can test these changes on the live site _before_ pushing them live. If something breaks, you can simply undo it -- no downtime for anyone.

A review of the features of this FREE plugin:

* Disable unneeded CSS and JS files on a per page basis.
* Merge and minify the remaining files, resulting in less HTTP requests and lower file sizes.
* Test everything before going live.

**Simple, but powerful.**

This plug-in works in tandem with [WP-Rocket](http://out.speedopp.com/wp-rocket) (and its creator actually recommends this), our recommended caching plugin for WordPress. Combining both of these plugins will address most of the opportunities that are called on Google PageSpeed reports, like removing unused CSS, eliminating render-blocking resources and minimizing third-party code (as well as a couple others).

## Why The [Paid Version](http://out.speedopp.com/asset-cleanup) Is Well Worth Its Price

The paid version of this plugin (named Asset CleanUp Pro: Performance WordPress Plugin) offers website owners and developers a ton of additional tools that will directly impact the page speed loading times of your website.

Like many [speed optimization services](http://speedopp.com/how) and plugins, your investment is well worth it. Quicker page speed leads to higher search engine rankings. When you boost your page placements on search engine results with a faster site, you get more visits (and 93% of them come from a search engine, so this is important).

Your user experience is bolstered from a quicker, snappier site and the combination of both of these elements leads to happier visitors. Faster sites, more (and happier) visitors and better UX leads to more conversions to leads. And finally, more leads result in more revenue.

The free version of Asset Clean Up is an immensely powerful tool, but the paid version of Asset Clean Up is a hundred times better. The developer has rightfully so put some super-powerful features behind this pay wall. For example, this version offers you:

* Option to defer CSS loaded in the <_Body>_ to eliminate its render blocking properties. [Here’s why that’s important.](https://speedopp.com/posts/how-to-eliminate-render-blocking-resources-for-wordpress-websites/)
* The ability to manage CSS & JavaScript files on Categories, Tags, Custom Taxonomy pages, Date & Author Archive Pages, Search Results & 404 Not Found pages. That's important, because a faster loading blog post has a better chance of being on the first page of Google. If you're using your blog as an inbound marketing tool (and you should) these pages need to load in about one second.
* Unload plugins: For example if you have WooCommerce installed on your website, but only need it on the shop page, you can disable it side wide and an exception for “/shop”. This will cut out massive amounts of JavaScript and CSS that load (pointlessly) on websites that don't need this plugin.
* Shows the file sizes for each loaded CSS & JavaScript file including external ones. This lets you identify which files you should focus your energy on. For example, if you have 90% of a 15kb file that isn't used, you should probably address it. However, if you have 80% of a 300kb file, focusing your time and energy on that will yield much better results in terms of PageSpeed.
* Tools To Inline JavaScript - Depending on your site, this could make a big difference.

There are a couple other features, but these are the main reasons why this plugin is worth it to us and our customers. If you don't understand why these features are immensely powerful, you should browse through the rest of our blog → start here: [an article on how to fix render blocking resources](https://speedopp.com/posts/how-to-eliminate-render-blocking-resources-for-wordpress-websites/) (hint, unoptimized JavaScript is one of the most prevalent render-blocking resources).

Here are some of our use cases for the paid version of this:

Remove unused fonts from an individual page without recoding the site:

![](https://i.snipboard.io/sM7YS4.jpg)

Load plugins _only in the pages_ where they’re required (this saves a TON of loading time):

![](https://i.snipboard.io/87swK6.jpg)

ID which CSS files would have the biggest impact on PageSpeed if addressed:

![](https://i.snipboard.io/b7yDnQ.jpg)

As you can see, Asset Clean Up is a super powerful tool for website owners, agencies and developers. It's the perfect tool to help you remove unused CSS and boost your PageSpeed score, and we wholeheartedly recommend it to anyone looking for a free way to boost their PageSpeed score and website speed. 

[Take a look at the plugin here.](http://out.speedopp.com/asset-cleanup)

Interested in a professional service that will improve your PageSpeed score (or your money back)? [Check us out.](https://speedopp.com)