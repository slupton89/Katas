function mixFruit (arr) {
  const reg = ['banana', 'orange', 'apple', 'lemon', 'grapes']
  const spe = ['avocado', 'strawberry', 'mango']
  let total = 0
  for(i = 0; i < arr.length; i++) {
  total +=
    reg.includes(arr[i]) ? 5
    : spe.includes(arr[i]) ? 7
    : 9
  }
  return Math.round(total / arr.length)
}


console.log(mixFruit(['banana','mango','avocado']));
console.log(mixFruit(['watermelon','mango','avocado']));