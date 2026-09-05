/**
 * Title: Modules demo
 * Learning objective: Import and use exported functions.
 */

import { add, multiply } from "./mathHelpers.mjs";

console.log("2 + 5 =", add(2, 5));
console.log("3 * 4 =", multiply(3, 4));

// Run with: node practice/javascript/02-modern-javascript/02-modules/main.mjs
