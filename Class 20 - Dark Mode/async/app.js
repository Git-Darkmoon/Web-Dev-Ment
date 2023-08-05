const name = "Ruaben"

const loadingTitle = document.querySelector("h1")
/* 
setTimeout(() => {
    console.log(`hello ${name}`)
  loadingTitle.innerHTML = ""
}, 5000)
 */

/* 
for (let index = 0; index < 10; index++) {
  setTimeout(() => {
    console.log(`La cuenta va en: ${index}`)
  }, 2000)
} */

// for (let i = 1; i <= 2; i++) {
//   setTimeout(function () {
//     alert(i)
//   }, 1000)
// }

const intervalo = setInterval(() => {
  let num = 0
  console.log(num++)
}, 2000)

clearInterval(intervalo)
