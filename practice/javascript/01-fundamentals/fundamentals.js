/**
 * Title: JavaScript Fundamentals
 * Learning objective: Practice core syntax before moving to React.
 */

const learnerName = "Aary";
let studyHours = 2;
const isConsistent = true;

console.log("Type examples:", typeof learnerName, typeof studyHours, typeof isConsistent);

const scoreFromInput = "42";
const scoreNumber = Number(scoreFromInput); // Type conversion (string -> number)
console.log("Converted score:", scoreNumber, "Type:", typeof scoreNumber);

const bonusPoints = 8;
const totalScore = scoreNumber + bonusPoints; // Arithmetic operator
const passed = totalScore >= 50; // Comparison operator
console.log(`Total score is ${totalScore}. Passed? ${passed}`);

if (totalScore >= 75) {
  console.log("Great job! You are in the advanced range.");
} else if (totalScore >= 50) {
  console.log("Good progress. Keep practicing.");
} else {
  console.log("Keep learning and try again.");
}

for (let day = 1; day <= 3; day += 1) {
  console.log(`Day ${day}: Practice JavaScript.`);
}

function calculateAverage(values) {
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum / values.length;
}

const lessonScores = [60, 70, 80];
const learnerProfile = {
  name: learnerName,
  goal: "React",
  completedLessons: 3,
};

console.log("Average score:", calculateAverage(lessonScores));
console.log("Learner profile:", learnerProfile);

// Exercises:
// 1) Change lessonScores and re-run calculateAverage.
// 2) Add a new profile field: favoriteTopic.
// 3) Convert the string "100" to number and add 15.
