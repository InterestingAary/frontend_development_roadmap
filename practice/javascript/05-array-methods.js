// Beginner example: map, filter, reduce
const numbers = [2, 4, 6, 8, 10];

const doubled = numbers.map((num) => num * 2);
const bigNumbers = numbers.filter((num) => num >= 6);
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>=6):", bigNumbers);
console.log("Sum:", sum);
