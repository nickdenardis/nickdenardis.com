---
title: "Social Visual Alt Text browser extension now supports Mastodon"
date: "2023-01-14"
description: "Social visual alt text browser extension now with Mastodon support!"
---

As more people migrate to Mastodon the requests flooded in to add for visualizing alt text on the platform.

The extension needed to:

1. Request access to all sites (since Mastodon instances can be on any domain)
2. Be split apart so different scripts ran on each domain (instead of the same script running across all sites)
3. Allowing for flexibility in the DOM structure (since each Mastodon instance can customize its layouts)

It took a little longer than expected but the extension now has experimental support for Mastodon!

## Mastodon support is now available (experimental)

Install the latest version of the browser extension from the [Chrome Webstore](https://chrome.google.com/webstore/detail/social-visual-alt-text/bkpbmomfemcjdeekdffmbohifpndodmi) or [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/social-visual-alt-text/).

![Screenshot of Mastodon support](/images/mastodon-with-alt-single.jpg)

Due to Mastodon instances being able to be run on any domain, you will need to accept the permissions for any domain.

<img src="/images/extension-permissions.png" alt="Screenshot of Mastodon browser access" width="400" />

The options will become available to enable the "Mastodon support (experimental)”. 

<img src="/images/extension-options.png" alt="Screenshot of extension options" width="400" />

At the moment the support is for the default Mastodon visual style, some completely customized instances may not pick up the DOM matching and the alt text will not be displayed. If you come across instances where the text isn’t displaying but should be, [submit an issue on the Github repository](https://github.com/nickdenardis/social-visual-alt-text/issues).

## Spread the word and support the development

I'm an accessibility advocate and independt developer doing work in on these extensions in what time I have available. I would appreciate if you [tweeted](http://twitter.com/intent/tweet?text=The%20Social%20Media%20Visual%20Alt%20Text%20browser%20extension%20has%20added%20support%20for%20Mastodon!%20https%3A%2F%2Fnickdenardis.com%2F2023%2F01%2F14%2Fsocial-visual-alt-text-mastodon%2F&via=nickdenardis), tooted or posted on [LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fnickdenardis.com%2F2023%2F01%2F14%2Fsocial-visual-alt-text-mastodon%2F) about the extension to bring more awareness. Alternatively, if you could provide a star rating or comment on the [Chrome Webstore](https://chrome.google.com/webstore/detail/social-visual-alt-text/bkpbmomfemcjdeekdffmbohifpndodmi) or [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/social-visual-alt-text/reviews/) that would also help to bring awareness to others. If you're reading this, thanks for being awesome!