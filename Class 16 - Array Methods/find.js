// array.find(callbackFn)

const names = ["pedrop", "elon", "Ruaben"]

let ourName = names.find((eachName) => eachName === "elon")

// console.log(ourName)

const nums = [-1, 2, 3, 4, 5, -6, -3]

let negativeNum = nums.find((eachNum) => eachNum < 0)

// console.log(negativeNum)

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

let choosenCar = 3

let carBought = cars.find((eachCar) => {
  return eachCar.id === choosenCar
})

console.log(cars[choosenCar - 1])
