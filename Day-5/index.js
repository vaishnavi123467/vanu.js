//array 

let allUserAge = [1, 2, 3, 4, 5];
console.log(allUserAge);
console.log(allUserAge.length);


/*
Math.round
Math.floor
Math.ceil
 */

console.log(Math.round(2.4));   // if the second number is above 5 then it will give higher num and if it is below 5 it will give lower number
                                // here we have taken (2.4) as there is 4 here which is smaller than 5 we will get output as 2 . 
console.log(Math.floor(2.9));   // Always goes down, so output → 2
console.log(Math.ceil(2.2));    // Always goes up , so output → 3

console.log(allUserAge[Math.round((allUserAge.length - 1) / 2)]);

/*
The list has 5 items.

allUserAge.length - 1 = 5 - 1 = 4

4 / 2 = 2

Math.round(2) = 2

allUserAge[2] = The number at position 2 → which is 3

So, it prints 3.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------- 
array methods : push , pop , ushift , shift , concat , toString , slice , splice 
---------------------------------------------------------------------------------------------------------------------------------------------*/

// push(): add to end
let fruits = ["apple","banana","grapes","watermelon","mango",];
fruits.Push = ("orange");
console.log(fruits);


// pop(): delete from end and return
let fruitss = ["apple","banana","grapes","watermelon","mango",];
fruitss.Pop = ("orange");
console.log(fruitss);


// unshift(): add to start
let fruitsss = ["apple","banana","grapes","watermelon","mango",];
fruitsss.unshift ("orange");
console.log(fruitsss);


// shift(): delete from start and return
let fruit = ["apple","banana","grapes","watermelon","mango",];
fruit.shift ("orange");
console.log(fruit);

// concat(): join multiplr arrays and return
var num1 = [1, 2, 3,];
var num2 = [4, 5, 6,];
var num3 = num1.concat(num2);
console.log(num3);

//





