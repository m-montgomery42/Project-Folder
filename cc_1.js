// Task 1 - Variables
// Declare a variable employeeName using let and assign it the employee's name as a string.
let employeeName = "Name of Employee";
// Declare a variable employeeID using const and assign it the employee's ID as a number.
const employeeID = 12345;
// Declare a variable isActive using var and assign it a boolean value true to indicate the employee is currently active.
var isActive = true;
// Log each variable's value and its type to the console using console.log() and typeof.
console.log("Employee Name:", employeeName, "Type:", typeof employeeName);
// Log each variable's value and its type to the console using console.log() and typeof.
console.log("Employee ID:", employeeID, "Type:", typeof employeeID);
// Log each variable's value and its type to the console using console.log() and typeof.
console.log("Is Active:", isActive, "Type:", typeof isActive);

// Task 2 - Primitive Data Types
// Declare a variable productName using let and assign it a string value representing the product's name.
let productName = "Name of Product";
// Declare a variable productPrice using const and assign it a numerical value representing the product's price.
const productPrice = 012;
// Declare a variable isAvailable using var and assign it a boolean value indicating product availability.
var isAvailable = true;
// Log each variable's value and its type to the console.
console.log("Product Name:", productName, "Type:", typeof productName);
// Log each variable's value and its type to the console.
console.log("Product Price:", productPrice, "Type:", typeof productPrice);
// Log each variable's value and its type to the console.
console.log("Is Available:", isAvailable, "Type:", typeof isAvailable);

// Task 3 - Number Data Type
// Declare a variable accountBalance using let and assign it a number representing the initial balance.
let accountBalance = 1000;
// Perform basic arithmetic operations (+, -, *, /) and log the updated values. (Addition) Deposit.
accountBalance = accountBalance + 500;
console.log("Updated balance after deposit (+500):", accountBalance);
// Perform basic arithmetic operations (+, -, *, /) and log the updated values. (Subtraction) Withdrawal.
accountBalance = accountBalance - 200;
console.log("Updted balance after withdrawal (-200):", accountBalance);
// Perform basic arithmetic operations (+, -, *, /) and log the updated values. (Multiplication) Simulates interest.
accountBalance = accountBalance * 1.1;
console.log("Updated balance after interest (*1.1):", accountBalance);
// Perform basic arithmetic operations (+, -, *, /) and log the updated values. (Division) Represents fee.
accountBalance = accountBalance / 2;
console.log("Updated balance after division (/2):", accountBalance);

// Task 4 - String Data Type
// Declare a variable for customerName using let and assign it a string value representing the customer's name.
let customerName = "Johnny Appleseed";
// Concenate strings to form a welcome message and log it to the console.
let welcomeMessage = "Welcome," + customerName + "! We're glad to have you here.";
console.log(welcomeMessage);

// Task 5 - Boolean Data Type
// Declare a variable isLoggedIn using let and assign it a boolean value indicating user login status.
let isLoggedIn = true;
// Use logical operations to check access conditions and log results to the console.
let hasAdminPrivileges = false;
if (isLoggedIn & hasAdminPrivileges) {
    console.log("Access granted: You have admin privileges.");
} else if (isLoggedIn && !hasAdminPrivileges) {
    console.log("Access granted: You are logged in as a regular user.");
} else {
    console.log("Access denied: Please log in.");
}