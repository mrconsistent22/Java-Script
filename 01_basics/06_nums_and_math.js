const score = 22
  
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length); 
//if we convert it to string, it will give us more methods to use on it, like .length, .toUpperCase(), etc. 
//as number doen't have those methods like string does.


console.log(balance.toFixed(1)) 
// this will round the number to 1 decimal place, and return it as a string.

const otherNumber = 22.031205
console.log(otherNumber.toPrecision(1)) //returns a string representing the number to a specified precision in fixed-point or exponential notation. In this case, it will round the number to 3 significant digits.

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')) //this will format the number according to the locale specified, in this case, it will format it as per Indian numbering system.

console.log(Number.MAX_VALUE) //this will return the maximum numeric value representable in JavaScript.

console.log()


// *************** Maths **************** //


console.log(Math) 
// we will get all the methods and properties of Math object, like Math.PI, Math.E, Math.round(), Math.floor(), Math.ceil(), etc.


// console.log(Math.abs(-22)) //this will return the absolute value of the number, in this case, it will return 22.
// console.log(Math.round(22.5)) //this will return the rounded value of the number, in this case, it will return 23.
// console.log(Math.floor(22.9)) //this will return the largest integer less than or equal to the number, in this case, it will return 22.
// console.log(Math.ceil(22.1)) //this will return the smallest integer greater than or equal to the number, in this case, it will return 23.

// console.log(Math.min(22, 33, 44, 55)) //this will return the smallest number among the given numbers, in this case, it will return 22.
// console.log(Math.max(22, 33, 44, 55)) //this will return the largest number among the given numbers, in this case, it will return 55.

console.log(Math.random()) //this will return a random number between 0 and 1.
console.log((Math.random() * 10) + 1) 

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
//this will return a random number between min and max, in this case, it will return a random number between 10 and 20. 