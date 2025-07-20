//Q. Given an array check given age from end side of array, if found then return index, if not found then retun "Not found" ?

let usersAge = [24, 32, 45, 65, 23, 56, 28, 23];
let targetAge = 24;
let matchedFlag = false;

for (let i = usersAge.length - 1; i >= 0; i--) {
  // console.log(usersAge[i], i);
  if (targetAge == usersAge[i]) { // 24 == 23 false
    console.log(i);
    matchedFlag = true;
    break;
  }
//    else {
//     console.log("Not found.");     it will only check only one condition and print not found this is the reason we dont use else here.
//   }
}

if (matchedFlag == false) {
  console.log("Not found.");
}



//*reduce:

// Q. Find addition of Elements from array 30

var nums = [1, 2, 3, 4, 5];
// 30
let initialValue = 0;

// 0 + 1 + 2 + 3 + 4 + 5
let total = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(total);





/*every():
every  == and operator         *if all condition is true it returns true .
boolean based
*/

var numbers = [1, 2, 3, 4, 5];
const result = numbers.every((num) => num < 10);
console.log(result,"result")



//some :
//some == or operator                     *if any one condition is ture it return true.

var numbers = [1, 20, 30, 40, 50];
const resultt = numbers.some((num) => num < 10);
console.log(resultt,"resultt")