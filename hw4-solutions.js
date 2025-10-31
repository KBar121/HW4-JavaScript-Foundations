// JavaScript Foundations Coding Assignment
// solutions.js

// ------------------------------
// Section 1: Basic Rules & Data Types
// ------------------------------

// Exercise 1: Formatting and Naming (Code Correction)
let thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  // code block (for demo, log something)
  console.log("Exercise 1:", "thisIsANewVariable is 10");
}

// Exercise 2: Defining Core Data Types (Coding)
let welcomeMessage = `Hello, template strings!`;
let piApprox = 3.14159;
let isActive = true;
console.log("Exercise 2:", { welcomeMessage, piApprox, isActive });

// Exercise 3: Single-Line Comments (Coding)
// Tracks the user's current score in a game or quiz.
let currentScore = 95;
console.log("Exercise 3:", currentScore);

// Exercise 4: Equality Comparison (Coding)
console.log("Exercise 4 (==):", "100" == 100);   // value equality (true)
console.log("Exercise 4 (===):", "100" === 100); // strict equality (false)


// ------------------------------
// Section 2: Conditionals & Control Flow
// ------------------------------

// Exercise 5: Ternary Operator (Coding)
let isWeekend = false;
let schedule;
schedule = isWeekend ? "Day off" : "Work day";
console.log("Exercise 5:", schedule);

// Exercise 6: If/Else Structure (Coding)
let userAge = 16;
if (userAge >= 18) {
  console.log("Exercise 6:", "Access Granted");
} else {
  console.log("Exercise 6:", "Access Denied");
}

// Exercise 7: Logical AND Operator (Coding)
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("Exercise 7:", "Ready to process");
}

// Exercise 8: For Loop (Coding)
console.log("Exercise 8:");
for (let i = 1; i <= 5; i++) {
  console.log("  Iteration", i);
}

// Exercise 9: Loop Control (Coding)
console.log("Exercise 9:");
for (let i = 0; i <= 9; i++) {
  if (i === 7) break;
  console.log("  i =", i);
}

// Exercise 10: Ensuring Execution (Coding)
let counter = 10;
console.log("Exercise 10:");
do {
  console.log("  Running once");
} while (counter < 0); // condition is false, so it won't repeat


// ------------------------------
// Section 3: Functions & Data Structures
// ------------------------------

// Exercise 11: Function Definition (Coding)
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log("Exercise 11:", "resultArea =", resultArea);

// Exercise 12: Array Manipulation (Coding)
let fruitList = ["Apple", "Banana"];
fruitList.push("Grape");          // add to end
fruitList.shift();                // remove first ("Apple")
const bananaIndex = fruitList.indexOf("Banana");
console.log("Exercise 12:", { fruitList, bananaIndex });

// Exercise 13: Array Copying (Coding)
let originalData = [1, { a: 1 }, 3];
// slice creates a SHALLOW copy (top-level only).
let clonedData = originalData.slice();
// Be aware: nested objects/arrays are still shared references.
clonedData[1].a = 99; // This will affect originalData[1].a too.
console.log("Exercise 13:", { originalData, clonedData, sameRef: originalData === clonedData });
// Note: Use structuredClone(JSON-safe), JSON methods, or deep-copy utilities for deep copies.

// Exercise 14: Object Constructor (Coding)
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

// Exercise 15: Object Instantiation (Coding)
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log("Exercise 15:", animalArray);
