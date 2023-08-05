const navbar = document.querySelector(".navbar")

const navVic = navbar.getAttribute("data-vic")

console.log(navVic)

const member = navbar.getAttribute("data-member")
console.log(member)

navbar.setAttribute("data-vic", 10)

console.log(navbar.getAttribute("data-vic"))

const themeChanger = document.querySelector("#themeChanger")

console.log(themeChanger)

themeChanger.addEventListener("click", () => {
  navbar.classList.toggle("dark-theme")
})
