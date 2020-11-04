// For Loops


// In a for loop... the first argument defines the starting point
// Second argument is the condition, how many time should the loop run
// Third argument is what change to the value each time the loop is ran.

//   start point        stop at     add 1 to i each time    
for(let i = 1;          i <= 10;    i++ ) {
    console.log(i);
}


// For loops in an Array

const examResults = [
    12,
    45,
    34,
    78,
    43,
    23,
    56,
    23
];

for (let i = 0; i < examResults.length; i++) {
    console.log(i, examResults[i]);
}

// For loop through an object

const myStudents = [
    {
        firstName: 'Tom',
        grade: 66
    },
    {
        firstName: 'Amy',
        grade: 78
    },
    {
        firstName: 'Jo',
        grade: 78
    }
];

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    console.log(`${student.firstName} got a grade of ${student.grade}`);
}


// Nested for loops

const gameBoard = [
    [54, 32, 56, 19],
    [32, 43, 23, 54],
    [92, 32, 34, 12],
    [99, 12, 34, 76]
];

totalScore = 0;

for (i = 0; i < gameBoard.length; i++) {
    const row = gameBoard[i];

    for (j = 0; j < row.length; j++) {
        console.log(totalScore += row[j]);
    }
}



// While Loops!

let k = 1;
while(k < 20) {
    console.log(k);
    k++;
}

// Guess the number Game

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while( guess !== target ) {
    console.log(guess);
    guess = Math.floor(Math.random() * 10);
}
    console.log(`Target: ${target} - Guess: ${guess}`);

// Break keyword
// use the break keyword in a while loop to stop the loop from running.
// while ( true ) {
//     if(target === guess) break;
//     console.log(guess);
//     guess = Math.floor(Math.random() * 10)
// }
// console.log(`Target: ${target} - Guess: ${guess}`);


// For 'of' loop

// used to loop through the elements in an array or anything that is iterable....  array, string etc!

const subreddits = ['soccer', 'jokes', 'wine', 'funny', 'info', 'gifs'];

for (let sub of subreddits) {
    console.log(sub);
}


// For IN Loop
// used to loop through an object

const winnings = {
    'football': 12000,
    'skyTV': 343121,
    'snooker': 32442
}

for( let prop in winnings) {
    console.log(prop);
    console.log(winnings[prop]); // this gets and loops through the value in the object. 
}