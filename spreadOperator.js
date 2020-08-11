const friendAge = [17, 18, 19]
const friendAge1 = [20, 21, 22]
const friendAge2 = [30, 31, 32]

// // es5 system
// const allAges = friendAge.concat(friendAge1).concat(45).concat(friendAge2)
// console.log(allAges);

// es6 system
const allAges = [...friendAge, ...friendAge1, ...friendAge2]
console.log(allAges);

// es5 system
// const AbdulAge = 19
// const emranAge = 20
// const shantoAge = 22
// const maxAge = Math.max(AbdulAge, emranAge, shantoAge)
// console.log(maxAge);

// es6
const age = [22, 23, 34]
const maxAges = Math.max(...age)
console.log(maxAges);


