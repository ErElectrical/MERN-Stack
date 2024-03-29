// An object is a non-primitive data type that represents a collection of properties. 
//It is a key-value pair data structure where each key is a string (or symbol) and each value can be any valid JavaScript data type,


// including another object.

// Declaration
// 1. Object Literals:  An object literal is a comma-separated list of name-value pairs wrapped in curly braces {}.

// Example:

const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY'
  }
};
 

//2. Constructor Functions:  A constructor function is a function that is used to create new objects.

//Example:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('John Doe', 30);
const person2 = new Person('Jane Doe', 25);
 

//3. Object.create() Method: It creates a new object with the specified prototype object and properties.

//Example:

const person = {
  name: 'John Doe',
  age: 30
};

const newPerson = Object.create(person);
newPerson.age = 25;
console.log(newPerson.name); // Output: John Doe
console.log(newPerson.age); // Output: 25
 

//Note : Objects in JavaScript are mutable, which means that their properties can be changed or added at any time.
// Properties can be accessed using dot notation (e.g. object.property) or bracket notation (e.g. object['property']).

