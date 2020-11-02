// Example

// if statement is long and has a lot of repeated code!

// let day = 4;

// if(day === 1) {
//     console.log('Monday');
// } 
// else if(day === 2) {
//     console.log('Tuesday');
// }
// else if(day === 3) {
//     console.log('Wednesday');
// }
// else if(day === 4) {
//     console.log('Thursday');
// }
// else if(day === 5) {
//     console.log('Friday');
// }
// else if(day === 6) {
//     console.log('Saturday');
// }
// else if(day === 7) {
//     console.log('Sunday');
// }
// else {
//     console.log("This isn't a day!");
// }


// Switch Statement

// Good if you want to print out a list of something and start from a particular point in the list

// Must use the 'break' keyword after logic to stop the cases after being ran.

// default keyword is used as the 'else' statement

let day = 3;

switch (day) {
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4: 
        console.log('Thursday');
        break;
    case 5: 
        console.log('Friday');
        break;
    case 6: 
        console.log('Saturday');
        break;
    case 7: 
        console.log('Sunday');
        break;
    default: 
        console.log('This is not a day!');
    }