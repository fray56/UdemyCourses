//
// Default function paramaters
//
// new js syntax lets you add a default paramater inside the function ()
//
function multiply(x, y = 1) {
    return x * y;
}

// inside the () -> the ' = 1 ' after the y param sets a default argument if the user doesnt insert two params. 


// can pass in any default argument.

function greet(name, greeting = 'Hello there') {
    console.log(`${greeting}, ${name}`);
}

const arr = (x, y = [1, 2, 3]) => {
    return console.log(x, y);
}

// can add more than one default

const more = (x = 1, y = 3) => (x + y);

// note...
// can NOT make the first paramater a default and then have none defaulted params after it..
// const willNotWork = (a = 1, y) => (a + y);



//
// Spread for Function calls
//
// spread expands an iterable into another destintaion.  
//
//  the spread syntax is always ... (three dots) but it used differently for each case.
//
// spread function calls..
//
//  expands an array, string, etc into a list of argumnts.

Math.max(3, 5, 2, 1, 6, 3, 4, 6, 8, 9, 32, 43, 64);

// treats each number as a seperate argument.

Math.max([3, 4, 12, 65, 12, 5, 1]);
// doesnt work because it doesn't look at each number as a seperate number.

const nums = [2, 34, 435, 6, 23, 67, 12, 78, 2]

const findMax = Math.max(...nums);
// spread will take each item in the nums array and 'spread' them out into seperate numbers so the Math.max function will work.


// spread is used to spread an iterable into a function as seperate arguments.

const colours = ['red', 'green', 'yellow', 'blue']

function giveMeFour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}

// giveMeFour(colours)  -> this wouldn't work, its only passing in 1 argument so b, c, d, would be undefined.

// giveMeFour(...colours) -> the spread operater spreads the colours array over the 4 seperate arguments so the function works correcty.



//
// using spread with array literals
//
// same as .concat -> just easier syntax

const nums1 = [1, 2, 3, 4]
const nums2 = [5, 6, 7, 8]

const nums3 = [...nums1, ...nums2]

// spread can be used to join two arrays together to form a new array destintaion.
// doesn't affect the original arrays.
// order is determined by the order they are put in the array.

// can add signle items as well as the spread.

const nums4 = [0, ...nums1, ...nums2, 9, 10, 11, 12]



//
// spread into object literalls
//
// copies data from one object to another.
// can add to data in an existing object
//

const cats = {
    legs: 4,
    family: 'felidae'
};
const dogs = {
    fromFamily: 'caninae',
    furry: true
}

const pets = {
    ...cats,
    ...dogs,
    cute: true,
    lotsOfOwners: 'yes',
    eyes: 2
}

// NOTE: when spreading two objects into 1 new object.... the same key:value pairs will override each other.

// objects can only be spread into other objects... 

// objects cannot be spread into an array

// arrays CAN be spread into objects!



//
// REST
//
// similar to spread but used differently.
//
// used in a function to pass in as many arguments as needed..
//
// collects each argument and collects them into an array to be used by the function.

function rest(...nums) {
   return nums.reduce((max, currVal) => {
        return max + currVal
    })
}

// the name of the rest argument (..nums) is the name of the array that is created.
//
// rest doesnt affect any other arguments in the function.

function fullName(first, last, ...titles) {
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}

// order matters!
//
// cannot not put two rest operators in the function... this is because the rest operater takes any remaining arguments so there isn't anything for the second rest to take!
//
// works with arrow functions!





//
// Destructuring
//
// short easy syntax to 'unpack' or take parts of an array or object and store them into a variable.
//
// Arrays

const results = [
    'rooney',
    'beckham',
    'ronaldo',
    'giggs',
    'cantona'
]

const [first, second, third] = results;

// order matters.
// looks inside of results array and take the first three elements and stores them in the three variables.

// can use the rest operater for store the rest of the elements
const [gold, silver, bronze, ...others] = results;

//
// to skip and target specific elements in the array. 
// add commas to the variables leaving the elements place blank.
// 
const [, , two, , four] = results;


//
// destructuring objects
//
// same priciple as in arrays but when destructuring from an object you use the key of the item you want to extract.
const player = {
    person: 'rooney',
    team: 'derby'
}

const { person } = player;


// can change the name of the variable when destructuring from an object.
// start with the key and add the name of the variable you want to save it in for the value.
const { team: playsFor } = player;


// nested destructuring in objects
//
// same as arrays. make a variable with the [] symbols and then add the {} with the item inside you want to unpack.
const players = [
    {
        name: 'rooney',
        team: 'Derby'
    },
    {
        name: 'ronaldo',
        team: 'juve'
    },
    {
        name: 'pogba',
        team: 'united'
    }
]
const [{ name },{team}, {name: playerOne}] = players;

//
// destructing in a function 
//
// works with any type of function

const personItem = {
    first: 'john',
    last: 'smith',
    age: 21,
    job: 'milkman',
    gender: 'male'
}

function print({ first, last, gender }) {
    console.log(`the person is called ${first} ${last} and they are a ${gender}`);
}