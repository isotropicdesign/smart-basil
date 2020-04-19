---
template: post
title: Making Wordpress Into A Static Site
subtitle: "Static = Speed + Security + \U0001F601"
date: 2020-04-19T20:21:34Z
excerpt: By converting a WordPress site into a static one, you benifit from both speed
  and security. With [IsoForms](https://isoforms.co), you can integrate dynamic foms
  as well!
image: "/images/Static-Wordpress.jpg"
thumb_image: "/images/Static-Wordpress.jpg"

---
_This post was originally published on_ [_IsoForms_](https://isoforms.co)_, a platform that allows you to generate and manage conversational forms. IsoForms is made by the same people who offer SpeedOpp: the_ [_Isotropic_](https://isotropic.co) _digital agency._ 

This guide will teach you how to convert your WordPress site into a static one, discuss pros and cons surrounding this, potential pitfalls and how to get around them.

***

## Why?

You may have never even thought of making your WordPress site into a static website before, but you definitely should. WordPress has security flaws, and is a pretty heavy CMS. You need to worry about updating plugins, themes, while making sure everything is optimized for speed. This can be tough, especially if you’re building your own corporate website (which is tough).

Converting your site into a static one addresses all of these problems — with tradeoffs, of course.

### The Pros and Cons of Static Sites

**Pros**

* Crazy quick loading and delivery speeds (think sub one second).
* Increased SEO because of that speed and well defined static markup
* Free or super cheap hosting (that’s still insanely fast)
* Security – there are no plugins or themes to update, and nothing for hackers to really hack

**Cons**

* Lack of dynamic features like forms and code
* You’ll need to know your way around code if you want to update pages/static content

Luckily, there are workarounds to the cons, so we can get the best of both worlds.

***

## How To Convert It

There’s an awesome plugin called [WP2Static ](https://wp2static.com/)that we recommend when transitioning your site to Static. It’s super simple (and FREE), you download it, click one button, choose where to route the output (we recommend a Zip archive download, which can be uploaded anywhere, or an output to a S3 bucket which can be configured to host your static site). If you have any issues, the level of support that the developer offers (remember, its FREE) is second to none. There’s also a [paid licence](https://wp2static.com/addons/) that gives you access to dozens of addons that will allow you to push your site to pretty much any hosting service you can think of.

![](https://wp2static.com/images/wp2static.png)

Addressing Con #2: You can also make the page updating process more user friendly by hosting a private wordpress installation and pushing periodic updates to the static site from it. This way you don’t need to hop into the code and can update stuff visually. This works well for someone looking to update their site once or twice a year — if you’re going to do it more than this, you’re probably better off using a CMS.

***

## Keeping Essential Dynamic Features

A big roadblock when it comes to making static sites is the fact that dynamic and static don’t mix. There’s no CMS, database or form processing software on a static site by design. Due to these limitations, we used to choose to [build our client sites](http://isotropic.co/) exclusively on WordPress and accept the higher loading times and security risks (which can be 100% mitigated by vigilant hardening and scanning measures — something we include free for all of our clients). There are a few ways of getting around this, but many existing solutions are cost or design prohibitive.

We’ll talk about the two most essential dynamic features of any website, and how to incorporate them into a static website.

***

### The Forms

**We built IsoForms for this.** One of the biggest issues with the simple corporate sites that we were building was that they _needed_ contact forms. Really any site needs contact forms. If we wanted to build statically, then there would be no forms without some form of dynamic code, and even then, our clients would only get Form to Email, not Form to Database to Email Notification (which is what we wanted).

There are some ways around this, in the form of embeddable solutions. Think JotForm or Typeform – you build the form, you embed it into the site via iFrame. These existing solutions do the job, but they cost a lot and aren’t fully customizable.

* ![Typeform Help (@typeformhelp) | Twitter](https://pbs.twimg.com/profile_images/962997096692568064/_VeLrv6D.jpg)
* ![Dropbox Forms – JotForm's Free Form Builder with File Upload](https://www.jotform.com/resources/assets/icon/jotform-icon-orange-400x400.png)

Typeform comes in at $70/month and does exactly what IsoForms/WPForms (or any other form plugin for WordPress) does — they just make it interactive and pretty. JotForm could be free, but that plan is really limiting — the next in the ladder costs $29/month to do basic form stuff. Not ideal, and it didn’t really make sense for small business who were already paying a decent amount money for [quality hosting](https://isotropic.co/blog/our-web-host-recommendations-for-every-type-of-project/) and support.

[IsoForms](https://isoforms.co/features-integrations/), the thing we built to fix this situation for our clients, offers everything you’d need in conversational forms from $4.59/month — a bit more bearable than $70/month. They’re embeddable via iFrame, fully customizable and add that form functionality needed to static sites.

***

### The Blog

Another important dynamic aspect of a static site is the Blog. Content marketing is key for good SEO placement, and some clients also needed to publish press releases or news. In today’s day and age, a blog should be considered essential to the ROIability of any web design project.

The way you can do this is by incorporating WordPress (or any other CMS) into your static site. You can install it on a subdomain (blog.company.com) or subdirectory (company.com/blog), and style it to look exactly like it’s static counterpart. This allows you to mesh the best of both worlds — easy publication, SEO and organization of blog posts with a really speedy static site built around it.

Also, once you’re off WordPress with the main site, you don’t need to stick with it for the blog. You can take a look at other CMSs. We’ve had our eye on a few, like Ghost CMS and PageKit (haven’t gotten to integrate them with anything yet, though). You can also opt for a smaller, quicker type of CMS called a Flat File CMS, which does not use traditional databases. Take a look at [WonderCMS](https://www.wondercms.com/) if you’re interested in that.

* ![Ghost: The #1 open source headless Node.js CMS](https://ghost.org/images/meta/Ghost.png)
* ![Pagekit CMS Stable version 1.0 released](https://www.norrnext.com/images/blog/pagekit-1-0-released.jpg)

There are also off site alternatives to play around with too, like [Medium](https://medium.com/).

***

## Where To Host It

If you’re in the demographic of our customers (small, physical service businesses), then you can likely get away with hosting the site anywhere — it’s not going to get to big and it won’t gobble up server resources like a typical CMS based site.

We’re big fans of [BlueHost](http://isodes.link/hosting) – and this use case makes them really stand out due to their super low cost.

We can also host the site on LightSail, [or even split it across two servers](https://wordpress.stackexchange.com/questions/155562/can-you-have-a-blog-in-a-subdirectory-hosted-on-a-different-server), using S3 buckets to host the static part of the site (for speed, you can get faster service for much less when your site is static… you may even qualify for the free tier) and another company to CMS/blog part of the site ([managed WordPress hosting](http://isodes.link/hosting) helps on the security end of things, especially if it’s a client site).

If you choose the latter method, WP2Static, the plugin we talked about before, can auto deploy the static site to S3, GitHub, Netlif, BunnyCDN, BitBucket, GitLab and a bunch of other services.

If you have any questions regarding this [feel free to reach out](http://isotropic.co/contact); we’re happy to point you in the right direction of essential education!

**This post was published by Isotropic Design, a digital agency that makes stunning responsive websites, and the creators of IsoForm.**