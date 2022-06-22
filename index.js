const num1 = parseFloat(prompt("Enter Number 1: "));
const operator = prompt("Enter Operator to use: (+, -, *, /)");
const num2 = parseFloat(prompt("Enter Number 2: "));

let result;
if (isNaN(num1) || isNaN(num2)) {
  alert("Incorrect input! Please try again.");
} else {
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }
  alert(num1 + " " + operator + " " + num2 + "=" + result);
}
