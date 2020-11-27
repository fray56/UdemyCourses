// Async keyword
//
// the async keyword is written infron of the function call.
// this will make the funtion behave differently.
// it will make the function return a promise
//
// its just nice shorter syntax than manually writing a new promise with resolve and reject methods.
//
// 
async function hello() {
    return 'Hello there'
};
// the hello() function will return a function that will be resolved
// and the value of the promise will be 'hello there'

// we can chain .then methods onto async functions.
// we add a argument to the the .then so we can have access 
// to the return value in the promise call.

hello().then((data) => {
    console.log(`This was called using async functions and the data says: ${data}`);
})


// when using async the promise will always be resolved.
// if we want the promise to be rejected we can throw and new exception.
// we can do this by useing the 'throw' keyword
async function add(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw 'X and Y must be a number!';
    }
    return x + y;
}

// we can chain on .then and .catch methods as well
// as long as we always return a promise.

add('e', 't')
.then(val => {
    console.log(`This is return with ${val}`);
})
.catch(err => {
    // we have access to the throw exception we made in the function call.
    console.log(`this has failed because ${err}`);
})



//
//
// The Await keyword
// can only be used inside a async function
// when we make an async function call.
// we can use the await keyword to make the any code written after the call not run until the promise is resloved 
// we dont have to use .then method, 
// save the await return value to a variable so we can have access to the data 

// call an async function
async function getPeople() {
    // use the await keyword
    // this makes the code wait until the api call is resolved
    // we save it to a vairiable so we can access the data
    const res = await axios.get('https://swapi.dev/api/people/');
    //we can use the data straight away becasue the await keyword wont let this log run until the promise has been resolved
    console.log(res.data);
}

getPeople();

//
// error handling
//
// there are two ways we can catch erros when using await

async function getPlanets() {
    const res = await axios.get('https://swapi.dev/api/planets/');
    console.log(res.data);
}
// this approach is good for a catch all if there is multiple layers of .thens and functions
//this will catch any erros.
getPlanets().catch(err => {
    console.log(`This did not work ${err}`);
})


// This is a specific way to catch any erros that are just from this function
// good if its just calling one place and if it doesnt work it throws an error
// wont look outside of this function
async function getMorePlanets() {
    try{
        const res = await axios.get('https://swapi.dev/api/people/thiswontwork');
        console.log(res.data);
    }
    catch(e) {
        console.log(`this is an ${e}`);
    }
}
getMorePlanets();