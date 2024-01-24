// January 1,1970
let myDate = new Date(); // ye important hai .
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);
// ans. is object

let myCreatedDate1 = new Date(2004,3,8);
let myCreatedDate2 = new Date(2024,11,11,5,3);  // 5:03 time 

console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toDateString());



// another syntax of passing arguments in date object .
let myCreatedDate3 = new Date("01-04-2004");

let myTimeStamp = Date.now()
console.log(myCreatedDate1.getTime());

// answer in milliseconds

// clock is running from January 1,1970.
// to convert it into seconds , divide it by 1000

console.log(Math.floor(myTimeStamp/1000));



//   localestring is used to customize th edat e format




