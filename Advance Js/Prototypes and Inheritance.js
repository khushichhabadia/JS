function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

let alice = new Person('Alice');
alice.greet(); // Output: Hello, my name is Alice


// JavaScript uses prototypes for inheritance, which is different from classical inheritance in languages like Java or C++.