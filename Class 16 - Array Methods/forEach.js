// array.forEach(callbackFn)

const greet = () => console.log("Hello pipol")

const nums = [8, 12, 23, 42, 500]

// nums.forEach(greet)

// nums.forEach(function(){
//     // code...
// })

let newArray = []

nums.forEach((eachItem, index, myArray) => {
  //   console.log(`The number is: ${eachItem} AND it is in the position `)
  console.log(`The element is in the index: ${index}`)

  newArray.push(1)
  console.log(newArray)
})

console.log(nums)

console.clear()
