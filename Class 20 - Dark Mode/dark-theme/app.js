/* const navbar = document.querySelector(".navbar")

navbar.classList

console.log(navbar.classList)

navbar.classList.add("nuevaClase")

console.log(navbar.classList)

navbar.classList.remove("algo")

console.log(navbar.classList)
 */

const navbar = document.querySelector(".navbar")
const themeChanger = document.querySelector("button")

themeChanger.addEventListener("click", () => {
  //   if (navbar.classList.contains("dark-theme")) {
  //     navbar.classList.remove("dark-theme")
  //   } else {
  //     navbar.classList.add("dark-theme")
  //   }

  navbar.classList.toggle("dark-theme")
})
