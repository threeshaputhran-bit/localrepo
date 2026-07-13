try {
    console.log("Hello");
} catch (error) {
    console.log("This is the error:", error);
}

let myArray = ["Apple", "banana", "orange"];
myArray.map((item) => {
    console.log(item);
});

// Destructuring using an Array
// let numbers = [1, 2, 3, 4];----

// let [one, two, three, four] = numbers;---

// console.log(one, two, three, four);---

// console.log(one, four);----


// Object Destructuring
let person = {
    name: "Dinesh",
    age: 35,
    job: "SDE"
};

let { name, age, job } = person;

console.log(name, age, job);

console.log("Name:", name);
console.log("Age:", age);
console.log("Job:", job);

// Spread Operator

let fruits = ["Apple", "banana", "Mango"];

let newFruits = [...fruits];

console.log(newFruits);


// Merge Both Arrays using Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];

console.log(arr3);


// Add Element to an Array using Spread Operator

let numbers = [9, 10, 11];

let result = [8, ...numbers, 12];

console.log(result);


// Spread Operator using Objects

let student = {
    name: "Sharon",
    age: 21,
};

let student2 = {
    ...student
};

console.log(student2);


// Merge Objects

let personal = {
    name: "Suresh",
};

let details = {
    age: 21,
    city: "Mangalore",
};

let user = {
    ...personal,
    ...details
};

console.log(user);


// Spread Operator in Functions

let sum = (a, b, c) => {
    return a + b + c;
};

let num = [10, 20, 30];

console.log(sum(...num));


// Ternary Operator

let x = 10;

// condition ? "Statement 1" : "Statement 2"

x === 0 ? console.log("True") : console.log("False");