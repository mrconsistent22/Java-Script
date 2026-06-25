console.log(2 > 1); // answer will be in boolean
// there are so many comparisons like

console.log("2" > 1) // this will return true because "2" is converted to number 2 and then compared with 1
console.log("2" > "12") // this will return true because "2" is greater than "1" in string comparison

console.log(null == 0) // this will return false
console.log(null > 0) // this will return false
console.log(null < 0) // this will return false
console.log(null >= 0) // this will return true because null is converted to 0 and then compared with 0                                                     


/* 
here 1 and 4 are giving different results because 
in 4, null is converted to 0 and then compared with 0, 
but in 1, null is not converted to 0 and hence the result is false
the reason is that equality operator (==) does not convert null to a number, 
but the relational operators (<, >, <=, >=) do convert null to a number when comparing with a number.
they works differently because they have different rules for type conversion and comparison.
*/

console.log()
console.log(undefined == null) // this will return true because undefined and null are considered equal in non-strict equality comparison
console.log(undefined == 0) // this will return false
console.log(undefined > 0) // this will return false
console.log(undefined < 0) // this will return false
console.log(undefined >= 0) // this will return false


// Strict equality operator (===) does not perform type conversion, so it will return false when comparing values of different types. For example:
console.log(1 === "1"); // false 
// it checks both value and type, so 1 (number) is not equal to "1" (string).   