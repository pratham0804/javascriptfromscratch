// document.querySelectorAll


// returns a nodelist 
// a nodelist is not pure array 
// to convert it into array 




// getElementsByClassName return html collection 

// we cannot apply foreach function on html colllection 



// templist.forEach(function(li){
//     li.textContent
    
// })
// VM471:1 Uncaught TypeError: templist.forEach is not a function
//     at <anonymous>:1:10
// (anonymous) @ VM471:1

// gives error , when tried to traverse with foreach


// CONVERSION OF NODELIST AND HTML COLLECTION INTO ARRAY
// Array.from(templist).forEach(function(li){
// li.style.color='red'
// })




// inspect any wikipedia site , then add textcontent , style and other stuffs using conversion 

// variable[0].style.backgroundColor = 'orange'
// 'orange'
// variable[0].style.backgroundColor = 'magenta'
// 'magenta'
// variable[0].style.padding='10px'
// '10px'
// variable[0].style.innerText = 'HItesh'
// 'HItesh'
// variable[0].innerText = 'HItesh'
// 'HItesh'



