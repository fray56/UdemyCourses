// function statement / declaration

// function funcName () {
//     code goes here!
// }

function rollDice()
{
    let roll = Math.floor(Math.random() * 6 ) + 1;
    console.log(roll);
}

function throwDie(numRolls)
{
    for(i = 0; i < numRolls; i++) {
        rollDice();
    }
}

//  arguments 

function name(nickname)
{
    console.log(`Hi ${nickname}`);
}


// multiple arguments
// paramater order matters!!
function sum(x, y)
{
    console.log(x + y);
}

// Return keyword
// a function must return a value so we can use it in our code
// the returned value can then be stored into a variable and used 

// when the code hits a 'return' the function is stopped. nothing is ran after the return
function add(q, w)
{
    return q + w;
}


// Function Challenge 1:

function isValidPassword(password, username)
{
    const pass = password;
    const user = username;

    if (pass.length < 8) {
        return false;
    }
    if (pass.indexOf(' ') !== -1) {
        return false;
    }
    if (pass.indexOf(user) !== -1) {
        return false;
    }
    return true;
}


// Function Challenge 2: 

function findAvg(arr) {

    let total = 0;

    for (let num of arr) {
        total += num;
    }
    return total / arr.length;
}




// Function challenge 3:

function isPangram(val) {

    let checked = val.toLowerCase();

    for (let char of 'abcdefghijklmnopqurstuvwxyz') {
        if (!checked.includes(char)) {
            return false;
        }
    }
    return checked;
}


// Function Challenge 4

function pick(arr)
{
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard() {

    const values = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A'
    ];

    const valIdx = pick(values);
    
    const suits = [
        'hearts',
        'clubs',
        'spades',
        'diamonds'
    ];

    const suitIdx = pick(suits);

    return { value: valIdx, Suit: suitIdx };
}


// Function Scope

//  const let and var are only available inside the function
// variables inside the function cannot be accessed or changed outside of the function scope 
function lol()
{
    let age = 12;
    const person = 'tom';
    var colour = 'green'

    console.log(colour);
}

// console.log(age);    -> this is outside the function so it is not available


// variables can be called the same thing in different functions 

function something() {
    let age = 45;
    const person = 'Amy';
    var colour = 'blue';

    console.log(colour);
}



// Block Scope

// let and const are block scoped, so they cannot be accessed outside of the block.

// if (true) {
//     let animal = 'lion';
// }
// console.log(animal);
//
// animal will NOT be printed because it is outside the block.
// const will also not work.
//
// var WILL work though... var can be accessed outside of the block scope.



// Lexical scope 

function outer() {
    let movie = 'the shinning';

    function inner() {
        console.log(movie);
    }
    inner();
}

// variables defined in the 'outer' function are available in the 'inner' functions.
// The console.log(movie) will look to see if there is a variable defined in the inner function first and then it will look in the parent function if it can't find one. 
//
// Only works this way...  variables defined in the child function can not be accessed in the parent function.




// function Expressions
//
// functions that are stored in a variable.
//
// functions are just objects so can be passed around between other functions
const sumOf = function (x, y) {
    return x + y;
}
    

// Higher Order Functions.
//
// Functions that operate on/with other functions.
// They can:
//          - Accept other functions as arguments
//          - Return a function.
//
// functions can be stored in arrays or methods... this is how you create your own methods.
//

    function add(x,y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y
    }

    let divide = function (x, y) {
        return x / y
    }

    let multiply = function (x, y) {
        return x * y
    }

const operations = [
    add,
    subtract,
    divide,
    multiply
];

for (let func of operations) {
    let res = func(5, 5);
    console.log(res);
}


//Passing a functin as an argument
// calls another function three times
function callThreeTime(func) {
    func();
    func();
    func();
}

function hello() {
    console.log('hello there Mr!');
}

callThreeTime(hello);


// function calls another function however many times put for n
function callNTimes(func, n) {
    for (let i = 0; i < n; i++) {
        func(); 
    }

}


// Functions as Return values
//
// outter function acts as a factory that determines what happens in the inner function.

function multiplyBy(num) {
    return function (x) {
        return x * num
    }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);

// multiplyBy returns a function that multiplys its param by the param stated in the returned function. 
//
// the returned function is a function expression so needs to be saved to a variable. 
//
// that variable can then be called as a function with the 'x' param. 
//

function checkAge(x, y) {
    return function(num) {
        return num > x && num < y;
    }
}

let isChild = checkAge(0, 18);



// Callbacks
//
// a callback is the function that is passed as an argument. 
// functions that expect a function to be used as a param and then ran in the parent function is a callback! 
// very common in JS!

function isFunny(callback) {
    return function (name) {
        return `${name} is such a ${callback} person!`;
    }
}

const rabbit = isFunny('funny');


// 
// most callbacks are used by calling anonymous functions

// setTimeout(function () {
//     alert('this is anonymous');
// }, 3000)



// Hoisting
// 
// when a variable is not called before some action.. js will hoist the variable up.

// console.log(animal);
// var animal = 'lion';
//
// when using 'var' javascript will hoist the variable above the console.log.
//
//
// when using let and const.. javascript will NOT hoist the variable up.
//
//
// function statements/declarations can be initialised anywhere in the code and js will hosit them to the top of the file so they can be called anywhere.
//
//
// function expressions are NOT hoisted so they have to be called after the variable and function has been initialised.
