// Function without Parameter
function greet() {
    console.log("Welcome");
}

greet();


// Function with Parameter
function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// Function with Return Value
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);
console.log(result);


// Anonymous Function
let message = function () {
    console.log("Hello Students");
};

message();

// 1. Global Scope
let college = "ABC College";

const showCollege = () => {
    console.log(college);
};

showCollege();


// 2. Local Scope
const student = () => {
    let name = "Threesha";
    console.log(name);
};

student();

// console.log(name); // Error


const cars = ["Saab", "Bmw", "Volvo"];
console.log(cars);

// Join Method
console.log(cars.join("cars")); // Any special char and string

// pop() method
console.log(cars.pop());

// push() method
console.log(cars.push("Suzuki"));
console.log(cars);

// Switch Statement

let days = "sat";

switch (days) {
    case "Monday":
        console.log("Today Is Monday");
        break;

    case "Tuesday":
        console.log("Today Is Tuesday");
        break;

    case "Wed":
        console.log("Today Is Wed");
        break;

    case "Thr":
        console.log("Today Is THR");
        break;

    default:
        console.log("No Day Found");
        break;
}

// Email Validation Regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// Password Validation Regex
const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// Phone Number Validation Regex
const phoneRegex =
/^(\+1[-. ]?)?(\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4})$/;

let word = "Hello World";
console.log(word);

// Search Method
console.log(word.search("o"));

// Replace Method
console.log(word.replace("World", "Goodmorning"));
