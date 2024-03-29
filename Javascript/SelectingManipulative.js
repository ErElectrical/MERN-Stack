// Selecting and manipulating elements with JavaScript involves using the Document Object Model (DOM) API.
// The DOM is a hierarchical representation of an HTML or XML document,
// where each element in the document is represented as a node in the tree structure.
// JavaScript can be used to manipulate the DOM in order to change the content or appearance of the web page.

// Selecting An Element :
// 1. getElementById(): 
//This method is used to select an element with a specific id attribute.
// It returns the element object if found, or null if no element with that id exists.

// Example:

<div id="myDiv">This is a div element</div>
const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "This div has been changed!";
 

// 2. getElementsByClassName(): 
//This method is used to select all elements that have a specific class name. 
//It returns an array-like object of all the elements found.

// Example:

<p class="myClass">This is a paragraph element</p>
<p class="myClass">This is another paragraph element</p>
const myClassElements = document.getElementsByClassName("myClass");
for (let i = 0; i < myClassElements.length; i++) {
  myClassElements[i].innerHTML = "This paragraph has been changed!";
}
 

// 3. querySelector(): This method is used to select the first element that matches a specified CSS selector. It returns the element object if found, or null if no element matches the selector.

// Example:

<div class="container">
  <p>This is a paragraph element inside a div</p>
</div>
const container = document.querySelector(".container");
container.style.backgroundColor = "blue";
 

// 4. querySelectorAll(): This method is used to select all elements that match a specified CSS selector. It returns an array-like object of all the elements found.

// Example:

<div class="container">
  <p>This is a paragraph element inside a div</p>
  <p>This is another paragraph element inside a div</p>
</div>
const paragraphs = document.querySelectorAll(".container p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}
 

Manipulating An Element :
Once an element has been selected, its properties and attributes can be manipulated. 

Example :

1. To change the content of an element, you can set its innerHTML property to a new value:

const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "This div has been changed!";
 

2. To change the value of an attribute, you can use the setAttribute() method:

const myLink = document.getElementById("myLink");
myLink.setAttribute("href", "http://www.example.com");
