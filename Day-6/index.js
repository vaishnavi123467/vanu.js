var nums = [1, 2, 3];
var output = [];
// 1 * 5
// 2 * 5
// 3 * 5
for (var i = 0; i < nums.length; i++) {
  output.push(nums[i] * 5);
  //   console.log(i, nums[i] * 5);
}

console.log(output, "output");




//Q. given an array of Element, find count of even numbers

var numbers = [3, 45, 67, 33, 55, 88, 324, 575, 234, 674, 346];
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i], i);
  if (numbers[i] % 2 == 0) {
    evenCount++;
  }
}
console.log(evenCount, "evenCount");




//Q. Given an array check given age from end side of array,if found then return index ?

let usersAge = [23, 32, 45, 65, 23, 56, 24, 23];
let targetAge = 24;

for (let i = usersAge.length - 1; i >= 0; i--) {
  //   console.log(usersAge[i], i);
  if (targetAge == usersAge[i]) {
    console.log(i);
    break;
  }
}




// Q. no reduce only modification 
let number = [1, 2, 3];
let newArray = number.map((number) => number * 5);
console.log(newArray,"newArray") //[5, 10, 15 ]




// Q. 
let students = ["virat", "rohit", "rahul"];
let updatedStudentsName = students.map((student) =>  student + " kohli" );
console.log(updatedStudentsName, "updatedStudentsName");