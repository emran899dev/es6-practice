// default value pass

function defaultValue(number1, number2 = 10) {

    // default value pass es5 system -1
    // if (number2 == undefined) {
    //     number2 = 0
    // }

    // default value pass es5 system -2
    // number2 = number2 || 10
     return number1 + number2
}

const result = defaultValue(10, 30);
console.log(result);