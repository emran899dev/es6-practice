// // es5 function 
// function add(num1, num2) {
//     return num1 + num2
// }

// const add1 = function (a, b) {
//     return a + b;
// }

// // es6 arrow function 
// const add = a => a * 3
// const add1 = (a, b) => { return a + b }
// const emptyNum = () => 50
const doMath = (a, b) => {
    const sum = a + b
    const diff = a / b
    const result = sum * diff
    return result
}
const result = doMath(14, 7)
console.log(result);


