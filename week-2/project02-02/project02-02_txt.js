/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Devin Ledesma
      Date:   01/16/2025

      Filename: project02-02.js
 */

// Function to validate form inputs
function verifyForm() {
  // Declares global variables and passes the values submitted from the form
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  console.log(name);
  console.log(email);
  console.log(phone);

  // Conditional Operator to test if data has been entered into inputs
  name && email && phone
    ? window.alert('Thank you!') // all fields have been entered
    : window.alert('Please fill in all fields'); // contains any empty fields
}

// Handles form submission
document.getElementById('submit').addEventListener('click', verifyForm, false);
