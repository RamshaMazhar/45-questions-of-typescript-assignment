let age = 18;
let isStudent = true

console.log("Is the person's age greater than or equal to 18 and are they a student? I predict True.");
console.log(age >= 18 && isStudent);


console.log("Is the person's age less than 21 or are they not a student? I predict True.");
console.log(age < 21 || !isStudent);

let score = 85;
let passingScore = 70;


console.log("Did the person score above the passing score? I predict True.");
console.log(score > passingScore);


console.log("Is the score exactly equal to the passing score? I predict False.");
console.log(score === passingScore);

let username = "admin";
let password = "password123";


console.log("Is the username 'admin' and the password 'password123'? I predict True.");
console.log(username === "admin" && password === "password123");


console.log("Is either the username or the password incorrect? I predict False.");
console.log(username !== "admin" || password !== "password123");