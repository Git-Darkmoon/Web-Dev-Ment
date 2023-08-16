/*
- Fonts
- Fetch Users
- Bootstrap
- Toastify.
*/

const wrapper = document.querySelector(".wrapper")
const API_URL = "https://jsonplaceholder.typicode.com/users"

const generateCards = (name, address, website) => {
  wrapper.innerHTML += `
    
    <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">
            ${address}
          </p>
          <a href="#" class="btn btn-primary">${website}</a>
        </div>
      </div>

    `
}

const fetchUser = async () => {
  const response = await fetch(API_URL)
  const users = await response.json()

  users.map((eachUser) => {
    const { name, address, website } = eachUser

    const fullAddress = `${address.city}, St. ${address.street} | ${address.suite}`

    generateCards(name, fullAddress, website)
  })

  const cardsBtn = document.querySelectorAll(".btn")

  cardsBtn.forEach((eachBtn) => {
    eachBtn.addEventListener("click", () => {
      Toastify({
        // text: `Paris tour added to cart`,
        text: `Clicked in: ${eachBtn.innerHTML}`,
        position: "right", // `left`, `center` or `right`
        className: "info",
        style: {
          background: "linear-gradient(to right, #5F0A87, #A4508B)",
        },
      }).showToast()
    })
  })
}

fetchUser()
