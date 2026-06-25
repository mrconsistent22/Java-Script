//let score = "22" // it is a string now we will convert it into number using Number() function
// type => string, type after conversion => number, value after conversion => 22

//let score = "03coco" 
// type => string, type after conversion => number, value after conversion => NaN

//let score = null 
// type => object, type after conversion => number, value after conversion => 0

//let score = undefined
// type => undefined, type after conversion => number, value after conversion => NaN

//let score = true
// type => boolean, type after conversion => number, value after conversion => 1

let score = "kane"
// type => string, type after conversion => number, value after conversion => NaN

console.log(typeof score) 
//or console.log(typeof (score))

let valueInNumber = Number(score) // converting string into number using number function

console.log(typeof valueInNumber) 
console.log(valueInNumber) 

console.log()

let isLoggedIn = -22

// 1 => true, 0 => false, any other number => true
// "" => false, " " => true, "any string" => true

let booleanIsLoggedIn = Boolean(isLoggedIn) // converting number into boolean using boolean function
console.log(booleanIsLoggedIn)


console.log()

let someNumber = 22

let stringNumber = String(someNumber) //converting number into string using string function
console.log(typeof stringNumber) //string
console.log(stringNumber) //22
console.log()


// ********************** Operations **********************

// let value = 22
// let negValue = -value  
// console.log(negValue) // -22     


// console.log(2+2)
// and all other arithmetic operations like -, *, /, % etc. are also available in JS


// let str1 = "Kane"
// let str2 = " Williamson"

// let str3 = str1 + str2 // concatenation of strings
// console.log(str3) // Kane Williamson

// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + "2") // 12
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32
// console.log("1" + (2 + 2)) // 14


console.log(true) // true
console.log(+true) // 1
// console.log(true+) // it will give error

console.log(+"") // empty string prints false but a + sign before empty string converts it to number and prints 0

let n1, n2, n3
n1 = n2 = n3 = 2 + 2 // 4

let gameCounter = 100
console.log(gameCounter++) // 100, prints the value first then increments it by 1
console.log(gameCounter) // 101

console.log(++gameCounter) // 102, increments the value first then prints it
console.log(gameCounter) // 102
