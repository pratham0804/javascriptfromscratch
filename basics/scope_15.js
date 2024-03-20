// "use strict";

// const { MockScope } = require("undici-types/mock-interceptor");

// if(true){
// let a = 45
// var b =20
// const c = 30
// }
// // console.log(a);  This gives error
// console.log(b);
// console.log(c);// This gives error

// {} -> known as scope 

// Block scope
// Global scope
// nested scope

function one(){
    const username = "Prathamesh"

    function two(){
        const website ="youtube"
        console.log(username)
    }
    console.log(website);

    two()
}

one()

// nested scope can be better understood with an analogy of icecream 
// small children can take icecream from parent , but parent cant take ice cream from children

// ++++++++++++++++++ interesting +++++++++++


function addone(num){
    return num+1;

}

addone(5) // value return hui hai print nahi hui hai 




//Another type of declaring functions (storing into variable)


const addTwo = function(num){
    return num+2;
}



// in case of first declateation , when we call the function (addone )  before
// the declaration , code runs without any erroe 


// while in second declaration case , error is shown , as the function is stored in variable 
// which cannot be printed before declaration