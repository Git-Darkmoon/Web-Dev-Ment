let name = " Victor "
let nameFix = name.trim()
console.log(nameFix)

let msg = `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem a
    facere tenetur aut accusantium dignissimos provident atque autem tempora
    consequuntur, eum ratione magnam! Cumque ipsa adipisci soluta debitis ab
    quasi officiis suscipit doloremque temporibus aliquam cum obcaecati fugiat
    quas molestiae, itaque a veritatis at neque consequuntur voluptate sunt
    facilis! Cupiditate amet ad debitis molestiae laboriosam quaerat itaque
    ipsum quibusdam illum, cum est perspiciatis vero delectus enim assumenda
    dolore aspernatur, id illo beatae reiciendis architecto repellendus?
    Distinctio, accusantium vel? Perspiciatis, culpa repellendus hic cum, magni,
    et at sint ullam odio quod ut necessitatibus. Nihil impedit quam eum minima
    quisquam placeat temporibus?
`

// console.log(msg)

let shortMsg = msg.slice(0, 30)
// console.log(shortMsg)

let userName = "ViCTr"
let myRegEx = /['a-z']/g

// console.log(msg.includes("victor"))
// console.log(msg.startsWith("L"))
// console.log(userName.toLocaleLowerCase())
// console.log(userName.toLocaleUpperCase())
// console.log(userName.match(myRegEx))

let myDate = new Date()
let myYear = myDate.getFullYear()
// console.log(myYear)

let randomNum = Math.floor(Math.random() * 10)
// console.log(randomNum)

console.clear()

const grades = [3.2, 2.1, 4.3, 5, 0.2]

let highestGrade = Math.max(grades)

console.log(highestGrade)
