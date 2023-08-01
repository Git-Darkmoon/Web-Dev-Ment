// METODO MAS IMPORTANTE !!!!!!!
/* 
    Retorna un array,
    no modifica el array original
*/

const cars = [
  {
    id: 1,
    brand: "Ferrari",
    model: "Enzo",
    year: 2008,
    price: 178_800_000,
  },
  {
    id: 2,
    brand: "Lamborghini",
    model: "Huracan",
    year: 2018,
    price: 372_800_000,
  },
  {
    id: 3,
    brand: "Chevrolet",
    model: "Corvette",
    year: 2021,
    price: 671_890_000,
  },
  {
    id: 4,
    brand: "Porsche",
    model: "911",
    year: 2023,
    price: 268_390_000,
  },
]

let brands = cars.map((eachCar) => {
  return eachCar.brand
})

// console.log(brands)

const nums = [1, -2, 3, -4, 5, -6, 7, -8]

const positiveNums = nums.map((eachNum) => {
  return eachNum * 2
})
const negativeNums = nums.map((eachNum) => eachNum < 0)

// console.log(`The positive numbers are: ${positiveNums}`)
// console.log(`The negative numbers are: ${negativeNums}`)

const updatedCars = cars.map((eachCar) => eachCar.price + 1_157_000)

console.log(updatedCars)
