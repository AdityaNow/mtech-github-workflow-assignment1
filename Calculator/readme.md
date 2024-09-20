
# Add Two Numbers in JavaScript

This is a simple JavaScript program that adds two integers input by the user and displays the result.

## Features

- Takes user input for two integers.
- Adds the two integers and displays the sum.

## How to Use

1. Open the HTML file containing (addition.js) this JavaScript code in your browser.
2. The browser will prompt you to enter two numbers.
3. After entering the numbers, the program will display the sum using an alert message and log it to the console.

### Example

1. User enters `5` as the first number.
2. User enters `10` as the second number.
3. The program will display: `The sum is: 15`.

## Code

```javascript
// Function to add two integers
function addTwoNumbers(a, b) {
  return a + b;
}

// Get user input for num1 and num2
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

// Calculate the sum
let sum = addTwoNumbers(num1, num2);

// Display the result
console.log("The sum is: " + sum);
alert("The sum is: " + sum);