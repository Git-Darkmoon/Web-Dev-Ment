// DOM Elements:

const input1 = document.getElementById("firstNumber")
const input2 = document.getElementById("secondNumber")

const result = document.getElementById("result")

const sumBtn = document.getElementById("sum")
const diffBtn = document.getElementById("diff")
const timesBtn = document.getElementById("times")
const divisionBtn = document.getElementById("division")

// Operations:

const sum = (a, b) => parseInt(a.value) + parseInt(b.value)
const diff = (a, b) => parseInt(a.value) - parseInt(b.value)
const times = (a, b) => parseInt(a.value) * parseInt(b.value)
const division = (a, b) => (parseInt(a.value) / parseInt(b.value)).toFixed(2)

sumBtn.addEventListener("click", () => {
  result.value = sum(input1, input2)
})

diffBtn.addEventListener("click", () => {
  result.value = diff(input1, input2)
})

timesBtn.addEventListener("click", () => {
  result.value = times(input1, input2)
})

divisionBtn.addEventListener("click", () => {
  result.value = division(input1, input2)
})
