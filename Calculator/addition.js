// Function to add two integers
function addTwoNumbers(a, b) {
  return a + b;
}

// Get user input
let num1 = parseInt(prompt("Enter the first number:"), 10);
let num2 = parseInt(prompt("Enter the second number:"), 10);

// Calculate the sum
let sum = addTwoNumbers(num1, num2);
console.log("The sum is: " + sum);