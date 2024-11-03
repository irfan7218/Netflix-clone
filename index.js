// get element by id
const emailInputField = document.getElementById("email");
console.log("emailInputField: ", emailInputField);

// get element by classes
let elements = document.getElementsByClassName("secfirst");
console.log("elements: ", elements);
console.log("elements: ", elements[1].classList);

// get element by tagName
let div = document.getElementsByTagName("div");
console.log("div: ", div);

// query selector
let firstDiv = document.querySelector("div.secfirst");
console.log("firstDiv: ", firstDiv);

let allDivs = document.querySelectorAll("div.secfirst");
console.log("allDivs: ", allDivs);

// inner HTML
div.innerHTML = "<h2>New Heading</h2>";
console.log('div.innerHTML: ', div.innerHTML);
// console.log('element.innerHTML: ', element.innerHTML);

