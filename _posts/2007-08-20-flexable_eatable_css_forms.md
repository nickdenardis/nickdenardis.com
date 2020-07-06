---
title: "Flexable, Eatable CSS Forms.."
date: "2007-08-20"
---

The web is filled with forms and the more social sites get the more forms required. At [Wayne State](http://wayne.edu) we end up creating a lot of forms for a lot of purposes. I am going to take for for example and show how we have come up with a fully flexible html form and how you can adopt it too.

**Basics:**

- RSVP form for an event
- Mixed input, select, radio, and textareas
- Has required fields
- Has examples for certain fields

**The HTML**

<form action="/" method="post" name="rsvp" id="rsvp">  
  <fieldset id="table\_rsvp">  
    <legend>RSVP Form</legend>  
    <div class="field\_first\_name">  
      <label for="first\_name"><em>\*</em>First Name:</label>  
      <input name="first\_name" id="first\_name" type="text" size="30" maxlength="128" value="" />  
    </div>  
    <div class="field\_last\_name">  
      <label for="last\_name"><em>\*</em>Last Name:</label>  
      <input name="last\_name" id="last\_name" type="text" size="30" maxlength="128" value="" />  
    </div>  
  </fieldset>  
</form>
