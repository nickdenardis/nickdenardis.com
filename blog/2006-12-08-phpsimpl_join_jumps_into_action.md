---
title: "PHPSimpl Join() jumps into action"
lastModified: "2006-12-08"
---

Its amazing how much code can be reduced by using a framework, especially a framework that accomplishes all the most basic elements without interfering with usability. With [PHPSimpl](http://code.google.com/p/phpsimpl/) we are trying to accomplish just that. So we recognized the problem of information being in two different tables and having two queries just was not cutting it. So we are proud to announce the Join() function in DbTemplate. This is now integrated into the examples also to get you up and running with it.

Here is a sample code snipit of joining the Registration, User and Payments tables to view information all in one list with one query:  

// Create the Registration class  
$myRegistration = new Registration;  
$display\[\] = array('registration\_id','user\_id','date\_registered','guests');// Create the User Class  
$tmpUser = new Users;  
$myRegistration->Join($tmpUser, 'user\_id', 'INNER');  
$display\[\] = array('first\_name','last\_name');// Create the Payments Class  
$tmpPayment = new Payment;  
$myRegistration->Join($tmpPayment, 'conference\_id', 'INNER');  
$display\[\] = array('conference\_id', 'amount', 'status', 'method');// Get a list of all the Registrations  
$myRegistration->GetList($display,'date\_registered','DESC');

  
Questions or Concerns? Head over to our [PHPSimpl Group](http://groups-beta.google.com/group/phpsimpl).
