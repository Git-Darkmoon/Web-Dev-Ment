const person = {
  name: "pepe",
  age: 20,
}

class Hooman {
  constructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  walk() {
    return `${this.name} is walking`
  }
}

class Mammals {
  constructor(name, habitat) {
    this.name = name
    this.habitat = habitat
  }
}

const person1 = new Hooman("Ruaben", 13, "M")
// console.log(person1)

const person2 = new Hooman("Vic", 23, "F")
// console.log(person2)

console.log(person2.walk())
