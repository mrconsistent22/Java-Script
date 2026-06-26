//Dates

let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString()); 
// console.log(myDate.toLocaleString());

console.log(typeof myDate) //object

// let myCreatedDate = new Date (2005, 11, 3)
// let myCreatedDate = new Date (2005, 11, 3, 5, 3)
let myCreatedDate = new Date ("2005-12-03")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // will give the time in milliseconds since 1970
// console.log(myCreatedDate.getTime()); // will give the time in milliseconds since 1970
// console.log(Math.floor(Date.now() / 1000));  // will give the time in seconds since 1970


let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1); // 1-12
console.log(newDate.getDate()); // 1-31
console.log(newDate.getDay()); // 0-6
console.log(newDate.getHours());

newDate.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZoneName: 'short'
})