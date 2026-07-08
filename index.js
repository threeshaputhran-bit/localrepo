let name = "Threesha";
name = "Pawan";

var last_name = "G";
last_name = "Prakash";

var full_name = name + " " + last_name;

let pie = 1.14;
pie = 1.1;

console.log("Pie: " + pie);
console.log("My Name is " + name);
console.log("Full Name: " + full_name);

// // Arithmetic Operators

let c = 10;
let d = 20;

console.log("Addition", c + d);
console.log("Subtraction", c - d);
console.log("Multiplication", c * d);
console.log("Division", c / d);
console.log("Modulus", c % d);

console.log("Increment", ++c);
console.log("Decrement", --d);

// // Assignment Operators

let x = 10;

x += 5;   // x = x + 5
console.log("After += :", x); 

x -= 3;   // x = x - 3
console.log("After -= :", x); 

x *= 2;   // x = x * 2
console.log("After *= :", x); 

x /= 4;   // x = x / 4
console.log("After /= :", x); 

x %= 4;   // x = x % 4
console.log("After %= :", x); 


// // Comparison Operators
let a=10;
let b= 20;
if (a > b) {
    console.log("A is greater");
} else {
    console.log("B is greater");
}
console.log("Equal (==):", a == b);
console.log("Strict Equal (===):", a === b);
console.log("Not Equal (!=):", a != b);
console.log("Strict Not Equal (!==):", a !== b);
console.log("Greater Than (>):", a > b);
console.log("Less Than (<):", a < b);
console.log("Greater Than or Equal (>=):", a >= b);
console.log("Less Than or Equal (<=):", a <= b);


// // Logical Operators Example

let age = 12;
let hasID = true;

// // AND (&&)
if (age == 12 && hasID) {
    console.log("Entry Allowed");
} else {
    console.log("Entry Not Allowed");
}

// // OR (||)
if (age == 12 || hasID) {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}

// // NOT (!)
if (!hasID) {
    console.log("ID is not available");
} else {
    console.log("ID is available");
}

// // Logical NOT (!)

let isLoggedIn = true;

if (!isLoggedIn) {
    console.log("User Not Logged In");
} else {
    console.log("User Logged In");
}


// // JavaScript Data Types

// // String
let name = "chaithanya";
console.log("Name:", name);
console.log("Type:", typeof name);

// // Number
let age = 21;
console.log("Age:", age);
console.log("Type:", typeof age);

// // Boolean
let isStudent = true;
console.log("Is Student:", isStudent);
console.log("Type:", typeof isStudent);

// // Undefined
let city;
console.log("City:", city);
console.log("Type:", typeof city);

// // Null
let address = null;
console.log("Address:", address);
console.log("Type:", typeof address);

// // BigInt
let population = 12345678901234567890n;
console.log("Population:", population);
console.log("Type:", typeof population);

// // Symbol
let id = Symbol("id");
console.log("ID:", id);
console.log("Type:", typeof id);

// Objects in JavaScript

const person = {
    firstname: "John",   // Key-Value Pair
    lastname: "Doe",
    age: 21
};

// // Printing object value
console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);


// // Array in JavaScript

const cars = ["Saab", "Volvo", "BMW"];

// // Printing the values in array
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[5]); // Undefined (index does not exist)


// // Printing the values using for loop

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// Date in JavaScript

// const date = new Date("2026-07-08");

const date = new Date();

console.log(date);

