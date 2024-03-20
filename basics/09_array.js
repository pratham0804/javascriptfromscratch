// array 
const myArr =[3,4,3,6,3,true , false , "Prathamesh" , "anchal"]
// resizable 
// mix of datatypes 
// console.log(myArr);
// shallow copy -> properties share same reference points . (heap memory)
// deep copy ->Properties do not share the same refernce point (call by value )

const Cricketers = ["Rohit" ,"Virat" , "Shami" , "Prathamesh"]

const myArr2 = new Array(1,2,3,4,"Prathamesh");
// console.log(myArr2.length);

// Array Methods

// myArr2.push(6)
// myArr2.push(8)
// console.log(myArr2);



// myArr2.unshift(8);
// console.log(myArr2);
// // 8 is added to the front of the array 

// myArr2.shift();
// // element is removed from the front of the array

// console.log(myArr2)
// console.log(myArr2.includes(3))

// console.log(myArr2.indexOf(99));

// console.log(myArr2);

// const newArr = myArr2.join()

// console.log(myArr2);
// console.log(typeof newArr);
// join combines array and converts it into string 


//slice,splice

//slice -> returns a copy of a section of array 
const myn1 = myArr2.slice(0,2); // 0 se 1 tak array ki copy return krta hai
console.log(myArr2)
console.log(myn1);

  const myn2=myArr2.splice(1,3); // returns 1 se 3 tak and also changes are made in 
 // the array on which we are operating.
 console.log(myn2);
 console.log(myArr2);



