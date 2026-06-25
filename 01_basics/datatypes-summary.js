// Primitive datatype
// 7 types of primitive datatypes in JavaScript
// String, Number, Boolean, Null, Undefined, Symbol, BigInt
// when we uses primitive datatypes, they are immutable and passed by value
// when we copy a primitive datatype, it creates a new copy of the value and any changes made to the new copy do not affect the original value.
// as it dont give memory reference to the original value, it creates a new copy of the value in memory.                            


// Reference Type / Non Primitive
// Reference types are objects and arrays in JavaScript. 
// Functions are also reference types in JavaScript.
// They are mutable and passed by reference.
// When we copy a reference type, it creates a reference to the same object in memory, 
// so any changes made to the new reference will affect the original object.


// In summary, primitive datatypes are immutable and passed by value, while reference types are mutable and passed by reference.


const id = Symbol('22');
const id1 = Symbol('22');
console.log(id === id1); // false, because each Symbol is unique

//const bigIntValue = BigInt(1234567890123456789012345678901234567890);
//const bigIntValue1 = 1234567890123456789012345678901234567890n; // using 'n' suffix to denote BigInt
//console.log(bigIntValue === bigIntValue1); // true, both represent the same BigInt value


// Array

const heros = ["ironman", "batman", "spiderman", "captain america"];
const heros1 = heros; // copying reference of heros array to heros1
heros1.push("hulk"); // modifying heros1 array
console.log(heros); // ["ironman", "batman", "spiderman", "captain america", "hulk"]
console.log(heros1); // ["ironman", "batman", "spiderman", "captain america", "hulk"]


// Object

let person = {
    name: "Kane",
    age: 35
};

const person1 = person; // copying reference of person object to person1     
person1.age = 36; // modifying person1 object 
console.log(person); // { name: "Kane", age: 36 }
console.log(person1); // { name: "Kane", age: 36 }


// Function

const myFunction = function() {
    console.log("Hello!");
}

console.log(typeof bigIntValue1); 
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof person);

const temp = null;
console.log(typeof temp); // object, this is a known quirk in JavaScript

// return type of non primitive datatypes is object, 
// while return type of primitive datatypes is their respective types (string, number, boolean, null, undefined, symbol, bigint).
// return type of function is object function, which is a special type of object in JavaScript.