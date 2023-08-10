const openSidebarBtn = document.getElementById("openSidebarBtn")
const closeSidebarBtn = document.getElementById("closeSidebarBtn")

const sideBar = document.querySelector(".sidebar")

// Open btn
openSidebarBtn.addEventListener("click", () => {
  sideBar.classList.add("openSidebar")
})
// Close btn
closeSidebarBtn.addEventListener("click", () => {
  sideBar.classList.remove("openSidebar")
})
