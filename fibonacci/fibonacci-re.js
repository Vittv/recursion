function fibsRec(number) {
  console.log("This was printed recursively");
  if (number <= 1) {
    // 0 returns [], 1 returns [0]
    return [0].slice(0, number);
  }

  if (number === 2) {
    return [0 , 1];
  }
  // recursively get previous sequence
  let arr = fibsRec(number - 1);
  // add next fib number to the end of the array
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return arr;
}

console.log(fibsRec(8));