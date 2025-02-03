/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Devin Ledesma
      Date:   01/31/2025

      Filename: project02-04.js
 */

// Declare Variables for lunch selections
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALE_TAX = 0.07;

// Event Handlers for calcTotal
// Chicken
document.getElementById('chicken').addEventListener('click', calcTotal);

// Halibut
document.getElementById('halibut').addEventListener('click', calcTotal);

// Burger
document.getElementById('burger').addEventListener('click', calcTotal);

// Salmon
document.getElementById('salmon').addEventListener('click', calcTotal);

// Salad
document.getElementById('salad').addEventListener('click', calcTotal);

// Calculates the total with tax
function calcTotal() {
  let cost = 0; // Set initial cost to 0
  let buyChicken = document.getElementById('chicken').checked;
  let buyHalibut = document.getElementById('halibut').checked;
  let buyBurger = document.getElementById('burger').checked;
  let buySalmon = document.getElementById('salmon').checked;
  let buySalad = document.getElementById('salad').checked;

  // Increases the value of the cost variable
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

  // Displays food total
  document.getElementById('foodTotal').innerHTML = formatCurrency(cost);

  // Declares tax variable
  let tax = cost * SALE_TAX;

  // Displays tax total
  document.getElementById('foodTax').innerHTML = formatCurrency(tax);

  // Declares totalCost variable
  let totalCost = cost + tax;

  // Displays totalCost
  document.getElementById('totalBill').innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return '$' + value.toFixed(2);
}
