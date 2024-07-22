console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');

// Output:
// Start
// End
// Promise
// Timeout

// Call Stack: Executes synchronous code.
// Web APIs: Handle asynchronous tasks (e.g., setTimeout, DOM events).
// Callback Queue: Stores callback functions to be executed.
// Event Loop: Pushes functions from the callback queue to the call stack when it is empty.
