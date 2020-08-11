const firstName = 'Emran'
const listName = 'Nazir'

// // es5 system
// const fullName = firstName + ' ' + listName + ' is good boy'
// console.log(fullName);

// // multiline es5
// const multiline = 'my name\n' 
// + 'is emran nazir\n'
// + 'i am a student'
// console.log(multiline);

// Template String es6
const fullName = `${firstName} ${listName} is good boy.`
console.log(fullName);

// multiline es6
const multiline = `my name
 is emran nazir
 i am a student`
console.log(multiline);