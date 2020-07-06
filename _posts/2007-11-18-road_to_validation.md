---
title: "Road to validation."
date: "2007-11-18"
---

Overseeing the current [Wayne State University](http://wayne.edu/) homepage is like running with a tiny pebble in your shoe. You feel it every step but your going so fast you cannot stop to take it out.

Working with a site so large it can become discouraging but taking one step at a time one can accomplish anything. Yesterday we took our first step, moving the site to a new server in an environment that we are comfortable and flexible in.

The old version of the site was sitting on an NT box, a requirement of the company who built it over 4 years ago. When I started I had a few goals, one was to get the site off that server and get it validated and rewritten in [POSH](http://microformats.org/wiki/posh). Well that day has come and we managed to sprinkle in a few other goodies along the way, here are some highlights:

- [Valid XHTML Transitional](http://validator.w3.org/check?verbose=1&uri=http%3A%2F%2Fwayne.edu%2F)
- No More Tables
- No SQL Requests
- [ADA Accessible](http://www.cynthiasays.com/mynewtester/cynthia.exe?rptmode=2&url1=http%3A%2F%2Fwayne.edu%2F)
- Way Prettier Print Version
- Mobile Version
- [Microformats](http://microformats.org/)
- [Opensearch](http://www.opensearch.org/Home)
- [YSlow](http://developer.yahoo.com/yslow/) Grade B (83)

It took some work to get here but we made it. There is still some tweaking to go but all in all its setup. Now its time to concentrate on the content, we are going to be doing a page by page overhaul and adding greater functionality and layout to each child page.

In addition to the content we will also be shrinking the file size and HTTP requests further and further down to the base minimum. Right now we are ~90k depending on the panel that loads and 16 HTTP requests with an empty cache, we hope to cut the size down by a third and get rid of 2-4 requests.

Stay tuned for more progress.
