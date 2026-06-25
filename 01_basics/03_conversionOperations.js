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