---
title: "Image Maps - Ability vs. Appropriate Use"
lastModified: "2011-09-03"
---

I recently made a comment on an [EDU Checkup episode](http://educheckup.com/2011/08/06/new-england-law-boston-episode-261/) about how the use of image maps was a negative aspect in the code of a website.

I promptly got the following comment:

> I don’t get it. What’s wrong with image maps? Aren’t they still part of the HTML 5 working draft?
> 
> [http://www.w3.org/TR/html5/the-map-element.html#the-map-element](http://www.w3.org/TR/html5/the-map-element.html#the-map-element)
> 
> …doesn’t seem like they’re planning on phasing it out.

I wanted to take a minute to explain the difference between the official ability to use tags from the HTML spec and the appropriate use of those tags.

## Yes, it is part of the standard

For me the issue with image maps isn’t their place in the standard, it’s their implementation. Tables are still part of the HTML5 standard but there are appropriate uses and uses that make the user experience far more difficult than necessary.

## Let's add some context

For example on the NEL site an image map is used to link to the social media sites. I can see the motivation behind using a single image for all the social icons to reduce HTTP requests. But that means the meta data behind the links basically is stating here is an image with some hotspots on it. It doesn’t give any insight into what is being linked on. Personally I think the better approach would be to list out each link in an unsorted list with an appropriate ID to label what the list is for. Then using CSS to display them next to each other, hide the text with a text-indent: -9999em and then use that same single social logo sprite to display the appropriate icons image for people can can actually view the site.

## Image Map

[![](/images/social-map.png "social-map")](http://nickdenardis.com/wp-content/uploads/2011/09/social-map.png)

## Unordered List

[![](/images/social-context.png "social-context")](http://nickdenardis.com/wp-content/uploads/2011/09/social-context.png)

This would allow the same visual result but add far deeper meaning to the HTML for machines and screen readers.

Just my two cents. I am interested in seeing examples of real appropraite uses of image maps, if you have any please feel free to comment.
