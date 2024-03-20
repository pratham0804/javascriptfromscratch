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


//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

let myName ="Prathamesh" 
let anotherName = myName;

anotherName= "Naman"


console.log(anotherName);
console.log(myName); 


// there is no change in myName , as copies are provided during assiging of values , 
//copies are change , not the original values 



// Heap memory...(non-primitive data types which are stored in stack gets reference of the original values that are in heap )
// object 
let userone={
    email : "prathmeshjangle425@gmail.com",
    age : 19 

}

let usertwo = userone;

usertwo.email ="namanlalshantilaldhoot@gmail.com";



console.log(usertwo.email);
console.log(userone.email);

// as both the objects are provided the refernce of same data fields in the memory 