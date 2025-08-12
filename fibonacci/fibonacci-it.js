function fibs(number) {
  let arr = [0, 1];
  for (let i = 2; i < number; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr;
}

console.log(fibs(8));