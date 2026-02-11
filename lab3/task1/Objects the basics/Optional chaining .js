
let user = {}; // a user without "address" property

alert(user.address.street); // Error!



// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's null

let user1 = {};

alert(user.address ? user.address.street : undefined);

let html1 = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;


let user2 = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);

let user3 = {}; // user has no address

alert( user.address && user.address.street && user.address.street.name ); //



let user4 = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)


let html2 = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element



let user5 = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined



let user6 = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented


let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)


let key = "firstName";

let user7 = {
  firstName: "John"
};

let user8 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined



delete user?.name; // delete user.name if user exists

let user9 = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"

