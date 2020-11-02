// Call an Array

let topFilms = [];


// Push and Pop 

// Push adds array item to the end of array
topFilms.push('Top Gun');

// Pop removes the last array item 
topFilms.pop();


// shift and unshift

// unshift adds item to start of array
topFilms.unshift('Back to the future');

// // shift removes the first item in array
topFilms.shift();



// concat arrays together

let fruit = ['apple', 'pears', 'grapes'];
let veg = ['carrots', 'peas', 'spinach'];
let meat = ['chicken', 'beef', 'pork'];

let allFood = fruit.concat(veg, meat);




// includes

let food = [
    'apples',
    'fish',
    'dog food',
    'cat food',
    'shrimp',
    'chips'
];

food.includes('apples');  // = true
food.includes('pork chops');  // = false



// indexOf

food.indexOf('apples');  // 0
food.indexOf('cat food');  // 3
food.indexOf('pork chop');  // -1 (false)




// join

let letters = ['a', 'b', 'c', 'd', 'f', 'g'];

// whatever is in the ('') will be what joins the letters 
letters.join('.')

// Reverse
// reverses the order of the array
letters.reverse();




// Slice
// Allows you to take a portion of an array and make a new array with that data

let animals = [
    'bear',
    'cat',
    'horse',
    'fish',
    'whale',
    'eel'
];

// the second index must be the one AFTER the last one you want to include.
//  no second argument tells the array to slice every item until the last
// use a negative number (-3) to slice items from an index to the start of the array
let swimmers = animals.splice(3, 6);
let walkers = animals.splice(0, 3);





// splice
// adds items to the middle on an Array
// also can delete items from the middle of the array

let countries = [
    'uk',
    'france',
    'denmark',
    'germany',
    'holland'
];

//  .splice takes 3 arguments( index you want to start,  how many items you want to delete(optional),  what you want to insert(optional))

countries.splice(2, 0, 'italy');







// Sort
// sorts the array into an order.default is alphabetical for a String

// the array is mutated into a new array after being sorted

// when using an .sort...  a function is usually passed as the argument to tell the array how to be sorted.

let colours = [
    'blue',
    'white',
    'green',
    'purple',
    'black'
];

colours.sort();