/**
 * Title: Scope and Hoisting Basics
 * Learning objective: Understand where variables/functions are accessible.
 */

const courseName = "JavaScript";

function showScope() {
  const insideFunction = "Only visible inside showScope";
  if (true) {
    const blockScoped = "Only visible in this block";
    console.log(blockScoped);
  }
  console.log(insideFunction);
}

showScope();
console.log(courseName);

// Hoisting: function declarations are hoisted.
console.log(sum(2, 3));
function sum(a, b) {
  return a + b;
}

// Hoisting with var behaves differently (declared but undefined before assignment).
console.log(trackedHours); // undefined
var trackedHours = 5;

// Exercises:
// 1) Replace var trackedHours with let and observe the behavior.
// 2) Move showScope call above function declaration and verify it still works.
