/* 
Boolean Data types:
----------------------------------
true , false , truthy, falsy.

true === true
false === false,undefined, null,
truthy = 1,"aaa", true
falsy = 0, "" , undefined, null, NaN, -0
*/

// Loops: (do while, for, while, for in, for of)

let amount = 1

console.log(`The initial amount is: ${amount}`)

// for (let index = 0; index < 10; index++) {
//   console.log(`Now the amount is: ${(amount += index)}`)
// }

const employees = ["Ruaben", "Victor", "Manolo", "Nicolas"]

const employeesInfo = [
  {
    name: "Ruaben",
    age: 19,
    email: "algo@example",
  },
  {
    name: "Victor",
    age: 19,
    email: "algo@example",
  },
  {
    name: "Manolo",
    age: 29,
    email: "algo@example",
  },
  {
    name: "Nicolas",
    age: 39,
    email: "algo@example",
  },
]

// for (const key in employeesInfo) {
//   console.log(key)
// }

// for (let index = 0; index < employees.length; index++) {
//   const element = employees[index]
// }

// for (const i of employeesInfo) {
//   console.log(`
//     My info:

//     Name: ${i.name} \n
//     Age: ${i.age} \n
//     Email: ${i.email}
//   `)
// }

function greet(name) {
  console.log(`Hello ${name}`)
}

greet("vic")

// const sum = (n1, n2) => {
//   return n1 + n2
// }

const sum = (n1, n2) => n1 + n2

console.log(sum(2, 4))

// employees.map(() => {
// })

// Hacer una arrow function que reciba como parametro un
// array de objetos y que al invocarla me retorne un mensaje
// con todas las propiedades del Array.

const vowels = ["a", "e", "i"]
const cars = [
  { brand: "Bugatti", model: 2011 },
  { brand: "Ferrari", model: 2021 },
]

// for (let i of vowels) {
//   console.log(i)
// }

const arrayIterate = (unArray) => {
  for (const eachUser of unArray) {
    console.log(`
        ${eachUser?.name ?? "El Pepe"} is ${eachUser?.age ?? "no ha nacido"}
    `)
  }
}

arrayIterate(employeesInfo)
arrayIterate(vowels)
arrayIterate(cars)

// forEach, map, find, reduce, filter, some

/* 

Make an arrow function that generates a random user, the 
user data will come from an array of objects, the user must have:

name, age, email, country, job

the array must have 5 users.
*/
