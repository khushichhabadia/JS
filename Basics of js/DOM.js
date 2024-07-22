//Selecting Elements

//You can select elements from the DOM using methods like getElementById, getElementsByClassName, querySelector, and querySelectorAll.

let element = document.getElementById('title');
let elements = document.getElementsByClassName('item');
let firstElement = document.querySelector('.item');
let allElements = document.querySelectorAll('.item');


//Manipulating DOM Elements
//You can manipulate the content and style of elements.
//You can also add and remove elements from the DOM.


// Changing content
element.innerText = 'New Title';

// Changing style
element.style.color = 'blue';
