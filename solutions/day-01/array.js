const fruits = ['banana', 'orange', 'mango', 'lemon']

console.log(fruits)


const nam = Array(5).fill("Alraj")
console.log(nam)

let findfruit = fruits.indexOf('orange')

if(findfruit != -1)
    console.log("Orange in array")
else
    console.log("Orange not in array")

findfruit = fruits.indexOf('avacado')
findfruit != -1 
    ? console.log("Avacado in array") 
    : console.log("Avacado not in array")


const num1 = [1, 2, 3, 4, 5]
console.log(num1)
console.log("Number 5 includes in array: " + num1.includes(5)) // true
console.log("Number 0 includes in array: " +num1.includes(0)) // false
console.log("Number 1 includes in array: " +num1.includes(1)) // true
console.log("Number 6 includes in array: " +num1.includes(6)) // false

console.log("num1 is array or not: " + Array.isArray(num1))

const num2 = 5
console.log("num2 is array or not: " + Array.isArray(num2))

console.log("Array to string: " + num1.toString())

console.log("Array Join: " + num1.join())

console.log("Slicing: " + num1.slice(1,4))
console.log(num1)


console.log("Splicing: " + num1.splice(2,1, 7,8,9))
console.log(num1)

console.log("Original Fruits: " + fruits)
console.log("Fruits sorting: " + fruits.sort())

console.log("Original Fruits: " + fruits)
console.log("Fruits sorting reverse: " + fruits.reverse())