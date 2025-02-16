// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function checkOddEven(num) {
  let result;
  if (num % 2 === 0) {
    result = num / 2;
  } else {
    result = num * 2;
  }
  return result;
}

console.log("Result for even number", checkOddEven(4));
console.log("Result for odd number", checkOddEven(5));
