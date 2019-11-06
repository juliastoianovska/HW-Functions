function squareNums(nums) {
  let squareNumsArr = []
  for (let i = 0; i < nums.length; i++) {
    squareNumsArr.push(nums[i] * nums[i]);
  }
  return squareNumsArr
}

let result = squareNums([1, 2, 3, 4, 5]);
console.log(result[0] === 1);
console.log(result[1] === 4);
console.log(result[2] === 9);
console.log(result[3] === 16);
console.log(result[4] === 25);
