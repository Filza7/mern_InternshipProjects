let name = "Filza fatima"
const age = 21
var phone = "ufone"

let arrow = () => {
  console.log("Hello i am an arrow function")
}

let bag = {
  lipstick: "Pink",
  blush: "orange",
  Mascara: "black"
}

const { lipstick, blush, Mascara } = bag

const fruits = ["banana", "Apple"]
const add = [...fruits, "mango"]

class Car {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  Print(nmae) {
    console.log(`My name is ${nmae}`)
  }
}

const cars = new Car("Ford", 1988)
cars.Print("Ford")

const numbers = [1, 2, 3, 4, 5]

const squared = numbers.map(n => n * n)
const evens = numbers.filter(n => n % 2 === 0)
const sum = numbers.reduce((acc, curr) => acc + curr, 0)

const canVote = age >= 18 ? "Eligible to vote" : "Not eligible"

function greet() {
  console.log("Hello from regular function!")
}

try {
  console.log(a)
} catch (err) {
  console.log(err.message)
}
var a = 10

try {
  console.log(b)
} catch (err) {
  console.log("Error accessing before declaration:", err.message)
}
let b = 20

greet()

try {
  sayHi()
} catch (err) {
  console.log("Error accessing arrow function ", err.message)
}
const sayHi = () => {
  console.log("Hello from arrow function!")
}

numbers.forEach(num => {
  console.log("number:", num)
})

const squareMapped = numbers.map(num => num * num)
console.log("Squared:", squareMapped)

const even = numbers.filter(num => num % 2 === 0)
console.log("Even Numbers:", even)

const greaterThanThree = numbers.find(num => num > 3)
console.log("First number > 3:", greaterThanThree)

const total = numbers.reduce((acc, curr) => acc + curr, 0)
console.log("Sum:", total)

export {
  greet,
  Car,
  squared,
  evens,
  sum,
  canVote
}
