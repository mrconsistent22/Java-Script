// Arrays

const myArr = [1, 2, 3, 4, 5];
// js arrays are resizable

console.log(myArr[0]); 

// zero based indexing
// when we perform copy operation on arrays, it is a shallow copy, not a deep copy
// Shallow copy means that if we change the value of the copied array, it will also change the original array.
// Deep copy means that if we change the value of the copied array, it will not change the original array.


// other ways to declare array
const heros = ["ironman", "batman", "spiderman"]
const myArray = new Array("item1", "item2", "item3", "item4")

console.log(myArray[0]) 


// Array methods

myArr.push(6) // adds an element at the end of the array
myArr.push(7) // adds an element at the end of the array
myArr.pop() // removes the last element of the array

myArr.unshift(100) // adds an element at the beginning of the array
myArr.shift() // removes the first element of the array

console.log(myArr.includes(3)) // returns true if the element is present in the array, otherwise false
console.log(myArr.indexOf(3)) // returns the index of the element in the array, if not present returns -1

const newArr = myArr.join() // returns a string of the array elements separated by commas

console.log(myArr)
console.log(newArr) // returns a string of the array elements separated by commas
 
console.log(typeof newArr) // returns string



// slice and splice methods

console.log("A", myArr)

const myn1 = myArr.slice(1, 4) // returns a new array with elements from index 1 to 3
console.log(myn1)
console.log("B ", myArr) // original array is not modified


const myn2 = myArr.splice(1, 3) // removes elements from index 1 to 3 and returns a new array with those elements
console.log(myn2)
console.log("C ", myArr) // original array is modified