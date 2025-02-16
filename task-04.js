// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString) {
  let zeroCount = 0;
  //console.log(binaryString);
  const binaryArray = binaryString.split("");
  //console.log(binaryArray.length);
  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] == 0) {
      zeroCount++;
    }
  }
  return zeroCount;
}

console.log(count_zero("01010010"));
