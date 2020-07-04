---
title: "Understanding Rails Partials"
lastModified: "2007-07-09"
---

Partial’s are great, i really wish there was something as straight forward in [Smarty](http://smarty.php.net/). With Smarty it would require a loop and an include, but partials roll that all into one. It great when you are displaying a list of items, especially if that list can be used in multiple pages in many contexts.

With PHP you would have to:  

{include file='links.tpl' title='Newest links' links=$link\_array}

Then in links.tpl do the loop:  

<div id="box">  
<h3>{$title}{/h3>  
<ul>  
{foreach from=$links item=l}  
.. do stuff  ...  
</foreach}  
</ul>  
</div>

But Rails on the other hand if you pass a collection to a partial it automatically treats each item in the collection as an individual item and there is no need to create a loop it is done inheritly.

Rails:  

<%= render :partial => 'list\_item', :collection => @customers %>

\_list\_item.rhtml:  

<tr class="<%= cycle('odd','even') %>">  
<td><%= link\_to list\_item.last\_name,  
:controller => 'customer',  
:action => 'show',  
:id => list\_item.id %></td>  
<td><%= list\_item.first\_name %></td>  
<td><%= list\_item.city %>, <%= list\_item.state %></td>  
</tr>

You may be thinking that it is really not much less work but writing loops all day long can get tiring especially when they are look the same and do the same thing. Partials take it to the next level and add a real intuitiveness to the loop because it is not just an array of items you are looping through it is actual objects a template is being rendered with.

Partials can also be used without the collection in just a basic include of a sub template the syntax is below. Useful but I have not found it as much fun.  

<%= render :partial => "account", :locals => { :account => @buyer } %>
