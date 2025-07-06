//* In javascript code is executed line by line.
// javascript is a programming language , .js is the extension of javascript.
// console.log is used to log (print) a message of the code.


//*DataTypes :  
console.log("Hello", typeof "Hello") // This gives you the type of the data you have entered ie.String         output = Hello string
console.log(true, typeof true)       // This gives you the type of the data you have entered ie.boolean        output = true boolean
console.log(54, typeof 54)           // This gives you the type of the data you have entered ie.number         output = 54 number

let studentData = null;    // If we dont have value to put in we keep it null, so once we know the value we can enter it.
console.log(studentData , typeof studentData);  //output = null object        (typeof studentData = object) 

var num  ;            // here we have not assign any value to variable so it will give us undefined .
console.log(num , typeof num);   //output = undefined undefined      ( typeof num = undefined)


//*Variables :
// Variables are containers for storing data.
// variable names are case sensitive ie. 'a' and 'A' are different.
// This is way we write variable using var.   
// we can  declare, assign, re-declare, re-assign it.
var num = 12                      // here we have declare and assign variable.
var num = 30                      // here we have  re-declared and re-assign and the same varibale which is given above.
console.log(num)                  // so the final output we will get is 30  .


// This way we can print 2 variables together or one after another ie. (in the same line).
var username = "Vaishnavi";   
var userage = 20;
console.log( username ,userage);   //output = Vaishnavi 20


var counter1 = 30
var counter2 = 18
var result = (counter1 + counter2)   // Here we have created 3rd var and added var1 and var2 in it so we can directly get output .

console.log(result)                  // output = 48
console.log(counter1 + counter2)     // output = 48   // this are two ways to write .



// This way we can increase the value of variable.
var counter = 1;              // here we have declare and assign var(counter).
counter = counter + 4 ;       // as counter is 1 , so 1 + 4 = 5  // also here we have re-declare, re-assign the var(counter).
console.log(counter);         // output = 5 


var counter = 1;          // here we have declare and assign var(counter).
counter = counter - 4 ;   // as counter is 1 , so 1 - 4 = -3  // also here we have re-declare, re-assign the var(counter).
console.log(counter);     // output = -3



// This is another way to increase the value of variable ie. { increment operator (++) and decrement operator (--) }
var counter = 5;
counter++ ;                // it will add the number by 1 , so counter is 5 so by adding 1 it will become 6.
console.log(counter);      // output = 6

var counter = 5;
counter-- ;                // it will subtract the number by 1 , so counter is 5 so by subtracting 1 it will become 4. (ie. 5 - 1 = 4)
console.log(counter);      // output = 4

var counter = 1;
counter = counter - 1;      // it will subtract the number by 1 , so counter is 1 , so by subtracting 1 it will become 0. ( ie. 1 - 1 = 0)
counter-- ;                 // it will subtract the number by 1 , so counter is 0 ,so by subtracting 1 it will become -1. ( ie. 0 - 1 = -1)
counter -= 1  ;             // it will subtract the number by 1 and we will get -2 ,  because earlier we were having -1 . 
console.log(counter);      // output = -2        { Lec- 1 JS time-38:00}


// Hoisting - It takes all the variable and place it at the first line . It happens only with var not with const and let.
// suppose we have code as 

counter = 1;
console.log(counter);
var counter;

// the output will be 1     
// so the line no 76 ie. (var counter;) will be placed at the 1st line which will give us output as 1. 
// (ie. line 69 will go to line 1 beacuse of hoisting)
  


// lets understand variable (let) :
// Here we can declare , assign , re-assign the var(let).
// we cannot re-declare it.
// It is a block scope variable.
let age = 12;         // here we have decalred and assigned the varivable
console.log(age);     

age=13;               // here we have assigned the variable a new value
console.log(age);

//let age = 14;       // This will give us error as - cannot re-deaclare block scope variable.
//console.log(age)

// Lets understand  variable const:  
// We cannot  re-declare and re-assign it.
const data = 10 ;
console.log(data);  // output = 10


//Scope : JS1 21st june 50

//var - It is a global scope

var counter = 20;
console.log(counter);  // output = 20

var counter = 20;
{
    console.log(counter);  // output = 20
}

{
var counter = 20;
console.log(counter);   // output = 20
}

{
    var counter = 20;
}
console.log(counter)


// Let - Block scope  {Any thing written in this is called as block}   {} this is block scope

{
let data = 15;
console.log(data);
}


{
let data = 15;
 {
    console.log(data);  //the yellow arrow is a block and we can write as many bracket in it but it should be inside the yellow block.
 }

}    // same for const 



//////////////////////////////////very imp table////////////////////////////////////////////////////

 // Table to understand var let and const easily :

 //           var         let         const
 // reassign    true        true        false
 // redelcare   true        false       false
 // hosting     true        false       false
 // scope       global      block       block



 // concepts we learned today :

// Datatypes -String , Number , Boolean , undefined , null 

// varibles  var , let ,const , difference , hoisting , scope

// operators -increment , decrment 

