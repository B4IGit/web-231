'use strict';
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Devin Ledesma
      Date:   03/01/2025

      Filename: project06-03.js
*/
// Access Form
const form = document.forms['billShip'];

// Variable to access #useShip
const useShip = form.elements['useShip'];

// Add event listener, onClick
useShip.addEventListener('click', copyShippingToBilling);

// Copies values from shipping to billing
function copyShippingToBilling() {
  if (useShip.checked) {
    form.elements.firstnameBill.value = form.elements.firstnameShip.value;
    form.elements.lastnameBill.value = form.elements.lastnameShip.value;
    form.elements.address1Bill.value = form.elements.address1Ship.value;
    form.elements.address2Bill.value = form.elements.address2Ship.value;
    form.elements.cityBill.value = form.elements.cityShip.value;
    form.elements.countryBill.value = form.elements.countryShip.value;
    form.elements.codeBill.value = form.elements.codeShip.value;
    form.elements.stateBill.value = form.elements.stateShip.value;
  }
} // End copyShippingToBilling function

// Selects all 'text' input elements
const formElements = form.querySelectorAll("input[type='text']");

// I am not sure what this does. Stores the index of each form element?
const fieldCount = formElements.length;

// Access #errorBox for error message
const errorBox = document.getElementById('errorBox');

// Loops through each element of the formElements
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener('invalid', showValidationError);
}

// If form has errors, prevent form from submitting
function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = 'Complete all highlighted fields';
}
