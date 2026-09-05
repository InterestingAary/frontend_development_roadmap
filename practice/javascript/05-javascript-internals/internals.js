/**
 * Title: JavaScript Internals (Concise Demos)
 * Learning objective: Build intuition for engine behavior and runtime patterns.
 */

// Scope
const globalTopic = "Global scope";
function scopeDemo() {
  const functionTopic = "Function scope";
  if (true) {
    const blockTopic = "Block scope";
    console.log(globalTopic, functionTopic, blockTopic);
  }
}
scopeDemo();

// Closures
function createCounter() {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
}
const counter = createCounter();
console.log("Closure counter:", counter(), counter());

// Hoisting
console.log("Hoisted function call:", hoisted());
function hoisted() {
  return "Function declarations are hoisted.";
}

// this
const learner = {
  name: "Aary",
  showName() {
    console.log("this.name:", this.name);
  },
};
learner.showName();

// Prototypes
function Course(title) {
  this.title = title;
}
Course.prototype.describe = function describe() {
  return `Course: ${this.title}`;
};
const jsCourse = new Course("JavaScript Basics");
console.log(jsCourse.describe());

// Event loop + microtasks/macrotasks
console.log("Sync: start");
setTimeout(() => console.log("Macrotask: setTimeout"), 0);
Promise.resolve().then(() => console.log("Microtask: Promise.then"));
console.log("Sync: end");

// Debounce
function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

// Throttle
function throttle(callback, delay) {
  let canRun = true;
  return (...args) => {
    if (!canRun) return;
    canRun = false;
    callback(...args);
    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}

const debouncedLog = debounce((value) => console.log("Debounced:", value), 300);
const throttledLog = throttle((value) => console.log("Throttled:", value), 300);

debouncedLog("A");
debouncedLog("B"); // Only this one should print after delay.
throttledLog("First");
throttledLog("Second"); // Ignored because of throttle window.

// Exercises:
// 1) Create another closure that stores a private name.
// 2) Change event loop demo order by replacing Promise.then with queueMicrotask.
// 3) Wire debounce/throttle to an input event in the DOM practice file.
