// Functions :
// A function is a reusable block of code that performs a specific task. It is a fundamental concept in programming, which allows developers to write code that can be called multiple times with different inputs to produce different outputs. 

// Importance :

// Encapsulation: Functions allow you to encapsulate a block of code into a single unit, which can be called from other parts of the code. This makes it easier to write, read, and maintain code.
// Reusability: Functions can be reused in different parts of the code, which saves time and effort. Instead of writing the same code multiple times, you can create a function and call it whenever needed.
// Modularity: Functions enable you to break down complex problems into smaller, more manageable pieces. This makes it easier to understand and debug code.
// Abstraction: Functions allow you to abstract away details of the implementation and focus on the high-level logic of the code. This makes the code more expressive and easier to reason about.
// Testing: Functions make it easier to write tests for your code, since you can test each function in isolation from the rest of the code.
// Declaration :
// To declare a function in JavaScript, you use the function keyword followed by the name of the function, and then a pair of parentheses that contain the parameters of the function (if any). Here's a basic example:

function greet(name) {
  console.log(
);
}
// In this example, we have declared a function called greet that takes one parameter called name. Inside the function, we log a greeting to the console using a template string that includes the value of the name parameter.

// When you call a function, you provide values called arguments that will be passed to the function as its parameters. For example:

greet('John');
// In this example, we are calling the greet function and passing it the argument 'John'. This will cause the function to log the string "Hello, John!" to the console.

// Types :
// Four types of functions in JavaScript are :

// 1. Function declaration: This is a named function that is declared using the function keyword followed by the function name, parentheses, and curly braces. Function declarations are hoisted to the top of their scope, so they can be called before they are declared.

// Example:

function greet(name) {
  console.log(
);
}
greet('John'); // Output: Hello John!
// 2. Function expression: This is a function that is assigned to a variable or a constant. Function expressions are not hoisted, so they cannot be called before they are defined.

// Example:

const greet = function(name) {
  console.log(
);
};
greet('Jane'); // Output: Hello Jane!
// 3. Anonymous function: This is a function without a name. It is often used as a callback function or as an argument to another function.

// Example:

setTimeout(function() {
  console.log('Hello world!');
}, 1000);
// 4. Arrow function: This is a shorthand way of writing a function expression using the => syntax. Arrow functions are more concise and often easier to read than traditional function expressions. They also have a lexical this keyword that refers to the surrounding context.

// Example:

const greet = name => console.log(
);
greet('Tom'); // Output: Hello Tom!
// Parameters And Arguments :
// In JavaScript, parameters are used to pass values to functions. These parameters are defined in the function declaration and are separated by commas. When the function is called, arguments can be passed to the function that correspond to the defined parameters.

// Here are some types of parameters and arguments in JavaScript:

// 1. Function Parameters: Parameters are defined in the function declaration, and their values are set when the function is called. For example:

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(5, 10)); // Output: 50
// In this example, num1 and num2 are the parameters of the multiply function.

// 2. Default Parameters: Default parameters allow you to assign a default value to a parameter in case no value is passed when the function is called. For example:

function greet(name = 'World') {
  console.log(
);
}

greet(); // Output: Hello, World!
greet('John'); // Output: Hello, John!
// In this example, the name parameter has a default value of 'World'. If no argument is passed when the greet function is called, the default value is used.

// Rest Parameters: Rest parameters allow you to pass an indefinite number of arguments to a function. These arguments are collected into an array. For example:

function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

// console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// In this example, the sum function takes an indefinite number of arguments using the rest parameter syntax (...nums). The nums parameter is an array that contains all the arguments passed to the function.

// 4. Arguments Object: The arguments object is an array-like object that contains all the arguments passed to a function. It is not an actual array, but it can be used like one. For example:

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(1, 2, 3, 4, 5)); // Output: 15
// In this example, the add function uses the arguments object to loop through all the arguments passed to the function and add them up.

