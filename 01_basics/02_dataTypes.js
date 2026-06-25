"use strict"; //code will treat as a newer version of JavaScript
//now there is no need to use this line in the latest version of JavaScript

//alert("Hello") //we are using node.js not browser so alert will not work

// Code readability is important 

let name = "Kane"
let age = 35
let isLoggedIn = true

// number => range 2^53
// bigint => range 2^64
// string => "kane" or 'kane' - prefer double quotes
// boolean => true or false
// null => empty value, it is a dtatype but it is a standalone value. eg => let k = null
// undefined => variable is declared but not assigned any value
// symbol => unique identifier


// object => collection of key value pair stored in variable and written in curly braces

console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof isLoggedIn) //boolean

let k = null
console.log(typeof k) // type is object

let c = undefined
console.log(typeof c) // type is undefined