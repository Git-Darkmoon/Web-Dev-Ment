/* Reduce 
Iterates, callback function
reduces to a single value - number, array, object
1 parameter ('acc') - total of all calculations
2 parameter ('curr') - current iteration / value */

const people = [
  { name: "Bob", age: 30, position: "Developer", id: 1, salary: 400 },
  { name: "Peter", age: 25, position: "Designer", id: 2, salary: 300 },
  { name: "Susy", age: 20, position: "CEO", id: 3, salary: 500 },
  { name: "Dante", age: 42, position: "Writer", id: 2, salary: 200 },
  { name: "Valentine", age: 22, position: "Developer", id: 4, salary: 400 },
]

const total = people.reduce((acc, person) => {
  acc += person.position
  return acc
}, "Hola")

// console.log(`EL valor de nomina total es: $${total} US`)

console.log(total)
