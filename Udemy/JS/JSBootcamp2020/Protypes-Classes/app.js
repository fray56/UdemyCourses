// Prototypes 
//
// They are a template objects that is assigned to all javascript elements thats has all the built in methods stored.
//
// If we create a new array.
//
// const arr = [1,2,3,4,5];
//
// if we look at arr in the console and use the .length method.
//
// arr.length
//
// arr doesnt have its own version of .length, 
// it has the __proto__ method which has all the methods that are built in and available to us.
//
// its a way of storing all the methods easily
//
// proto is a reference to the other built in methods that we can access.

// we can add to the prototypes,
// this will mean anything we add to the prototype will be available to that element
//
// we have added the 'grumpy' method to the String prototype
// so anytime we create a new string or have a string
// we can use the grumpoy method on it without having to create one for each string.
String.prototype.grumpy = () => {
    alert('Go Away!!');
}
// if we create a new string in the console and call the grumpy method... we should get the alert!

//
//Not a great idea to use this on projects because exiting


// Class and OOP
//
// Object Orianted Programming is the idea of organising your code into structured objects
// having blueprints of code that enables you to reuse code many times while only writing it once.
//
//
// factory functions
//
// factory functions are functions that act like a factory to build a javascript object.
// we can then add methods to that object so we can use them throughtout the app.
//
// has shortcomings and will run into problems using this way
// not very organised and can get messy if making lots of methods


// we make a function that will be our factory
function makeColor(r,g,b) {
    // create a variable that will be the object our factory will create and store the results inside
    const color = {};
    // assign the values passed in when we call the makeColor function
    // these will set the object keys and the value to what we pass in to the function
    color.r  = r;
    color.g = g;
    color.b = b;

    // we can create a method on the object that we can call.
   color.rgb = function() {
       // destructor r,g,b from the this key word so we can use it without typing this.
       const {r,g,b} = this;
       // the values of r,g,b are scoped to the makeColor function so we can access them
       // this returns a string that is a rgb value we can use
       return `rgb(${r}, ${g}, ${b})`;
   }


    // we return the object so we can use it else where
    return color;
}
//
// this is a commomnly used way
// better way is to use a constructor method approach
// when using a factory function is creates a seperatre method for each color object we create.
// its not stored on the prototype
//
// constructor functions adds the method to the prototype so every object we make has access to the methods on the prototype.
// much better approach to organising code.

// we create a function like above but we call the function by using the 'new' keyword.
// this tells javascript to create a new object that we have access to
// the 'this' keyword is automatically scoped to the new object behind the scenes
// 

function newColor(r,g,b) {
    // we can use this because this function gets called with the 'new' keyword so 'this' is scoped to the new object and not the global window.
    this.r = r;
    this.g = g;
    this.b = b;

    // we can create a method
    // using this 
    // becuase this is referencing the object we are inside
    //
    // this method is still NOT added to the prototype
    this.rgb = function () {
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    
}
// to add the method to the prototype, we can create the method outside of the newColor function
// not the best way. Can get messy!
// We can still use the this keyword here
// Have to use '.prototype.' when creating the method.
// This is a more efficient way to create objects with methods on them.... but not the best!
// 
// newColor.prototype.rgb = function() {
//     const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
// }

const nextColor = new newColor(32,100,88);



// Classes
//
// This is a much better way to creating objects and organising code
//
// Same as above but better syntax and easier and quicker to write.
//
// Dont have to add methods to the protoype manually... it does it for you
//

//we use the class key word to initialise the class object
// the name of the class is always with a capital letter.

class Color {
    // we always have to add the 'constructor()' function
    // this function is ran everytime a new Color is crerated.
    // the constructor function is like the factory function above
    // it builds the Color object for us.
    constructor(r,g,b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    // we can create methods and then call them inside other methods
    innerRGB() {
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`
    }
    rgb() {
        // we dont need to destructor r,g,b because we do that inside the innerRGB method.
        console.log(`this is ${name}`);
        //we can call the innderRGB method
        // have to use this keyword to call the method.
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a=1.0) {
        // calling the innerRGB method can be used on multiple methods inside the class.
        return `rgba(${this.innerRGB()}, ${a})`
    }
    hex() {
        const {r,g,b} = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
}
// when calling a new Color we have to use the 'new' keyword
const c1 = new Color(34,46,77, 'my colour');