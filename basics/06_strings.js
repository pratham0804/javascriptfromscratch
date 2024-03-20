"use strict";
const name = "Prathamesh"
const age = 19 
const goal = "Javascript"

//  console.log(name + age + goal );
// this syntax of printing string is outdated . 

// instead use STRING INTERPOLATION .

const LastName = new String('Jangle')  // agar aise declare krne ke baad print karane jaoge toh datatype bhi print krke dega,,[String: 'Jangle'].

console.log(`Hello my name is ${name}, my age is ${age} and currenly i am learning ${goal}`);

console.log(name[1]);
console.log(name.toUpperCase())
// we can access prototype  methods directly , to have a look of the methods , console log the string on console ....

console.log(LastName.length)
console.log(LastName.toUpperCase()) // agar brackets nahi lagata hai then [Function: toUpperCase] ye output aaega
// isme original values change nahi hui hai , stack memory me store hai ...

console.log(LastName)
console.log(name) // stack memory concept can be proved by name......


// read documentation for more string methods ....
//charAt()
//trim()
//replace()
//includes()   .... boolean method 
//substring(starting index value , )