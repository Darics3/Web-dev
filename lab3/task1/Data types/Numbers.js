//More ways to write a number
//Imagine we need to write 1 billion. The obvious way is:

let billion = 1000000000;
//We also can use underscore _ as the separator:

let billion1 = 1_000_000_000;


let billion2 = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000
let mсs = 0.000001;
let mcs = 1e-6; // five zeroes to the left from 1


// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times


alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

//toString
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

alert( 123456..toString(36) ); // 2n9c


let num1 = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23


let num2 = 12.34;
alert( num.toFixed(1) ); // "12.3"

let num3 = 12.36;
alert( num.toFixed(1) ); // "12.4"

let num4 = 12.34;
alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits


alert( 1e500 ); // Infinity


alert(0.1.toString(2)); // 0.0001100110011001100110011001100110011001100110011001101
alert(0.2.toString(2)); // 0.001100110011001100110011001100110011001100110011001101
alert((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101


let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // "0.30"

let sum2 = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3



alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001