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

// Task 3 - Working with Objects.
// Declare an object employee with properties: name, age, department, and isActive
let employee = {
    name: 'Johnny Appleseed',
    age: 30,
    department: 'Marketing',
    isActive: true
}
// Update the department property
employee.department = 'Sales'
// Add a new property position to the object
employee.position = 'Manager'
// Log the updated object to the console
console.log(employee)

// Task 4 - Array of Objects
// Declare an array customers containing at least three objects,each with name, email, and purchaseAmount properties.
let customers = [
    { name: 'Alice', email: 'alice@abc.com', purchaseAmount: 150 },
    { name: 'Bobby', email: 'bobby@abc.com', purchaseAmount: 200 },
    { name: 'Charles', email: 'charles@abc.com', purchaseAmount: 120 },
];
// Add a new customer object to the array.
customers.push({ name: 'David', email: 'david@abc.com', purchaseAmount: 250 });
// Log the entire customer list to the console.
console.log(customers);

