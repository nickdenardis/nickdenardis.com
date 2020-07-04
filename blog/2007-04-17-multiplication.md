---
title: "Multiplication"
lastModified: "2007-04-17"
---

The MultiForm() function is here. It allows an entire form or just one form field to be displayed with the \[\] brackets on the end of the input name. This allows the form to have multiple copies of the same fields in the same form without anything getting overwritten or any additional setup.

Here is how it is used:  

// Create the Address  
$myAddress = new Address;// Get a list of all their addresses  
$myAddress->SetValue('customer\_id', $myCustomer->GetPrimary());  
$myAddress->GetList();// Display all their current addresses  
if (count($myAddress->results) > 0){  
foreach($myAddress->results as $address){  
 $myAddress->ResetValues();  
 $myAddress->SetValues($address);  
 $myAddress->MultiForm();  
}  
}

Here is the output:  
![Multiplication Output](/images/addresses.png)
