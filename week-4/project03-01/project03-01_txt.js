/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Devin Ledesma
      Date:   01/30/2025

      Filename: project03-01.js
*/
// Accesses the collection of HTML elements with class (menuItem)
const menuItems = document.getElementsByClassName('menuItem');

// Iterate through the contents of the HTML collection
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', calcTotal); // Binds event listener to menuItem if checked
}

// Function to calculate the total cost of each menuItem that is checked
function calcTotal() {
  let orderTotal = 0; // Sets initial value to 0

  // Loops through the contents of menuItems
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      // Tests if item has been checked
      orderTotal += Number(menuItems[i].value); // If checked, values are added together
    }
  }

  // Access #billTotal from the DOM and displays oderTotal
  document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return '$' + value.toFixed(2);
}
