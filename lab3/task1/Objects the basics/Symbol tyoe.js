let id = Symbol();

// id is a symbol with the description "id"
let id1 = Symbol("id");

let id2 = Symbol("id");
let id3 = Symbol("id");

alert(id2 == id3); // false


let id4 = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string



let id5 = Symbol("id");
alert(id.toString()); // Symbol(id), now it works


let id6 = Symbol("id");
alert(id.description); // id



let user = { // belongs to another code
  name: "John"
};

let id11 = Symbol("id");

user[id] = 1;

alert( user[id] ); // we can access the data using the symbol as the key


// ...
let id9 = Symbol("id");

user[id] = "Their id value";



let user = { name: "John" };

// Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id = "Their id value"
// Boom! overwritten by another script!


let id12 = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};


let id13 = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123
