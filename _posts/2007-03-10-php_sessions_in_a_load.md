---
title: "PHP Sessions in a Load Balanced Environment"
date: "2007-03-10"
---

One thing that we struggle with in our server environment as many others do is doing load balancing and being able to sync session data between all the machines. Having one dedicated session space or server can be an option but that can get a little messy or expensive. So we added MySQL Sessions to the Simpl framework and it is easy as pie to use.

Originally adopted from [Joseph Crawford](http://www.josephcrawford.com/php-articles/going-deep-inside-php-sessions/) but implemented completely in Simpl. Josephs was great except it seemed to be connected to a larger whole. The bits and pieces were there for the session but they just needed to be combined with a framework. Below is a fully featured example working and usable.

Prerequisits:

- [PHPSimpl  
    ](http://code.google.com/p/phpsimpl/)
- MySQL Database Connection  
    
- “session” Table  
    
    CREATE TABLE \`session\` (  
    \`ses\_id\` varchar(32) NOT NULL,  
    \`last\_access\` int(12) unsigned NOT NULL,  
    \`ses\_start\` int(12) unsigned NOT NULL,  
    \`ses\_value\` text NOT NULL,  
    PRIMARY KEY  (\`ses\_id\`)  
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Used to store the sessions data';
    

Usage Steps:

1. Download and copy Simpl to the web server.
2. Define some base items  
    
    // Directories  
    // Always Include trailing slash "/" in Direcories  
    define('DIR\_ABS', '/usr/local/www/');  
    define('FS\_SIMPL', DIR\_ABS . 'simpl/');  
    define('FS\_CACHE', DIR\_ABS . 'cache/');// Enable Database Sessions  
    define('DB\_SESSIONS', true);// Database Connection Options  
    define('DB\_USER', 'username');  
    define('DB\_HOST', 'localhost');  
    define('DB\_PASS', 'password');  
    define('DB\_DEFAULT', 'site\_data');
    
3. Include the framework  
    
    // Simpl Framework  
    include\_once(FS\_SIMPL . 'simpl.php');
    
4. Connect to the database  
    
    // Make the DB Connection  
    $db = new DB;  
    $db->Connect();
    
5. Use the $\_SESSION super global just as you normally would and PHPSimpl does all the work for you.  
    

The only modification may be the page cannot close the database connection since the \_SESSION variable has to be written after the page is completely loaded and thus must still have the connection available.

Simpl and the $db object to all the hard work of redirecting the session data and pulling it from the database. No need to call a session\_start() or even interact with the session table.

If you are interested in what the Session class looks like here is the source code:  
[Session.php](http://phpsimpl.googlecode.com/svn/trunk/simpl/session.php)
