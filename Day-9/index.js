
//function declration :

function Greet() {                // here we have declared function .
  console.log("Hello");           // hoisting is applicable here .
}
Greet();



// function expression :

const Greeeting = function () {         // here we create a variable and function is created inside it .
  console.log("Hi");                    // here hoisting is not applicable, because it does not work with const .
};

Greeeting();       // here we will call variable instead of function .


//-----------------------------------------------------------------------------------------------------------------------------------------------



/* here we have given the default parameters, when we dont give any parameter when we call function then the default parameters 
   will be executed.*/

function Addition(num1 = 20, num2 = 30) {     // here we have given default parameters.
    console.log(num1 + num2);                 
  }
  
  Addition();     // here we havent passed any parameters or you can say value.
  



/* here we have given default parameters, and we have also given the parameters when we call the function .
   Q. So in this situation which one should be given the priority ?
   Ans:The priority will be given to the parameters which we pass when we call the function, because default parametrs run only when 
       when we call the function without giving any parameters */


  function Greeting(name = "Awdiz") {          
    console.log("Hi", name);
  }
  Greeting("Virat");
  
  //As Awdiz id default parameter therefore in this situation the priority is given to Virat rather than Awdiz. 



//-------------------------------------------------------------------------------------------------------------------------------------------


// Arrow function : (=>)

const addition = (num1, num2) => {
  console.log(num1 + num2);
};
addition(1, 2);


//syntax: 2 ways to write syntax .
const addition1 = (num1, num2) => num1 + num2;
const addition2 = num1 => num1 + num1;


//--------------------------------------------------------------------------------------------------------------------------------------------


//Q Solve this ?

let a = 10;

function greet() {
  let a = 20;             // When we call greet function this block of code will run 
  console.log(a);
}
console.log(a);  // 10      // As this is written outside the block the above let code will run
greet();   // 20


//----------------------------------------------------------------------------------------------------------------------------------------------

/* Object :

object is an collection of key and values 
Object  { key1 : value1 , key2 : value2, key3 : value3 } */


//Q. How to access the key value pair ?
var info = { name: "Awdiz",
   age: 10,
};

console.log(info.name)     // console.log(variable name . key name)


//Q. Different way/syntax to access the key value pair ?   
// **There are two ways/syntax**

 // This is the 1st way and we have seen this above.
 console.log(info.age);
 console.log(info.name);


 // 2nd way :
 console.log(info["name"]);
 console.log(info["age"]);


 //Q. How to add ?
 info.surname = "Jadhav";
 console.log(info.surname)


 //Q. How to change the value ? 

 info.name = "Swaraj";
 info["age"] = 25;
 console.log(info.name)


 //Q. How to delete the value ?

 delete info.name;
 console.log(info);

 //Q. how to access this ?

 var information = {
  course: { name: "Full stack", batch: 1 }
 };
 console.log(information.course.name);
 console.log(information.course.batch);


//--------------------------------------------------------------------------------------------------------------------------------------------

// Q. solve using loop 

 const data = { name: "Awdiz", age: 10, location: "Vashi" };

 for (let key in data) {       // to access key value we use (in) over here
  console.log(key, "key", data[key]); 
 }

 /*output:
 name key Awdiz
 age key 10
 location key Vashi
 */









