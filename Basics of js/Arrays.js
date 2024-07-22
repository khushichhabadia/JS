let fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing elements
console.log(fruits[0]); // Output: Apple

// Array methods
fruits.push('Date'); // Adds to the end
fruits.pop();        // Removes from the end
fruits.unshift('Elderberry'); // Adds to the beginning
fruits.shift();      // Removes from the beginning
console.log(fruits.length); // Output: 3


//Iterating through Arrays

//for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//forEach 
fruits.forEach(function(fruit) {
    console.log(fruit);
});
//for...of 
for (let fruit of fruits) {
    console.log(fruit);
}