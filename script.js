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
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

let tripDistance = 1500; //miles
const fuelBudget = 175; 
const fuelPerGallon = 3; 

// Your car’s fuel efficiency is as follows:
// At 55mph , you get 30 miles per gallon.
const speed55mph = 55; //mph
const fuelByDistance55mph = 30; 
let totalTime55mph = tripDistance / speed55mph; //time total
let fuelNeeded55mph = tripDistance / fuelByDistance55mph; // gallons of fuel needed
let fuelPrice55mph = fuelNeeded55mph * fuelPerGallon; // fuel cost
console.log(`Your total time if you drive 55mph will be: ${totalTime55mph}hr`);
console.log(`For this trip you will need ${fuelNeeded55mph} gallons of Fuel and the total cost for Fuel will be ${fuelPrice55mph} dollars.`)

// At 60mph, you get 28 miles per gallon.
const speed60mph = 60; //mph
const fuelByDistance60mph = 28;
let totalTime60mph = tripDistance / speed60mph; //time total
let fuelNeeded60mph = tripDistance / fuelByDistance60mph; // gallons of fuel needed
let fuelPrice60mph = fuelNeeded60mph * fuelPerGallon; // fuel cost
console.log(`Your total time if you drive 60mph will be: ${totalTime60mph}hr`);
console.log(`For this trip you will need ${fuelNeeded60mph} gallons of Fuel and the total cost for Fuel will be ${fuelPrice60mph} dollars.`)

// At 75mph, you get 23 miles per gallon.
const speed75mph = 75; //mph
const fuelByDistance75mph = 23;
let totalTime75mph = tripDistance / speed75mph; //time total
let fuelNeeded75mph = tripDistance / fuelByDistance75mph; //gallons of fuel needed
let fuelPrice75mph = fuelNeeded75mph * fuelPerGallon; // fuel cost
console.log(`Your total time if you drive 75mph will be: ${totalTime75mph}hr`);
console.log(`For this trip you will need ${fuelNeeded75mph} gallons of Fuel and the total cost for Fuel will be ${fuelPrice75mph} dollars.`)



// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?



// === Part 3: Future Exploration ===