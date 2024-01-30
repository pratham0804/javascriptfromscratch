
// REST OPERATOR (TO PASS MULTIPLE ARGUMENTS )

function calculateCartPrice(...num1){
    return num1 ;
}

// With the use of ... rest operator we can pass any number of arguments 
// function will return everything in array form .
console.log(calculateCartPrice(200,400,1,345))
//  output printed :[ 200, 400, 1, 345 ]


//IMP
// ???? Lets check if we pass arguments of different datatypes.
console.log(calculateCartPrice(200,400,1,"prathamesh",87))

//output printed :[ 200, 400, 1, 'prathamesh', 87 ]
// ???? lets check the datatype of 'prathamesh'
const returnedarr = calculateCartPrice(200,400,1,"prathamesh",87)

console.log(typeof returnedarr[3]) 
// YES !!!!!!!
// IT IS STRING. (WAS CONFUSED OF THE SINGLE QUOTES IN THE OUTPUT).
 
console.log(returnedarr[3])
//NOW CONFIRMED , IT IS STRING



// PASSING OBJECTS INTO FUNCTIONS
const intro ={
    name:"Prathamesh",
    degree:"BTECH"
}

function handleOject(anyobject){
    // use if logic to validate whether the given argument is object.
    console.log(`${anyobject.name} is my name and i persue ${degree}`)
}


// object alag na banakar , directly bhi pass kr skte the 
// function naya_object({name: "Anchal" ,
//  age : 21, 
//  birthname :"Thanibai"}){
//     console.log(`Naam ${name} , Umar ${age}, janam naam ${birthname}`)
// }    
// ABOVE FOUR LINES OF CODE IS WRONG.
// aise direct pass nahi kr skte , error deta 
// during function call direct pass kr skte 

function naya_object(anyobject){
    console.log(`Naam ${anyobject.name} , Umar ${anyobject.age}, janam naam ${anyobject.birthname}`)
}    

naya_object({name: "Anchal" ,
age : 21, 
birthname :"Thanibai"})

// this is correct





//PASSING ARRAY INTO FUNCTION

const myarr = [400,54,54,2,34,75]

function returnSecondElement(getArray){
    return getArray[1]
}

let result = returnSecondElement(myarr)

//OR 

let result2 = returnSecondElement([200,600,33,24,]);
