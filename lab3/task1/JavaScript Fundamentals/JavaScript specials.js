//code structure 

alert('Hello'); alert('World');

alert('Hello')
alert('World')

alert("There will be an error after this message")

[1, 2].forEach(alert)


function f() {
  // no semicolon needed after function declaration
}

for(;;) {
  // no semicolon needed after the loop
}



//strict mode

'use strict';

//...


let x = 5;
x = "John";

typeof null == "object" // error in the language
typeof function(){} == "function" // functions are treated specially

/*
There are 8 data types:

number for both floating-point and integer numbers,
bigint for integer numbers of arbitrary length,
string for strings,
boolean for logical values: true/false,
null – a type with a single value null, meaning “empty” or “does not exist”,
undefined – a type with a single value undefined, meaning “not assigned”,
object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.
*/

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true


//Operators 

alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string

/*
Assignments
There is a simple assignment: a = b and combined ones like a *= 2.

Bitwise
Bitwise operators work with 32-bit integers at the lowest, bit-level: see the docs when they are needed.

Conditional
The only operator with three parameters: cond ? resultA : resultB. If cond is truthy, returns resultA, otherwise resultB.

Logical operators
Logical AND && and OR || perform short-circuit evaluation and then return the value where it stopped (not necessary true/false). Logical NOT ! converts the operand to boolean type and returns the inverse value.

Nullish coalescing operator
The ?? operator provides a way to choose a defined value from a list of variables. The result of a ?? b is a unless it’s null/undefined, then b.

Comparisons
Equality check == for values of different types converts them to a number (except null and undefined that equal each other and nothing else), so these are equal:
*/

alert( 0 == false ); // true
alert( 0 == '' ); // true


// 1
while (condition) {
}

// 2
do {

} while (condition);

// 3
for(let i = 0; i < 10; i++) {

}



//The “switch” construct
let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}

//Functions 

function sum(a, b) {
  let result = a + b;

  return result;
}
let sum = function(a, b) {
  let result = a + b;

  return result;
};



// expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;