---
title: "jQuery vs Prototype - Document Load: jQuery wins"
date: "2007-09-15"
---

Recently I started using [jQuery](http://jquery.com/) instead of [Prototype](http://www.prototypejs.org/) for my web applications. When I first started using a javascript library I picked Prototype because to be honest jQuery intimidated me, there was a lot of mystery about it. Well I took another look at it a few days ago and I was floored, boy I was missing out. jQuery byte for byte in my opinion kicks prototypes butt.

Take for example attaching a function to the document load and adding an onclick action to a link.

Pototype:  

// Initially set everything up  
init = function (){   
  // If there is an expand dom element   
  if ($('expand')){   
    Event.observe($('expand'), 'click', ExpandMenu, false);   
  }   
} // Attach the onload function   
Event.observe(window, 'load', init, false);   

jQuery:  

// Initially set everything up  
$(document).ready(function(){   
  // On click event   
  $("#expand").click(function(){   
    // Function actions here  
  });   
});   

It may not seem like a great deal of code reduction but scanning the code from top down (say if you were a developer brought in to fix a bug) shows how more fluid jQuery is in terms of execution flow. Prototype jumps all over the place…  

1. First define the initializer function
2. Next find the element on the page
3. Set an observer on it and direct it yet another function
4. Last but not least attach the initializer to the document load

It seems that is the exact opposite order of its execution, jQuery on the other hand…  

1. Create a function and attach it to the document ready state
2. Create a function and attach it to a dom element on click
3. Done.

First round goes to: **jQuery**
