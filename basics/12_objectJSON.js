//DESTRUCTURING OF OBJECTS

const course = {
    courseName : "master Javascript",
    coursePrice : 1500,
    courseInstructor : "Dr. Prathamesh Sir"
}

console.log(course.courseInstructor)
// Destructuring refers to shorten the properties name
// for our own convenience . 
// Since for printing Instructor name , 
// 'course.courseInstructor' looks large
// and takes time for typing it , in case of multiple printing 
// Syntax : const {property} = object name
const {courseInstructor} = course
// now 'courseInstructor' can  be used without dot operator


// lets see , is it possible to store the value of a property using its destructured name .
const a = courseInstructor
console.log(a) //   Yes....!!!


const {courseName:name} = course
console.log(name );
// a substitute name can also be given to the property 


// this is used in react .....



// ++++++++ API calls ++++++++
// API gives data in Json format 

//two ways :1.
// {

// }


/// OR
 // 2.

 // [{},{},{}]

//  JSON FORMAT ME PROPERTY NAME BHI AS A STRING LETA HAI (" ");
