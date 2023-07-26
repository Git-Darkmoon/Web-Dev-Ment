let number1 = 1
let number2 = "1"
let number3 = 1

if (number1 === number2 || number1 === number3) {
  console.log("They are the same")
} else {
  console.log("They are different")
}

let msg = number1 > 0 ? "Es positivo" : "Es negativo"
console.log(msg)

// TAREA: Short Circuit comparations JS.

/* 

== compares ONLY the value of the element.

let number1 = 1 ==> value: 1 typeOf number
let number2 = "1" ==> value: 1 typeOf String

number1 == number2 returns true


*/

/* 

=== compares the value of the element AND the data type.

let number1 = 1 ==> value: 1 typeOf number
let number2 = "1" ==> value: 1 typeOf String


number1 === number2 returns false


*/

/* 
    Get user input using prompt(“Enter your age:”). 
    If user is 18 or older , 
    give feedback:'You are old enough to drive' 
    but if not 18 give another feedback stating to 
    wait for the number of years he needs to turn 18.
*/
