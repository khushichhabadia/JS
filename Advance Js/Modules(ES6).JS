// Exporting a Module
// file: math.js
export function add(a, b) {
    return a + b;
}

export const PI = 3.14159;

// Importing a Module
// file: app.js
import { add, PI } from './math.js';

console.log(add(2, 3)); // Output: 5
console.log(PI);       // Output: 3.14159
