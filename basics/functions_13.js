// function loginUserMessage(username){
//     return `${username} just logged in`

// const { exit } = require("process");

// }
// console.log(loginUserMessage("Prathamesh"));

// when u pass empty string  , output : just logged in 

// console.log(loginUserMessage(""))

// when nothing is passed .
// undefined is printed not null

function loginUserMessage(username="sam"){
    if(username === undefined) // since username is undefined so we can write (!username)
    {
        console.log("Please enter username");
    return
        
    } 
    
       return `${username} just logged in`
    
    
    }
    console.log(loginUserMessage("prathamehs"))
    
    // in this function if we pass any value we obtain it as output and not passed anything sam will be printed.
    //undefined kabhi hoga hi nahi , so wo if statement kbhi run hi nahi hoga 
    
    