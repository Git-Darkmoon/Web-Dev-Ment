const name = document.getElementById("name")
const email = document.getElementById("email")

const signUpBtn = document.getElementById("signUp")

const usersContainer = document.querySelector(".usersContainer")

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
}

const users = []

signUpBtn.addEventListener("click", (estaCosa) => {
  estaCosa.preventDefault()

  let newPerson = new User(name.value, email.value)

  users.push(newPerson)
  console.log(users)

  name.value = ""
  email.value = ""

  users.map((eachUser) => {
    const { name, email } = eachUser

    usersContainer.innerHTML = `
    
    <article>
        <h1>${name}</h1>
        <h3>${email}</h3>
    </article>

    `
  })
})
