const accountId = 22 //cant - cant be changed
let accountEmail = "kane22@gmail.com" 
var accountPass = "22"

accountCity = "Tauranga" 
//if we dont use let till it will work but this is not good programming practice
//this is another way to declare variables
let accountState 
//if we do console.log of it then it will print the value as undefined as it is not defined


//accountId = 4; //can't be changed, it will give error as it is not allowed

console.log(accountId)

accountEmail = "coco3@gmail.com" 
accountPass = "3"
accountCity = "Pune"

console.table([accountEmail, accountPass, accountCity, accountState]) //it will give variables and their values in a table

//we can declare variables in 2 ways by using let and var
//we dont use var we use let because of scope that is {}
//var has issues with scope thats why we use let keyword
// dont use var use let everytime as it has issues in scope (functional and block)