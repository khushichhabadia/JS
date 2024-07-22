//Scope refers to the accessibility of variables.
//Global Scope: Variables declared outside any function.
//Local Scope: Variables declared within a function.

let globalVar = 'I am global';

function testScope() {
    let localVar = 'I am local';
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

testScope();
console.log(globalVar); // Accessible
console.log(localVar);  // Uncaught ReferenceError: localVar is not defined
