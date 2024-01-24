"use strict";

const balance = new Number(100)
console.log(balance);

console.log(balaance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN'));
// read the documents ......

// +++++++++++++++++++++ Maths ++++++++++++++

console.log(Math.abs(-2));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
// dot max
// dot min

console.log(Math.random());
// it  gives the values between 0 and 1 , so multiply it by 10 or as per your desire.
// plus 1 is also added to avoid the case of 0.0000075785 

console.log((Math.random()*10) +1);


const min =10 
const max= 20
// basically a range is provided 

console.log(Math.floor(Math.random()*(max-min+1))+min);
// learn this logic.


