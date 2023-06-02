// Data Types

// Booleans
true 
false 

// null/undefined
null 
undefined

// number
1 - 9E6

// big int
9E6+

const someWord = 'Nicole'

// string 
'hello world' <---- // single quote syntax
"hello world" <---- // double quote syntax
`hello world, ${someWord}` <---- // string literal syntax quotes

// Regular Function Expression
function sayHello() {
    console.log('say hello')
}

// ES6 Arrow Function Expression
const sayHello = () => {
    console.log('say hello')
}

// instantiating a variable
const someWord1 = 'Nicole'  // you can NOT MODIFY after declaring, BLOCK-LEVEL SCOPED - PREFERRED
let someWord2 = 'Nicole' // you can MODIFY after declaring, BLOCK-LEVEL SCOPED - SECOND PREFERRED
var someWord3 = 'Nicole' // DO NOT USE, you can MODIFY after declaring, GLOBAL SCOPED - LASTLY PREFERRED

// scoping - access to the variables
// 1. global-level scope

// 2. block-level scope

function someWord4() {
    const someWord5 = 'Kim'
    
    if (true) {
        const someWord6 = 'Nicole'
        if (true) {
            console.log(someWord5)
        }
    }
}

// Comparison Operators

// LOOSE EQUALS: only checks for data VALUE

// TYPE COERCION: Converts one of the data types into the other one its comparing
console.log('2' == 2)

// STRICTLY EQUALS: checks for both data VALUE & TYPE - ALWAYS USE THIS!!!
console.log('2' === 2)

// 3 types of functions we can create: 

// FIRST CLASS FUNCTION: a function that can be assigned to a variable!
// -------- FIRST CLASS FUNCTION ---------
const doSomething = () => {
    console.log('do something....')
}

// HIGHER ORDER FUNCTION: a function that can take in function(s) as arguments!
// ------- HIGHER ORDER FUNCTION ---------
const doSomething1 = (x) => {
    x() 
}

// CALL BACK FUNCTION: a function that you call/invoke INSIDE of a another function!
// ------- CALL BACK --------
const doSomething1 = (x) => {
    x() //<----- CALL BACK FUNCTION
}

const numbers = [1, 2, 3, 4, 5]

const double = numbers.map(num => num * 2)

