//  Array destructuring

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// Basic variable assignment
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// Parsing an array returned from a function
function f() {
    return [1, 2, 3];
  }
  
  const [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 3
  
  const [c] = f();
  console.log(c); // 1