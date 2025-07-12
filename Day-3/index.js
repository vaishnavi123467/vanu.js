/*----------------------------------------------------------------------------------------------------------------------------------------------
CONDITIONAL STATEMENT  :  if else , Switch statement .
------------------------------------------------------------------------------------------------------------------------------------------------

if else:-  (syntax)

if (condition) {
    // code to execute
} else {
   // code to execute
}

*/

//Eg:1

let age = 12;
if ( age >= 18 ) {
    console.log("You can vote")
}

else {
    console.log("You cannot vote")
}


// Eg:2
var agee = 85;               // var "agee" is written because in the above code we have already taken var = "age" .
if (agee == 18) {
  //true
  console.log("You are eligible for learning license");
} else if (agee > 18 && agee <= 80) {
  // true
  console.log("You are eligibe for DL.");
} else {
  console.log("You are not eligible for DL.");
}



/* switch statement:- (syntax)

switch (key) {
    case value:

        break;

    default:
        break;
}
*/


// Eg:1
var userSelectedFruit = "Apple";

switch (userSelectedFruit) {
  case "Apple":
    console.log("You have selected Apple.");
    break;

  case "Banana":
    console.log("You have selected Banana.");
    break;

  case "Strawberry":
    console.log("You have selected Strawberry.");
    break;

  default:
    console.log("You have selected none of available fruit.");
    break;
}


// Eg:2

var userselectedcar = "BMW" ;

switch (userselectedcar) {
    case "Mercedez":
      console.log("You have selected Mercedez");
      break;

    case "Fortunier":
        console.log("You have selected Fortunier");
        break;

    case "BMW":
        console.log("You have selected BMW");
        break;

    default :
        console.log("You have selected none of the available car");
        break;

    }

 




