//Defining and Calling Functions

//Functions are blocks of code designed to perform particular tasks. You can define a function using the function keyword or as an expression.

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Calling a function
console.log(greet('Alice')); // Output: Hello, Alice!
