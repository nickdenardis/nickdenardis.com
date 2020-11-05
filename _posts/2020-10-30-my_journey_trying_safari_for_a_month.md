---
title: "My journey trying Safari for a month"
date: "2020-11-05"
---

I really do want to like [Safari 14](https://www.apple.com/safari/). There are so many [advantages to multiple browser render engines](https://www.quirksmode.org/blog/archives/2020/01/new_browser_on.html) (although not discounting the disadvantages too) but the speed and battery usage for me were attractive. 

Decided I would experiment and change my default browser to Safari (from Chrome) for a month to see how a real test works.

## Performance

I'm conscious of number of open tabs, extensions installed or activated and even use a [separate browser for web development](https://www.google.com/chrome/canary/) with dozens of extensions specific for the purpose that is open only when needed.

### Web development only extensions

![Chrome Canary browser extension list](/images/safari-chrome-dev.png)

## Battery life was good. 

This was the hardest to test in my current situation at home all day, so I used the proxy of CPU usage. Typically I am walking to multiple meetings per day at work and I only charge my laptop once per day. Sometimes Chrome would take over and at some point tank battery usage. I'd have to find a plug to get through the day.

## Keyboard media controls

Controlling audio being played through the browser is a must for me. Safari supports [Media Playback Controls](https://w3c.github.io/web-roadmaps/media/control.html) which worked with Soundcloud and other music sites (although next/previous tracks didn't work). But at least when I need to mute real fast to hear something happening in the room, I'm able to do so by clicking the pause button on the keyboard instead of having to navigate to a specific tab and click the spacebar.

## Site rendering

Found a few UI rendering bugs but unfortunately I don't have screenshots to explain the before and after. I should have thought about taking them before they were fixed. It was nice to see how others experience the sites I work on though to get out of the "works on my computer" Mac/Chrome setup that affects most developers.

## Extensions

Extensions support was confusing to me. As someone who has created extensions for Chrome and ported them to Firefox in the past, I completely understand the difficulty with supporting multiple browsers and [Apple announced progress in this area coming with Big Sur](https://techcrunch.com/2020/06/25/apple-will-let-you-port-google-chrome-extensions-to-safari/). But it just isn't here yet.

LastPass requires a separate app running in the background to enable the plugin. This defeats my minimalist tendencies to run as few apps as possible to get the job done. It worked like a charm though and I didn't need to import or switch back and forth between apps to get logged into any site.

![Dropdown of Lastpass Safari extension](/images/safari-lastpass.png)

Another extension I didn't realize I rely on is [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en). It was weird seeing ads again, although Safari claims to block trackers, which is helpful. The loading of page seemed sluggish and the repositioning of items on the page during load and interruption of reading text by ads loading and moving in the middle was so disruptive I found myself using [Pocket](https://app.getpocket.com/) more often to get a simplified view of articles.

Like Lastpass, Pocket requires a separate app to be running to get an extension in Safari. This bothered me so I opted for the Bookmarklet to add articles. My experience with it was hit or miss. Multiple times it asked me to re-login to save a page which was not fun.

![Safari Pocket extension](/images/safari-pocket.png)

A few other Chrome extensions I can't live without had no plan in supporting Safari or required yet another separate app

- [Read Aloud: A Text to Speech Voice Reader](https://chrome.google.com/webstore/detail/read-aloud-a-text-to-spee/hdhinadidafjejdhmfkjgnolgimiaplp)
- [Grammarly](https://www.grammarly.com/safari) (has a separate app like the extensions above which I find counterintuitive)
- [Google Hangouts](https://chrome.google.com/webstore/detail/google-hangouts/nckgahadagoaajjgafhacjanaoiihapd) (but this is going away soon anyways)

## Pinned tabs pet peeve

By far my biggest complaint, the "Pinned tabs" implementation isn't exactly right. Something I typically do for Soundcloud, email and our project management system so they don't take up tab space, are accessible with Command+1,2,3 and are always available. 

![Pinned tabs in Safari](/images/safari-tabs.png)

Well in Safari, if you accidently close all your regular tabs, the browser window completely closes, including all your pinned tabs, like they are not part of the session at all. If you open the browser window back up it has to refresh all the pinned tabs, you loose any music that was playing and email/etc have to reload. This in my mind is a UX failure, a tab should act as an active part of the browser regardless if it is pinned or not. If there are pinned tabs, Command+Q should not be able to close the entire window, it should require an extra key or manually acknowledging the closure of the entire window (including pinned tabs)

![Keyboard settings to remap Command Q](/images/safari-quit.png)

I got around this by remapping the Command+Q quit option for Safari only to make it harder to accidently quit and re-mapped it to Shift+Command+Q (which I forgot is to lock the computer) which is fine, since I never want to be able to accidently close Safari until I use a mouse to click the Quit menu item.

## Final thoughts

Verdict: I really want to like Safari and I'll give it another try after the Big Sur update, but ultimately I switched back to Chrome for my day-to-day. This was mostly because of the plugin support. The battery life wasn't that much worse and the ability to have multiple profiles set up and using `Command+`` between those profiles (Home and work) is such a time saver.

If you stumbled across this and feel like there was something I missed or another way to go about using Safari, [I'd love to hear about it](https://twitter.com/nickdenardis).