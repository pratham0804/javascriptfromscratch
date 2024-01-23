//datatypes are categorised into primitive and nonprimitive
// the categorization is based on storage and access of data from the memory.

// Primitive : (Call by value)
//when we need the data , coopies of data are provided , no refernce is given for accessing the actual locaation of data
// 7 types : String , Number , Boolean , null , undefined , Symbol.
// BigInt.


// NOn premitive ( Reference type) :
//memory ka refernce diya jata hai , there we can perform our actions like reading , writing and updating values 

//Arrays , Objects , Functions.

//Java Script is a Dynamically typed language .
//datatypes are assigned at runtime

//symbol assures uniquness,

const outsideTemp = null

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123');


console.log(id==anotherId);

const cricketer =  ["Rohit","Virat","Sachin"];
let MyObj = {
    name : "Prathamesh",
    age : 19

}

const Myfunction = function(){
// funciton ko bhi variable me store kr skte .
}
 
console.log(typeof Myfunction);
console.log(typeof cricketer);

//sare non primitive datatypes ka return type object hotahai 
// in case of function we get function , which is considered as 'object function
//) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object