const name = "kane-kw"
const repoCount = 22

console.log(name + repoCount + " value") 
// this is the old way of concatenating strings

console.log(`hello my name is ${name} and Ihave ${repoCount} repositories`) 
//this is the new way of concatenating strings using template literals
// this is called string interpolation

const gameName = new String("Call of Duty")
// this is the another way of creating a string using the String constructor

console.log(gameName[0])
console.log(gameName.__proto__) //we can see the prototype of the string object

console.log(gameName.length) // we can see the length of the string using the length property
console.log(gameName.toUpperCase()) // we can convert the string to uppercase using the toUpperCase() method
console.log(gameName.toLowerCase()) // we can convert the string to lowercase using the toLowerCase() method

console.log(gameName.includes("Duty")) // we can check if the string includes a certain substring using the includes() method
console.log(gameName.startsWith("Call")) // we can check if the string starts with a certain substring using the startsWith() method
console.log(gameName.endsWith("Duty")) // we can check if the string ends with a certain substring using the endsWith() method

console.log(gameName.charAt(0)) // we can get the character at a certain index using the charAt() method
console.log(gameName.indexOf("D")) // we can get the index of a certain substring using the indexOf() method


const str = gameName.substring(0, 4) // we can get a substring of the string using the substring() method
console.log(str)

const str2 = gameName.slice(0, 4) // we can get a substring of the string using the slice() method
console.log(str2) // the difference between substring() and slice() is that substring() does not accept negative indices, while slice() does

// trim and replace methods

const str3 = "   hello world   "
console.log(str3.trim()) // we can remove the whitespace from the beginning and end of the string using the trim() method
//also we can use trimStart() and trimEnd() methods to remove whitespace from the beginning and end of the string respectively
//we can aslo use it for line breaks and tabs


const str4 = "hello world"
console.log(str4.replace("world", "kane")) // we can replace a certain substring with another substring using the replace() method

console.log(str4.includes("kane")) // we can check if the string includes a certain substring using the includes() method


console.log(name.split("-")) // we can split the string into an array of substrings using the split() method here we are splitting the string by the "-" character
