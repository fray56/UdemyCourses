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


