/**
 * Title: Modern JavaScript Features
 * Learning objective: Practice syntax React code uses heavily.
 */

const user = {
  name: "Aary",
  stats: { completedTasks: 7 },
  skills: ["JavaScript", "DOM"],
};

const { name, skills } = user; // Destructuring
const extendedSkills = [...skills, "React"]; // Spread

function introduceLearner(personName = "Learner") {
  return `Welcome, ${personName}!`; // Template literals + default parameter
}

function totalTasks(...taskCounts) {
  return taskCounts.reduce((sum, count) => sum + count, 0); // Rest + reduce
}

const completed = user.stats?.completedTasks ?? 0; // Optional chaining + nullish coalescing

const lowerCaseSkills = extendedSkills.map((skill) => skill.toLowerCase());
const reactSkills = extendedSkills.filter((skill) => skill.includes("React"));

console.log(name);
console.log(introduceLearner(name));
console.log("Completed tasks:", completed);
console.log("Total tasks:", totalTasks(2, 3, 4));
console.log("Lowercase skills:", lowerCaseSkills);
console.log("React skills:", reactSkills);

// Exercises:
// 1) Add one more skill using spread syntax.
// 2) Create an array of numbers and use filter to keep only even values.
// 3) Set user.stats to undefined and verify ?? fallback behavior.
