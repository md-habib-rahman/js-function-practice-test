// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(intArray, arryLenght) {
  let sum = 0;
  for (let i = 0; i < arryLenght; i++) {
    sum = sum + intArray[i];
  }
  return sum / arryLenght;
}

console.log(make_avg([5, 5, 5, 5, 5, 5, 5], 7));
