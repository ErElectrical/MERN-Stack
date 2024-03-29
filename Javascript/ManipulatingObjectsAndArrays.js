// Objects and Arrays can be manipulated using various methods and techniques.
// Here are some common ways of manipulating objects and arrays:

// 1. Accessing properties: 
//Objects and arrays can be accessed using their properties or keys. 
//For objects, you can use the dot notation or the square bracket notation to access its properties.
// For arrays, you can use the index notation.

// Example:


const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  },
  hobbies: ['reading', 'swimming', 'traveling']
};

console.log(person.name); // output: John
console.log(person['address']['city']); // output: New York
console.log(person.hobbies[1]); // output: swimming

Output
John
New York
swimming
 

// 2. Adding properties: You can add new properties to an object or elements to an array using the dot notation or the square bracket notation.

// Example:


const person = {
  name: 'John',
  age: 30,
};

person.address = {
  street: '123 Main St',
  city: 'New York',
  state: 'NY'
};

person.hobbies = ['reading', 'swimming', 'traveling'];

console.log(person);
// output: { name: 'John', age: 30, address: { street: '123 Main St', city: 'New York', state: 'NY' }, hobbies: [ 'reading', 'swimming', 'traveling' ] }

Output
{
  name: 'John',
  age: 30,
  address: { street: '123 Main St', city: 'New York', state: 'NY' },
  hobbies: [ 'reading', 'swimming', 'traveling' ]
}
 

// 3. Deleting properties: You can delete properties from an object using the delete keyword.

// Example:


const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  },
  hobbies: ['reading', 'swimming', 'traveling']
};

delete person.address;

console.log(person);
// output: { name: 'John', age: 30, hobbies: [ 'reading', 'swimming', 'traveling' ] }

Output
{
  name: 'John',
  age: 30,
  hobbies: [ 'reading', 'swimming', 'traveling' ]
}
 

// 4. Looping through objects and arrays: You can use loops to iterate through objects and arrays. For objects, you can use the for...in loop, and for arrays, you can use the for loop or the forEach method.

// Example:


const person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'swimming', 'traveling']
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

person.hobbies.forEach(hobby => {
  console.log(hobby);
});

// Output
// name: John
// age: 30
// hobbies: reading,swimming,traveling
// reading
// swimming
// traveling
 

// 5. Copying objects and arrays: Objects and arrays can be copied using various methods such as the spread operator, Object.assign(), and the slice() method.

// Example:


const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // output: [1, 2, 3]

// Copying an object using Object.assign()
const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // output: { a: 1, b: 2 }

Output
[ 1, 2, 3 ]
{ a: 1, b: 2 }
 