---
title: "A More Centered API"
date: "2007-04-08"
---

Its been a while but we have been working hard on an API that is going to withstand the test of time. This will make Simpl more expendable and not require as many application code level changes in the future.

These function have been added to the Form() Class:  

SetDisplay($fields) -> Boolean  
SetHidden($fields) -> Boolean  
SetOmit($fields) -> Boolean  
SetOptions($options) -> Boolean  
SetConfig($config) -> Boolean

They can make the DbTemplate and Form classes a lot easier to work with. Here is an example of how to declare a class with these new functions:  

class RSVP extends DbTemplate {  
/\*\*  
\* Class Constuctor  
\*  
\* @param $data array  
\* @return null  
\*/  
function \_\_construct($data=''){  
 // Setup the required fields  
 $required = array('first\_name', 'last\_name', 'email', 'phone', 'is\_attending');  
 // Setup their labels  
 $labels = array('first\_name' => 'First Name', 'last\_name' => 'Last Name', 'email' => 'E-Mail', 'is\_attending' => 'Attending');  
 // Setup the examples  
 $examples = array('email' => 'name@domain.com'); // Call the Parent Constructor  
 $this->DbTemplate($data, $required, $labels, $examples, 'rsvp', '', 'my\_database'); // Set the Display  
 $display = array('first\_name', 'last\_name', 'email', 'phone', 'is\_attending');  
 $this->SetDisplay($display); // Add a validation Type  
 $this->Set('validate','homepage', 'url'); // Set the defaults  
 $defaults = array('is\_attending' => 1);  
 $this->SetDefaults($defaults); // Set the Options  
 $options = array('is\_attending' => array('1' => 'Yes', '0' => 'No'));  
 $this->SetOptions($options); // Set the Config  
 $config = array('is\_attending'=>'radio');  
 $this->SetConfig($config);  
}  
}

Now the display and the config information follow the class where ever it is used. Also the default values can be used to set up the form before the user enters any information.Example of this being used on the page:  

// Create an RSVP Instance  
$myRSVP = new RSVP;// Display the form  
echo '<form>';  
$myRSVP->Form();  
echo '<input name="submit" value="Save" type="submit">';  
echo '</form>';
