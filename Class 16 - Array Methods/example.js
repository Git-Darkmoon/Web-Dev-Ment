const nums = [1, -2, 3, -4, 5, -6, 7, -8]

const byTwo = nums.map((n) => n * 2)
// console.log(byTwo)

const positivesNums = byTwo.filter((n) => n >= 0)
// console.log(positivesNums)

const total = positivesNums.reduce((acc, eachN) => {
  return (acc += eachN)
}, 0)

// console.log(total)

const locoshon = (myArray) => {
  return myArray
    .map((n) => n * 2)
    .filter((n) => n >= 0)
    .reduce((acc, eachN) => {
      return (acc += eachN)
    }, 0)
}

console.log(locoshon(nums))

const timesTwo = (arreglo) => {
  return arreglo.map((n) => n * 2)
}

const onlyPositiveNums = (arr) => {
  return arr.filter((n) => n >= 0)
}

const totalSum = (array) => {
  return array.reduce((acc, eachN) => {
    return (acc += eachN)
  }, 0)
}

const locoshona = (senhorArray) => {
  return timesTwo(onlyPositiveNums(totalSum(senhorArray)))
}

// console.log(locoshona(nums))

/* 

1,2,'buzz',4,'fizz','buzz',7,8,'buzz','fizz'... 100.

*/
