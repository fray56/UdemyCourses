// computer properties
//
// using objects with dynamic key and value pairs.
//
// to use a dynamic key, wrap the variable for the key in square brackets.

const role = 'host';
const person1 = 'jools holland';
const role2 = 'director';
const person2 = 'james cameron';

const jobs = {
    [role]: person1,
    [role2]: person2
}

// this takes the variable role and uses whatever it is set to as the key in the object.

// can be used to set the key and values as non-declared variables as well..

const jobs2 = {
    [role]: person1,
    [role2]: person2,
    [1 + 2 + 3]: 'six',
    [10*3]: 'thirty'
}
// can use square brackets to create key value pairs, with logic inside.

// adding computed properites to functions

const addProp = (obj, k, v) => {
    return {
        ...obj,
        [k]: v
    }
}

addProp(jobs, 'newKey', 'this is the new value');
// function spreads the jobs object and adds the newKey and value to the object using computed properties


//adding methods to objects.
//
// when we store a function as the value in an object.. these are called methods.
// used alot in js.
// methods are called by using the dot notation. (.... 'hello'.toUpperCASE() ....)

const math = {
    add: function (x, y) {
        return x + y;
    },
    multiply: function (x, y) {
        return x * y;
    },
    subtract: function (x, y) {
        return x - y;
    }
}

// we make methods in objects so often there is a shortened syntax to making them
// dont have to declare a key. a function can be used, the name of the function will be the key and the function itself will be the value.
const auth = {
    login() {
        console.log('you are logged in');
    },
    logout() {
        console.log('you have logged out');
    }
}


//
//
// the keyword THIS
//
//
// this represents what the exicutional scope is..
//
// using this in a regular function will show that 'this' is in the global scope
//
// using this inside an object will show that 'this' is inside the object scope.
// depending on how you call the function though will determine what scope it shows!

function sayHi() {
    console.log('hello there');
    console.log(this);
}
// this will return the global scope. its saved to the 'window' object which is the global scope for the browser.

const person = {
    first: 'Tom',
    last: 'Jones',
    age: 70,
    fullName() {
        return `${this.first} ${this.last}`;
    },
// this is scoped inside the object, so will show the first and last values defined in the object.
    

// we can set another method inside the object and then access the fullName function from inside the new method.
    // must use the keyword this though. this is because this will access the object scope and look inside the whole object for the function fullName.
    // if this is not used then it will fail because it is only looking inside that function.

    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName} is a person who can sing!`);
    }
    // dont need to use this in the printBio console log.. this is because its using the variable above which is grabbing the fullName function from above.
}

// this can change scope depending on how its called.
// good rule of thumb is: 
// if there is a . and something to the left of the method/function being called then this will be inside the scope of the object.
// if the function is called outside of the method and is just called without anything to the left then this will be global scope.

// ARROW functions do NOT work with this!!! 
// do not use them when using this keyword! 



// exercise.


const phrases = {
    phrases: [
        'YOLO',
        'Totes!',
        'If you know you know',
        'Best Life',
        'Cant even',
        'amazeballs'
    ],

    pickPhrase() {
        const { phrases } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },

    // doesn't work! gets error!
    startLoop() {
        setInterval(function () {
            console.log(this.pickPhrase());
        }, 2000)
        // Gets an error because 'this' is set to the global state..
        // because setInterval is calling the pickPhrase function. which is set to the global window scope so 'this' becomes global scoped.
    },

    // to avoid this error, using an arrow function inside the setinerval function will stop the 'this' keyword from getting a new scope.

    start() {
        setInterval(() => {
            console.log(this.pickPhrase());
        }, 3000)
        // this is still scoped to the phrases object because inside an arrow function this doesnt get a new scope.
    }

        // arrow functions are handy to use when you dont want 'this' to have a new scope.
    
    // but not great to use when creating methods because you dont have access to using this.
    
}