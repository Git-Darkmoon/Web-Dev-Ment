/*
Rest Operator ==> iterable elements
gathers / collects items.
careful placement
*/

// Arrays
const fruits = ["apple", "orange", "lemon", "banana"]
// const [apple] = fruits
// console.log(apple)
// const newFruits = ["mango", ...fruits, "grape"]

const [firstFruit, secondFruit, ...restOfTheFruits] = fruits
console.log(firstFruit, restOfTheFruits)

const specificFruit = restOfTheFruits.find((fruit) => fruit === "lemon")
console.log(specificFruit)

// Objects
const person = { name: "Albert", lastName: "White", job: "UX Designer" }

const newPerson = { ...person, age: 10 }
console.log(newPerson)

// Crear una arrow function llamada getAverage(name,scores)
