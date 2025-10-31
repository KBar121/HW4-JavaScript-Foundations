// ===============================
// helpers: print to page + console
// ===============================
function toText(value) {
  // stringify objects/arrays nicely
  if (typeof value === "object") {
    try { return JSON.stringify(value); } catch { return String(value); }
  }
  return String(value);
}

function displayOutput(label, value) {
  const outputDiv = document.getElementById("output");
  const text = toText(value);
  if (outputDiv) {
    outputDiv.innerHTML += `<p><strong>${label}:</strong> ${text}</p>`;
  }
  console.log(`${label}:`, value);
}

// ===============================
// JavaScript Foundations Coding Assignment
// ===============================

// ------------------------------
// Section 1: Basic Rules & Data Types
// ------------------------------

// Exercise 1: Formatting and Naming (Code Correction)
let thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  displayOutput("Exercise 1", "thisIsANewVariable is 10");
}

// Exercise 2: Defining Core Data Types (Coding)
let welcomeMessage = `Hello, template strings!`;
let piApprox = 3.14159;
let isActive = true;
displayOutput("Exercise 2", { welcomeMessage, piApprox, isActive });

// Exercise 3: Single-Line Comments (Coding)
// Tracks the user's current score in a game or quiz.
let currentScore = 95;
displayOutput("Exercise 3", currentScore);

// Exercise 4: Equality Comparison (Coding)
displayOutput("Exercise 4 (==)", "100" == 100);     // value equality (true)
displayOutput("Exercise 4 (===)", "100" === 100);   // strict equality (false)


// ------------------------------
// Section 2: Conditionals & Control Flow
// ------------------------------

// Exercise 5: Ternary Operator (Coding)
let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";
displayOutput("Exercise 5", schedule);

// Exercise 6: If/Else Structure (Coding)
let userAge = 16;
if (userAge >= 18) {
  displayOutput("Exercise 6", "Access Granted");
} else {
  displayOutput("Exercise 6", "Access Denied");
}

// Exercise 7: Logical AND Operator (Coding)
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  displayOutput("Exercise 7", "Ready to process");
}

// Exercise 8: For Loop (Coding)
for (let i = 1; i <= 5; i++) {
  displayOutput("Exercise 8 - Iteration", i);
}

// Exercise 9: Loop Control (Coding)
for (let i = 0; i <= 9; i++) {
  if (i === 7) break;
  displayOutput("Exercise 9 - i", i);
}

// Exercise 10: Ensuring Execution (Coding)
let counter = 10;
do {
  displayOutput("Exercise 10", "Running once");
} while (counter < 0); // won't repeat


// ------------------------------
// Section 3: Functions & Data Structures
// ------------------------------

// Exercise 11: Function Definition (Coding)
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
displayOutput("Exercise 11 - resultArea", resultArea);

// Exercise 12: Array Manipulation (Coding)
let fruitList = ["Apple", "Banana"];
fruitList.push("Grape");     // add to end
fruitList.shift();           // remove first ("Apple")
const bananaIndex = fruitList.indexOf("Banana");
displayOutput("Exercise 12", { fruitList, bananaIndex });

// Exercise 13: Array Copying (Coding)
let originalData = [1, { a: 1 }, 3];
// slice creates a SHALLOW copy (top-level only).
let clonedData = originalData.slice();
// Nested objects/arrays remain shared references:
clonedData[1].a = 99; // affects originalData[1].a too
displayOutput("Exercise 13", { originalData, clonedData, sameRef: originalData === clonedData });
// For deep copies, consider structuredClone (for JSON-safe data) or libraries.

// Exercise 14: Object Constructor (Coding)
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

// Exercise 15: Object Instantiation (Coding)

let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
displayOutput("Exercise 15", animalArray);
