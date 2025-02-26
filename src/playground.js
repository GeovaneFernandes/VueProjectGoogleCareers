const fruits = ['apple', 'banana', 'cherry']
const vegetables = ['carrot', 'cucumber', 'potato']

const fruitsAndVegetables = [...fruits, ...vegetables]
console.log(fruitsAndVegetables) // ['apple', 'banana', 'cherry', 'carrot', 'cucumber', 'potato']

//an array of squares
//[1, 4, 9, 16, 25]
const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map((number) => {
  return number * number
})

console.log(squares)
