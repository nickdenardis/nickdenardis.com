---
title: "Visualize alt text on social media sites"
date: "2021-06-23"
---

TLDR; I've created a [Chrome extension](https://chrome.google.com/webstore/detail/social-visual-alt-text/bkpbmomfemcjdeekdffmbohifpndodmi) and [Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/social-visual-alt-text/) to visually show alt text on social media sites (Twitter, Facebook, Instagram and more coming soon)

## Background 

As a sighted user a lot of the accessibility considerations for a website are hidden, some of these are to enable equal access to content and functionality but others would be helpful for everyone. As a social media manager and responsible for the accessibility of all our public digital properties at [Wayne State University](https://mac.wayne.edu/web), we’re always striving to ensure the content we post (or repost) is available to everyone. 

When reviewing our own posts (and when deciding on posts to repost) the first thing we look for is if any photo/GIF/video have alternate text applied and the quality of the description. It is one thing to pass an automated  [WCAG guideline](https://www.w3.org/TR/WCAG20-TECHS/H37.html), it is another to accurately describe a photo, GIF, or provide captions to get the same information across to a non-sighted user.

## The problem

As a sighted user it is not easy to determine the alt text for an image. It requires inspecting the photo in the browser, opening the developer tools and sometimes clicking through a complicated nested DOM to find the image element and look at the attributes. 😫

<div class="row -mx-4 md:flex">
    <div class="md:w-1/2 px-4">
        <h2>Manually inspecting 'alt' attribute</h2>
        <img alt="Screenshot of Twitter.com DOM to select an image showing how deeply nested it is" src="/images/twitter-alt-text-dom.png" />
    </div>
    <div class="md:w-1/2 px-4">
        <h2>Extension displays 'alt' visually</h2>
        <img alt="Example of scrolling through Twitter timeline with some images showing alt text and others with a red line" src="https://nickdenardis.github.io/social-visual-alt-text/assets/twitter-example-timeline.gif" />
    </div>
</div>

## Potential solutions

There are a few existing solutions out there, the [Web Developer toolbar](https://chrome.google.com/webstore/detail/image-alt-text-viewer/nhmihbneenlkbjjpbimhegikadfleccd ) allows you to turn on alt text for all images, but it doesn’t work past the first Twitter screen with its infinite scrolling.

There is a [bookmarklet to display alt text](https://adrianroselli.com/2015/01/css-bookmarklets-for-testing-and-fixing.html#NewTwitterAlt) on static pages, but again it doesn't work well with infinite scrolling pages.

There is also [specialized Chrome extension](https://chrome.google.com/webstore/detail/image-alt-text-viewer/nhmihbneenlkbjjpbimhegikadfleccd) to do the same thing. But again, it does not continue to show the text as you scroll down the page.

## The solution

After an initial proof of concept, the biggest hurdle was to be able to read and modify new tweets as they scrolled into the page while still being performant. I borrowed the solution from the Buffer extension which runs every 500 milliseconds to detect new tweets and attaches the additional buttons to each post and flags it as already done. Far simpler than my initial approach on trying to detect changes to the DOM.
Social visual alt text extension

## Download
- [Chrome webstore](https://chrome.google.com/webstore/detail/social-visual-alt-text/bkpbmomfemcjdeekdffmbohifpndodmi)
- [Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/social-visual-alt-text/)

Once installed, the extension will display the alt text to sighted users on the following platforms:

- [x] Twitter images
- [x] Twitter GIFs
- [x] Facebook (experimental, single-image posts working)
- [x]  Instagram (experimental, single-image posts working)
- [ ] LinkedIn
- [ ] Tweetdeck

By default, the extension will show the alternate text for any Twitter, Facebook or Instagram image or GIF below the image with a blue background.

Any image without alt text applied, a red line will show below the image.

## Twitter examples

| Photo with alt | Photo without alt |
|--------|--------|
| ![Photo with alt text visible under image](https://nickdenardis.github.io/social-visual-alt-text/assets/twitter-example-single-image.png) | ![Photo without alt text showing a read line under the image](https://nickdenardis.github.io/social-visual-alt-text/assets/twitter-example-no-alt.png) |

| Multiple photos with alt | GIF with alt |
|--------|--------|
| ![Multiple photos with each alt text displayed underneith](https://nickdenardis.github.io/social-visual-alt-text/assets/twitter-example-multiple-photos.png) | ![GIF with alt text visible below](https://nickdenardis.github.io/social-visual-alt-text/assets/twitter-example-gif.png)

## Instagram examples

| Human alt text | AI alt text |
|--------|--------|
| ![Single photo image post with alt text underneith](https://nickdenardis.github.io/social-visual-alt-text/assets/instagram-example-single-image.png) | ![Single photo image post with different background of AI generated alt text underneith](https://nickdenardis.github.io/social-visual-alt-text/assets/instagram-example-single-image-ai.png) |

## Facebook examples

| Human alt text | AI alt text |
|--------|--------|
| ![Single image post with alt text underneith](https://nickdenardis.github.io/social-visual-alt-text/assets/facebook-example-single-image.png) | ![Single image post with alt text underneith, older interface](https://nickdenardis.github.io/social-visual-alt-text/assets/facebook-example-single-image-ai.png)

## Tweetdeck examples

| Photo with alt | Photo without alt |
|--------|--------|
| ![Three columns of images, the first with alt text, second without and third GIF without](https://nickdenardis.github.io/social-visual-alt-text/assets/tweetdeck-example-three-column-images.png) | ![Tweetdeck modal with a single image showing alt text below](https://nickdenardis.github.io/social-visual-alt-text/assets/tweetdeck-example-modal-image.png)

## Options

![Options modal showing Twitter image and GIF settings](https://nickdenardis.github.io/social-visual-alt-text/assets/extension-options.png)

In the Options for the extension, you can toggle on and off various types of images for Twitter, Facebook and Instagram. You can also change the background color and text color of the display.

It is eye-opening to see how many images have no alt text at all, the extension treats the default “Image” as not providing alt text because it doesn’t accurately enough describe the image. It is also eye-opening how many large verified brand accounts are not providing alt text for their images.

## Related extensions

While researching solutions I also came across an [extension that disables the "Tweet" button if alt text has not been applied](https://chrome.google.com/webstore/detail/twitter-required-alt-text/fpjlpckbikddocimpfcgaldjghimjiik ), although it doesn’t appear to be maintained.

Lastly, after coming up with a solution, I did come across [another extension that takes a similar approach](https://chrome.google.com/webstore/detail/alt-or-not/bhbbijphceaijfpppmdjmjalnogkhamc ) and works well, although it is only available for Twitter and Tweetdeck.

## Feedback and feature requests

I've been building this extension in the public on [GitHub](https://github.com/nickdenardis/social-visual-alt-text) and [posting updates on Twitter](https://twitter.com/nickdenardis). I'm looking for feedback and on what's working, what isn't working and what would be helpful for you, regardless of how far-fetched it seems. Tag me on Twitter, my DM's are also open or [put in a feature or bug request on Github](https://github.com/nickdenardis/social-visual-alt-text/issues).

I'm hoping to continue building out functionality and refine the code to ensure it is as performant as possible and keeps up with the various user interface changes constantly rolling out to the social media sites.