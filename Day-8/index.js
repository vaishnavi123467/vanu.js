// Function : It is a block of code used to perform a specific task.

function Institute() {              // This is the name of the function , you can give any name but always give the meaningful name .
    console.log("Pull Request");   // This is the block of code in function Institute()
  }


function Awdiz() {
    console.log("Action");        // This is the block of code in function Awdiz() 
  }

Institute();       // here we are calling the function , and the block of code inside that function will run. output = Pull Request
Awdiz();           // here we are calling the function , and the block of code inside that function will run. output = Action




// Q . Given an two varibles print addition of them.

let a = 20;     //* we usually dont write like this , it just for understanding
let b = 40;      

function AdditionOfTwoVarible() {   
  console.log(a + b);        // because of this code addition of two variables took place. output = 60 
} 
AdditionOfTwoVarible();      // here we have called the function


function SubtractionOfTwoVarible() {
  console.log(a - b);        // because of this code addition of two variables took place. output = -20 
}
SubtractionOfTwoVarible();   // here we have called the function





//Q . Given an two varibles print addition of them by using decalred variables and parameters ?

let c = 20;   // decalred variables
let d = 40;
                                 
function AdditionOfTwoVaribles(number1, number2) {  
  console.log(number1 + number2);
}
AdditionOfTwoVaribles(c, d);  // parameters means the value written in the bracket     output = 60
AdditionOfTwoVaribles(50, 100);     // output = 150

        

//****************************  IMP  ******************************

/* correct way to writ function using parameters.
 parameters means the value written in the bracket .
 we should always define value inside parameters.  */

function AddTwoNum ( num1, num2 ) {
    console.log( num1 + num2 );
}
AddTwoNum (30 , 18);




//Q. Given numbers write two functions for subtraction and additions ?

function addition(num1, num2, num3, num4) {
  console.log(num1 + num2 + num3 + num4);  // (3 + 2 + 1 + 234)
}

function subtraction(num1, num2, num3, num4) {
  console.log(num1 - num2 - num3 - num4);   //(6 - 5 - 4 - 876)
}

addition(3, 2, 1, 234);           // output = 240
subtraction(6, 5, 4, 876);        // output = -879





function AdditionOfTwoVarible(a, b) {
    console.log(a + b, "hi");
    return a + b; // return -  function stop
    console.log(b + 1);   // this line is dim in colour,because it does not run as we have written,return above that line that returns the code,
  }                       //  and function stops over there.
  console.log(AdditionOfTwoVarible(100, 200));
  var outputt = AdditionOfTwoVarible(20, 40);
  console.log(outputt, "outputt");





// Real time Eg :

var folders = ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5"];
var userTypedText = "Day-5";       

function getTypedSuggestions(data, userTypedText) {
  //   console.log(data, "data");
  let filteredData = data.filter((ele) => ele == userTypedText);
  return filteredData;
}

const output = getTypedSuggestions(folders, userTypedText);
console.log(output, "output");





