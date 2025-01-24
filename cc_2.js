// Task 1 - Working with Arrays
// Declare an array products using let and initialize it with at least five product names.
let products = ['Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Smartwatch'];
// Add a new product to the array.
products.push('Speaker');
// Remove the last product from the array.
products.pop();
// Log the updated list to the console.
console.log(products);

// Task 2 - Accessing and Modifying Arrays
// Declare an array scores with at least five numerical values.
let scores = [85, 90, 68, 72, 98];
// Update the second score in the array.
scores[1] = 95;
// Calculate the average of all scores.
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
// Log the updated array and the average score to the console.
console.log("Updated scores:", scores);
console.log("Average score:", average);