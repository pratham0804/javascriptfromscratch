// // singleton
// // Object.


// // object literals
// // in the case of array keys are defined that we call as index...
// // but incase of objects it is totally upto us , ky key define krni hai.
// const mySym = Symbol("key1");
// const JsUser = {
//     name: "Prathamesh",
//     "fullname" : "Prathamesh Jangle",
//     age : 19,
//     [mySym] : "mykey1", // agar symbol ke liye ye syntax use nahi kiya toh as a string treaat hoga 
   
//     email: "Prathameshjangle425@gmail.com",
//     lastLoginDays : ["Monday" , "Saturday"]

// }

// //Accessing the object 
// // using dot 

// console.log(JsUser.email);

// // using[]   tip : use ""

// // console.log(JsUser[email]); // compile nahi hota hai , use double cotes
// console.log(JsUser["email"]);

// // console.log(JsUser["mySym"]);   
// // symbol ke case me do not use " "  , undefined print hokar aata hai 
// console.log(uu)


// // to freeze the value of any key 
// Object.freeze(JsUser.email)

// JsUser.email = "Anchaljethliya@gmail.com"
// // error nahi show krega but  , value change nahi hogi

// JsUser.greeting = function(){
//     console.log("hello user")
// }

// console.log(JsUser.greeting) // function ka reference milta hai 

// // function run krne ke liye () ka use kre 
// console.log(JsUser.greeting());





// ++++++++++++++ objects part 2 ++++++++++++++

// Singleton declaration 

// const  myObject = new Object();

// console.log(myObject); // output is {}

// // another non-singleton way 

// const myObject2 = {}

// console.log(myObject2)  // gives same output {}

// // fields of myObject.
//     myObject.id = "78947584"
    
//     myObject.name ={
//         officialName : {
//             firstname : "Prathamesh",
//             lastName : "Jangle"
//         }
//     }
//     // above example showcases object ke andar object .
//     myObject.age = 19

//     console.log(myObject)
    // to acces the inside nested object use dot (.) operator 
   

 //Assigining fields to myObject2 which is assined in a non-singleton way .
// can be assigned using dot operator.



// COMBINATION OF OBJECTS 

const obj1 = {
    1:"a",
    2: "b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj3 = {obj1,obj2}  
console.log(obj3)
// wahi same array wali problem   { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


// we have to use assign method .
// here the first object passed act as target and others are sorce 
// this method returns the updated target object .
// so it is expected to use a empty object {} as a  good practice .

const obj4 = {
    4:"e",
    5:"f"
}

// const returned_target = Object.assign({} , obj1,obj2,obj4)

// console.log(returned_target)

/// if we dont use {}  we end up with a new target array (the first object passed).


    
// The most convenient way of doing this is spread .
const obj6 = {...obj1,...obj2,...obj4}



// NOTE : Databases se data is received in the form of array of objects
const datareceived =[
    {

    },
    {

    },
    {

    }
]

// can be accesed using dot operator



// A useful method

//* console.log(Object.keys(obj6))
// output :[ '1', '2', '3', '4', '5' ]
// Sari keys array ke form me return hoti hai 
// ab ispr loop laga  skte hai 

//Similarly values bhi nikal dkta huu


console.log(Object.entries(obj6))
// output :[
//   [ '1', 'a' ],
//   [ '2', 'b' ],
//   [ '3', 'c' ],
//   [ '4', 'e' ],
//   [ '5', 'f' ]
// ]
// returns a array 



// for exploring more object methods refer documentation 
// go to the console , declare and print a object
// a list of prototype will be displayed
