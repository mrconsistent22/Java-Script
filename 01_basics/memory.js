// There are two types of memory in JavaScript: stack and heap. 
// The stack is used for static memory allocation, 
// while the heap is used for dynamic memory allocation.

// Stack memory is used for storing primitive datatypes and function calls. (gets copy)
// Heap memory is used for storing reference types like objects and arrays. (gets reference of original memory)

let myYoutubeChannel = "kanecodes" // stored in stack memory
console.log(myYoutubeChannel); // "kanecodes"

let myYoutubeChannel1 = myYoutubeChannel; // copying value of myYoutubeChannel to myYoutubeChannel1
myYoutubeChannel1 = "kanecodes03"; // modifying myYoutubeChannel1

console.log(myYoutubeChannel); // "kanecodes"
console.log(myYoutubeChannel1); // "kanecodes03"


let user = {
    email: "kane22@gmail.com",
    password: "0808"
}

let user1 = user; // copying reference of user object to user1
user1.password = "0312"; // modifying user1 object
console.log(user); // { email: "kane22@gmail.com", password: "0312" } 
// user object is modified because user1 is a reference to the same object in heap memory
// user1 object is a reference to the same object in heap memory, so any changes made to user1 will affect the original user object.
                       