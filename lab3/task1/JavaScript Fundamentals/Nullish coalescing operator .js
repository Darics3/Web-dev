result = (a !== null && a !== undefined) ? a : b;

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let user1 = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)


let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

//For example, in the code above we could replace ?? with || and still get the same result:

let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder


let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0




let height1 = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

// without parentheses
let area1 = height ?? 100 * width ?? 50;

// ...works this way (not what we want):
let area2 = height ?? (100 * width) ?? 50;

let x2 = (1 && 2) ?? 3; // Syntax error

let x3 = (1 && 2) ?? 3; // Works

alert(x); // 2

//Summary
// set height=100, if height is null or undefined
height = height ?? 100;