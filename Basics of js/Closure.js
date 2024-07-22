//Closures: A closure is the combination of a function and the lexical environment within which that function was declared.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');

// Output:
// Outer Variable: outside
// Inner Variable: inside
