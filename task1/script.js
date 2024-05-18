//დავალება 1
function Equal (a, b) {
    if ( a === b ) {
        console.log("is equal")
    }
    else {
        console.log("isn't equal")
    }

}

console.log(Equal (5, 5))
console.log(Equal (8, '8'))

// დავალება 2
function Temperature (a) {
    if ( typeof a === "number" ) {
        return (Math.round((a - 32) * 5 / 9 ))
    }
    else {
        return false
    }

}
console.log (Temperature (80))

//დავალება 3

function Calculator(a, b, operation) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return false
            }
        default:
            return false;
    }
}

console.log(Calculator(5, 0, '+'))




