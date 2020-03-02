

/* Form Submission */


function validateForm(event) {
  var name = document.getElementById("name").nodeValue;
  var email = document.getElementById("email").nodeValue;
  var emailValidation = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

  if ( name ==== '' || email === '') {
    // Error: No name or email
  } else if ( !(email).match(emailValidation) ) {
    // Error: Invalid Email
  } else {

  }


}