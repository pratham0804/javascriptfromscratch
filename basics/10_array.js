const marvel_heroes =["thor" , "Ironman" , "spiderman"]
const dc_heroes = ["superman", "flash" , "batman"]

// push -> modifies the original array.
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);

//concat-> output similar to  spread but returns a new array.
const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);
console.log(marvel_heroes); // no change in original array 

// instead use spread operator.
// const all_new_heroes = [...marvel_heroes , ...dc_heroes]

// console.log(all_new_heroes );

// const another_array = [1,2,3,[4,5,6],[7,8,9,7,[2,3,4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// flat is used for 



