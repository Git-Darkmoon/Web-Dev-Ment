// array.filter(callbackFn) -----> RETORNA UN ARRAY
// NO AFECTA EL ARRAY ORIGINAL.

const nums = [1, -2, 3, -4, 5, -6, 7, -8]

const positiveNums = nums.filter((eachNum) => {
  return eachNum >= 0
})

console.log(positiveNums)

console.log(nums)

const employees = [
  {
    name: "victor",
    age: 19,
    role: "ML Developer",
  },
  {
    name: "Ruaben",
    age: 19,
    role: "INCREIBLE",
  },
  {
    name: "Pedro",
    age: 99,
    role: "Cadaver",
  },
]

const legalEmployees = employees.filter((emp) => emp.age < 21)

console.log(legalEmployees)
