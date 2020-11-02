const data = {
    totalSteps: 123454,
    totalMiles: 123.4,
    caloriesBurned: 5732,
    workouts: '3 of 5',
    hoursOfSleep: '2:13',

    100: 'start with a number',

    '12 sheep': 'this starts with a number and has a space!'
}

// to access the data in the object, use the key property:

console.log(data.totalMiles); 

// if using a number as the key name... javascript will turn it into a string so you can not access by using the . notation
console.log(data[100]);
// this looks in the object and looks if there is a string of 100. 


// if the key has a space in the name... it must be a String, and can be search by using the square bracket lookup
console.log(data['12 sheep']);


// use the square brackets if you want to find a value by using a variable
const colours = {
    red: '#123456',
    blue: '#654321',
    green: '#214356'
}

let myColour = 'blue';

console.log(colours[myColour]);


// Adding or updating properties in an object

// to update a property:
data.workouts = '5 of 5';

// to add a property:
data.snack = 'apple';