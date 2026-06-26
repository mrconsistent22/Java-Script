const marvel = ["ironman", "spiderman", "captain america"];
const dc = ["batman", "superman", "wonder woman"];

// marvel.push(dc) // it will take dc array as a single element and add it to the end of the marvel array

// console.log(marvel)
// console.log(marvel[3]) // it will print the dc array as a single element
// console.log(marvel[3][0]) // it will print the first element of the dc array which is "batman"

// const heros = marvel.concat(dc) // it will merge the dc array with the marvel array and return a new array
// console.log(heros) // it will print the merged array

const colab = [...marvel, ...dc] // it will merge the dc array with the marvel array and return a new array
console.log(colab) // it will print the merged array


const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]];
const flatArr = arr.flat(Infinity) // it will flatten the array to a depth of Infinity, meaning it will flatten all nested arrays regardless of their depth
console.log(flatArr) // it will print the flattened array


console.log(Array.isArray("Kane")) // it will print true if "Kane" is an array, otherwise false
console.log(Array.from("Kane")) // it will convert the string "Kane" into an array of characters
console.log(Array.from({name: "kane"})) // it will convert the object into an array of its values, in this case it will return an empty array since the object has no iterable properties


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // it will create a new array with the given elements