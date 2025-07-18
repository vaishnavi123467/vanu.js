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

