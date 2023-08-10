const openSidebarBtn = document.getElementById("openSidebarBtn")
const closeSidebarBtn = document.getElementById("closeSidebarBtn")

const sideBar = document.querySelector(".sidebar")

openSidebarBtn.addEventListener("click", () => {
  sideBar.classList.add("openSidebar")
})

closeSidebarBtn.addEventListener("click", () => {
  sideBar.classList.remove("openSidebar")
})
