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
array methods : push , pop , ushift , shift , concat , toString , at , slice , splice 
---------------------------------------------------------------------------------------------------------------------------------------------*/


// push(): add to end
let fruits = ["apple","banana","grapes","watermelon","mango",];
fruits.Push = ("orange");
console.log(fruits);            
//[ 'apple', 'banana', 'grapes', 'watermelon', 'mango', Push: 'orange' ]


//------------------------------------------------------------------------------------------------------------------------------------------


// pop(): delete from end and return
let fruitss = ["apple","banana","grapes","watermelon","mango",];
fruitss.Pop = ("orange");
console.log(fruitss);         
//[ 'apple', 'banana', 'grapes', 'watermelon', 'mango', Pop: 'orange' ]


//------------------------------------------------------------------------------------------------------------------------------------------


// unshift(): add to start
let fruitsss = ["apple","banana","grapes","watermelon","mango",];
fruitsss.unshift ("orange");
console.log(fruitsss);
//[ 'orange', 'apple', 'banana', 'grapes', 'watermelon', 'mango' ]


//----------------------------------------------------------------------------------------------------------------------------------------------

// shift(): delete from start and return
let fruit = ["apple","banana","grapes","watermelon","mango",];
fruit.shift ("orange");
console.log(fruit);
//[ 'banana', 'grapes', 'watermelon', 'mango' ]


//----------------------------------------------------------------------------------------------------------------------------------------------



// concat(): join multiplr arrays and return
var num1 = [1, 2, 3,];
var num2 = [4, 5, 6,];
var num3 = num1.concat(num2);
console.log(num3);
//[ 1, 2, 3, 4, 5, 6 ]


//----------------------------------------------------------------------------------------------------------------------------------------------


// toString(): converts array to string
let data = [ 1 , 2 ,"apple","banana", 3]
console.log(data);
console.log(data.toString());
//[ 1, 2, 'apple', 'banana', 3 ]  this is array
//1,2,apple,banana,3              this is string


//----------------------------------------------------------------------------------------------------------------------------------------------


// at():
var numbers = [1, 2, 3];
console.log(numbers[0]);          // this are two ways to write
console.log(numbers.at(0));      // this is array method


//----------------------------------------------------------------------------------------------------------------------------------------------



// slice(): returns the piece of array
// index no :    0,-5    1,-4     2,-3     3,-2      4,-1
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"] it will take all value after 2.

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"] it will take value from (index 2) to (index 4) but it excludes the 4th value. 

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"] it will take value from (index 1) to (index 5) but it excludes the 5th value.

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"] it will take all the value after -2

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"] it excludes the last value here it is -1th value

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


//----------------------------------------------------------------------------------------------------------------------------------------------


// splice(): changes the original array ( add, remove, replace)
//(indexno where you want to make changes,    how many element you want to delete,    what you have to add over deleted element )

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]  *this is new data based on which next code is printed.*


//  0       1       2        3        4
//["Jan", "Feb", "March", "April", "June"]?
months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


//                0       1        2        3
const monthh = ["Jan", "March", "April", "June"];
monthh.splice(1, 0, "May");  // [ 'Jan', 'May', 'March', 'April', 'June' ]
monthh.splice(1, 1, "May");  // [ 'Jan', 'May', 'April', 'June' ]
monthh.splice(1, 2, "May");  // [ 'Jan', 'May','June' ]

console.log(monthh);


//----------------------------------------------------------------------------------------------------------------------------------------------


// sort(): it sorts according to alphabatical order and numbers(linewise)
const monthss = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(monthss);     // a,b,c,d,e,f.........  therefore the 1st value we got is dec beacuse d comes first
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const nums = [1, 30, 4, 21, 100000];
nums.sort();
console.log(nums);//it considers only the first num therefore here the output is  1 , 100000 , and then it start with 2 then followed by 3 and 4  
//Expected output: Array [1, 100000, 21, 30, 4]


//----------------------------------------------------------------------------------------------------------------------------------------------


// reversed(): it reverse the array
const num = [1, 2, 3];
console.log(num); // [1, 2, 3]
const reversednum = num.toReversed();
console.log(reversednum); // [3, 2, 1]









