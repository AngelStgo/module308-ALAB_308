const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50); // true

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd); // true

const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isUnder25); // true

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique); // true

const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique; 
console.log(isValid); // true



// === Part 1: Math Problems ===

// Check if all numbers are divisible by 5. Cache the result in a variable.
const numDivisible = n1 / 5 || n2 / 5 || n3 / 5 || n4 / 5 ;
console.log(numDivisible);


// Check if the first number is larger than the last. Cache the result in a variable.
const numLargerThan = n1 > n4 ;
console.log(numLargerThan); // true

// Subtract the first number from the second number.
const numSub = n2 - n1 ;
console.log(numSub); // 5

// Multiply the result by the third number.
const numMulti = numSub * n3 ;
console.log(numMulti); // 100

// Find the remainder of dividing the result by the fourth number.
const numRemainder = numMulti % n4 ;
console.log(numRemainder); // 0


// === Part 2: Practical Math ===

//You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
let tripDistance = 1500; //miles

// Your car’s fuel efficiency is as follows:
// At 55mph , you get 30 miles per gallon.
const speed55mph = 55; //mph
const fuelByDistance55 = 30; //m  

// At 60mph, you get 28 miles per gallon.
const speed60mph = 60; //mph
const fuelByDistance60 = 28;

// At 75mph, you get 23 miles per gallon.
const speed75mph = 75; //mph
const fuelByDistance75 = 23;

// You have a fuel budget of $175.
const fuelBudget = 175; //dollars

// The average cost of fuel is $3 per gallon.
const fuelPerGallon = 3; //dollars

// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?



// === Part 3: Future Exploration ===