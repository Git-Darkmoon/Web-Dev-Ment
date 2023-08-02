/* 
Spread Operator ==> iterable elements
Splits into single items and COPY THEM.
Results in an array.
*/

const word = "people"
const num = 123

let letters = [...word]
// let separatedNums = [...num] ❌

console.log(word)
// console.log(letters)
letters.push("s")
// console.log(letters)

const maleEmployees = ["Jake", "Garret", "Taylor"]
const femaleEmployees = ["Susan", "Annie"]

const newEmployee = "Luke"

const employees = [...maleEmployees, ...femaleEmployees, newEmployee]
// console.log(employees)

/* const nums = [1, 2, 3, -4, -5, 12, 7]
console.log(nums)

const maxNum = Math.max(...nums)
console.log(maxNum)

const minNum = Math.min(...nums)
console.log(minNum) */

const [firstEmployee] = employees
console.log(firstEmployee)

const sum = (a, ...numeritos) => {
  for (const iterator of numeritos) {
    a += iterator
  }
  return a
}

console.log(sum(1, 4, 3, 10, 100, -98,1231))
