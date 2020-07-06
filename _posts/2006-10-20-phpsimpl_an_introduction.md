---
title: "PHPSimpl - An Introduction"
date: "2006-10-20"
---

[PHPSimpl](http://code.google.com/p/phpsimpl/) is a a PHP framework for rapidly creating classes that mirror MySQL tables. The framework comes with the basic functions to list, display and edit records from the database. With this framework a simple manager and front of a site can be created within a few minutes. An example database, manager and front end are included with the framework.

Since this is a very new framework an introduction is in order.

First, Download the framework, we host it on [Google Code](http://code.google.com/p/phpsimpl/) and you can download it via Subversion.

Second, Put it on a server that supports [PHP](http://php.net/) and [MySQL](http://mysql.com/). It does not have to be in a web viewable directory but currently it is recommended to be in /public\_html/ root.

Setup the defines. There are a few defines that are nessisary to run PHP Simpl these must be declaired before the include of the class.  

define('FS\_SIMPL', '/public\_html/simpl/');  
define('DB\_USER','user');  
define('DB\_HOST','localhost');  
define('DB\_PASS','pass');  
define('DB\_DEFAULT','my\_blog');  
define('DEBUG',false);  
define('DEBUG\_QUERY',false);  
define('USE\_CACHE',true);  
define('CLEAR\_CACHE',false);

  
The first one is manditory the rest are not, but it is a good idea to define them if you do not want to go into the main PHP Simpl config to change to debug mode or to clear the cache when you want to.Next include the main class then load any helper classes you may need. This must be done before you include your own classes file.  

include\_once(FS\_SIMPL . 'simpl.php');  
$mySimpl->Load('Form');  
$mySimpl->Load('Db');  
$mySimpl->Load('DbTemplate');  
$mySimpl->Load('Folder');  
$mySimpl->Load('File');  
$mySimpl->Load('Upload');  
$mySimpl->Load('Image');

  
Now that you have PHPSIMPL up and running to write a simple class to mirror a mysql database table it is as simple as the example below.  

class  Post extends DbTemplate {  
  function Post($data=''){  
     $this->required = array('title','body');  
     $this->table = 'blog\_post';  
     $labels =     array('is\_published'=>'Published:','user\_id'=>'Author:','category\_id'=>'Category:');  
     $examples = array('category\_id'=>'ex. PHP, MySQL, Cars, XML, PHPSIMPL');  
      $this->DbTemplate($data, $this->required, $labels, $examples, $this->table);  
  }  
}

  
And you are done, this Post class now has full interaction with the database table. You can use the helper GetValue() and SetValue() functions to get and set field values and all the helper functions to interact. You can also write custom functions just like you always would if you were not using PHPSimpl. A full list of functions and their parameters will be published soon, if you cannot wait just simply look through the PHPSimpl source, everything is commented in JavaDoc format for ease of use.
