---
title: "Just added, Output individual fields"
date: "2006-12-08"
---

So [PHP Simpl](http://code.google.com/p/phpsimpl/) does a good job of outputting an XHTML form with very extend able features such as labels, required \*’s, size and maxlength calculation, example and error output automatically. But have you ever just wanted to output the form in your own way? Well now you can, this can be accomplished with the FormField() function inside the DbTemplate class. It handles all that same great XHTML formatting, you just have to worry about where you want to flied to be displayed.

Function Prototype:  

public function FormField($field, $hidden=false, $options='', $config='');

  
Example:  

$myPost = new Post;  
$hidden = false;  
$options = array();  
$config = array();echo '<form>';  
$myPost->FormField('title', $hidden, $options, $config);  
echo '<input name="submit" value="Save" type="submit">';  
echo '</form>';
