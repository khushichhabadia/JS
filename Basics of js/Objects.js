//Objects are collections of key-value pairs.

let person = {
    name: 'Alice',
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // Output: Alice
person.greet(); // Output: Hello, my name is Alice
