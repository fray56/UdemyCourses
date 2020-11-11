//Foreach
//
// foreach is used to itertate over an array
// pass in a function the the forEAch method.
//
//
const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach(function (n) {
    console.log(n*2);
})

// a pre wrote function can be passed into the foreach method.
function printTriple(num) {
    console.log(num*3);
}

numbers.forEach(printTriple);


// using foreach on an object
//
const books = [
    {
        title: 'Lord of the rings',
        pages: 1234
    },
    {
        title: 'the stand',
        pages: 3234
    },
    {
        title: 'lord of the flies',
        pages: 231
    },
    {
        title: 'the shinning',
        pages: 874
    }
];

books.forEach(function (bk) {
    console.log(bk.title.toUpperCase());
})

// a second param can be added to show the index of the object.

books.forEach(function (bk, idx) {
    console.log(idx, bk.title.toUpperCase());
})

//
// When to use a foreach over a normal for of loop
//
// when using a for of loop you can not get the index of an object....
//
// when using a foreach loop you can get the index by passing in a second paramater on the function.

// ***********************************************************

//
//
//Map 
//
// Map creates a new array with the results of calling a callback function..
// it loops over each item in an array.
//
// map doesn't care what the value is in the array it just creates a new array from the callback function 
//
// the new array created by the map method should be saved to a new variable.
// Always have to return a value in the map function! 

const num2 = [20, 21, 22, 23, 24, 25, 26, 27, 28];

const doubles = num2.map(function (n) {
    return n * 2
})


const evenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 
const showEven = evenNum.map(function (e) {
        return {
            value: e,
            isEven: e % 2 === 0
        };
})


//
//
// Arrow functions
//
// same as usual functions but the syntax is different and quicker to write.
//
//
//
// no 'function' word is written.. => is used instead.
const sumName = (x) => {
    return x * x
}

//
// if there is only 1 param then the () are optionial..
// 
const option = y => {
    return y * y;
}

//
// if there is no param, then the () must be used.
//
const must = () => {
    console.log('no params');
}

//
// when there is only one return value..
// the return keyword is not needed
//
//
const option123 = y => {
     y * y;
}

//
// can put an arrow function on a single line if only returning 1 value.

const squareNum = n => n * n;

// not always the best practice.  Only use on single return values and short functions 


//
//
//
// array.find()
//
//
// has to return true or false.
// finds the first instance of a value in an array.
// loops through the array and checks each item.
// 
movies = ['the matrix', 'batman', 'avangers', 'robin hood', 'spiderman']

const movie = movies.find(movie => {
    return movie.includes('batman');
})

// once the value is found the loop and function is stopped and the value is returned. 
//
// using arrow function for cleaner and easier syntax

const books123 = [
    {
        title: 'good omens',
        authors: ['terry prachett', 'neil gaiman'],
        rating: 4.25
    },
    {
        title: 'bone collector',
        authors: ['jeff smith'],
        rating: 4.45
    },
    {
        title: 'american gods',
        authors: ['neil gaiman'],
        rating: 4.11
    },
    {
        title: 'a gentleman in moscow',
        authors: ['amor towles'],
        rating: 4.36
    },
]

const goodBook = books123.find(b => {
    return b.rating > 4.25;
})
const author = books123.find(a => (
    a.authors.includes('neil gaiman')
));

//
// useful in real world apps...  creating a function to delete a post or comment.
// deletePost(2)  delete post function.. the ID of the user or post is passed in.
//
 // inside deletePost the function uses p => post.find to find that post then deletes from database.




 //
 // Filter
 //
// expects a callback function to be used.
//
// creates a new array from the results that pass the conditional inside the callback function.
//
// the function returns a boolean result.
//
//loops through each item in an array.
//
// save results to a variable.
//
// write a callback that returns true or false... if the result is true the item gets passed into the new array.
//
//

const numFilter = [1, 2, 3, 45, 234, 123, 123, 564, 5675, 234, 5647, 234]

const evens = numFilter.filter(f => {
   return f % 2 === 0;
})
const oddd = numFilter.filter(g => (
    g % 2 === 1
))

//
// used in real world apps to find certain items in a list..  eg, book store... user can filter the listings to only show certain category or rating of books.
//
// a filter callback function is used to filter through the books.
//



//
//
// Some & Every
//
// Every -
//
// returns a boolean
//
// tests whether all elements in the array passes a conditional 
//
const animals = ['dogs', 'cat', 'bats', 'rat', 'pig']

const all3 = animals.every(a => a.length === 3);

// returns true or false.


//
// Some -
//
// works the same as Every but only Some of the results have to be true.
// As long as one result in the loop returns true then the function will return true! 

const some = animals.some(s => {
    return s.length > 3
})
//
// returns true because at least one of the items has more than 3 characters.




//
// Sort (part 2)
//
// when using sort, we pass a compare function that has 2 params.
//
// sort DOES mutate the original array.
// it does NOT create a new array.
//
const prices = [34.99, 345, 12.99, 999.59, 679812, 12, 35.543]

const sort1 = prices.sort((a, b) => a - b);

// sort runs through each item and compares the two. a - b
//
// a         b
// 34.99    345

// the function looks at a and subtracts b.... if there is a negative number it puts a before b
// 
// if there is a positive number then it puts b before a.
//
// if the result is 0 then it treats the two items as equal.
//
// thos sorts and orders the array of numbers in lowerest to highest order. ASC order
//

// to sort in DESC order (hightest to lowest)
const sort2 = prices.sort((a, b) => b - a);

// this reverses the sort and sorts the items in desc order.


//
//
// sorting an object

const bookObj = [
    {
        title: 'wind and willows',
        author: 'some bloke',
        rating: 3.54
    },
     {
        title: 'carrie',
        author: 'some bloke',
        rating: 3.12
    },
      {
        title: 'terminator',
        author: 'some bloke',
        rating: 5.32
    },
       {
        title: 'fire and ice',
        author: 'some bloke',
        rating: 3.14
    },
]

const bookSort = bookObj.sort((a, b) => a.rating - b.rating);
// when sorting through an anrray... cant just compare a and b... have to target the key and value in the object you want to sort.




//
//
// Reduce
//

// Executes a reducer function on each element of an array until there is a single value.
// 
// expects a callback function, that has at least two paramaters.
// first param is the accumulator -> the second param is the current value. 
//
//
// example

const reduceNumbers = [2, 45, 5, 2, 5, 2, 4,]

const reduced = reduceNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
// reduce will iterate over the array for each value.
//
// first time the accumulator is the first value... 2
//
// cuurentValue is the second number that the function -> accumulator + currentValue is using.
//
// so accumulator is 2 and currentValue is 45.. = 47
//
// second loop -> accumulator = 47  
//
// second loop -> currentValue = 5
//
// third loop -> accumulator = 52 
// 
// third loop -> currentValue = 2 
//
// etc etc until there is only one value left.


// can be used for other things, not just summing an array of numbers! 

// can be used to find the highest num in an array.

const maxNum = [12, 43, 6, 23, 65, 34, 23, 67, 67, 23, 57, 123]

const findMax = maxNum.reduce((accum, currVal) => {
    if (currVal > accum) return currVal;
    return accum;
})

// same priciple as above... 
// if currval is higher than accum then it returns currval which is used as accum for the next run through.
// if not then accum is carried over and used for the next loop through.
//
// can use the Math.max method in the callback function to find the highest value.

const findMax2 = maxNum.reduce((accum, currVal) => {
    return Math.max(accum, currVal);
})

const findMin = maxNum.reduce((accum, currVal) => {
    return Math.min(accum, currVal);
})

//
// can add a starting value to reduce by adding a value as a param after the callback function.

const startingVal = maxNum.reduce((accum, currVal) => {
    return accum + currVal;
}, 100)

// the 100 means the accum will start at 100 and add the first array item to it.


//
// using reduce with objects.
//

const votes = ['y', 'n', 'y', 'y', 'n', 'y', 'y', 'y', 'n', 'y', 'y', 'n', 'y', 'y', 'y', 'n', 'y', 'y', 'n', 'y', 'y']

const tally = votes.reduce((vote, currVal) => {
    if (vote[currVal]) {
        vote[currVal]++
    } else {
         vote[currVal] = 1
    }
    return vote;
}, {})