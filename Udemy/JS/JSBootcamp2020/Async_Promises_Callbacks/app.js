// Callbacks
//
// When we make requests to api or run code that doesnt run straight away!
//
// the browser thakes the work off js and does it for us.
//
//
// js will run from top to bottom
// handles this log first, it doesnt have to wait for any other functions to run so js handles this and prints it to the browser
console.log('this is going to run firsty');
//
// gets to the next line of code
// doesn't need to wait for any functions so it prints this log second
console.log('this is going to run second');
// 
// gets to the third line of code
// js needs to wait for the timeout to run before it can return the function.
// it cant run any codse underneath it so it passes the job to the browser.
// the browser takes over the function and runs it for js.
// once the timeout it finished it passes the function back to js and tells it to run the code now.
setTimeout(function () {
    console.log('this is meant to be third');
}, 5000)
//
//js gets to this line while it is waiting for the timeout to finish.
// it doesnt need to wait for any other function so it can run now and print the console.log
console.log('haha, i got there first and printed third!');



// Callback Hell!!! 
//
// callbacks can be helpful can quickly become a nightmare to read and understand if we have to nest functions inside functions that call new functions it quickly becomes a nightmare to read and understand the code. 


//
// Introducing Promises.
//
// promises are a Javascript object that represents the evntual completeion or failure of some async code that needs to run.
//
// a Promise lets the code carry on running with the 'promise' of a value that will be returned.
//
// axios returns promises
//
// Promises are obkects that we attach callback functions to. 
// This means we don't have to nest a load of functions inside each other.
//
// to write a new promise we write:
//      new Promise()

// we pass in a function to the promise that has two callbacks....  resolve, reject.

// const newDog = new Promise((resolve, reject) => {

// })

// resolve and reject are functions and must be called insdide the promise so that it can be resolved or rejected.
// If resolve or reject is not called then the promise will remain in 'pending' status.

// Promises have a .then method that is used to run the code if the promise has been resolved.

const newDog = new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand > 0.5) {
        resolve();
    } else {
        reject();
    }
})
    .then(() => {
    console.log('yo yo yo');
    })
    .then(() => {
    console.log('more more more');
    })
    // use the .catch method for code if the promise is rejected and not resolved. only one can be used per promise.
    .catch(() => {
    console.log('nope, this did not work!');
})

// we use the .then to run any code after the promise is resolved.
// a function is passed into the .then() method and the code we want run is put inside there.
// we can chain any amount of .then methods together. they will run in order as long as the code inside them run and any promises are resolved.


// we can return a new promise inside a function so that we can call the promise when needed.
const makeNewPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const rand = Math.random();
            if (rand > 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 8000)
    })
};
// we can call the function above which will return the promise after 8 seconds that is set in the timeout call.
makeNewPromise()
    .then(() => {
        console.log('this promise was returned from a function');
    })
    .catch(() => {
        console.log('sorry this returned promise failed!');
    })



    // we can resolve or reject a promise with a value/
    //
    // we make a fake request to a url. 
    // if the url that is called in the function matches a url that is in the pages object then the promise is resolved.
    // if it is resolved then we return a status code and the information from the pages object.
    // 
    // we pass the data we want to be able to access into the resolve function. 
    // we can then pass a res argument into the .then method which gives us access to what was passes inside the resolve 
    // we do the same for the reject and catch method.
    //
    // used very commonly when we are trying to return dsata from a API
    //
    //the paramater we use in the .then/.catch method can be named whatever we want. 
    // it just gives us access to what was passed into the resolve and reject functions in the promise.  
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                
            const pages = {
                '/users': [
                    { id: 1, username: 'Tom' },
                    { id: 4, username: 'Amy' }
                ],
                '/about': 'This is the about page!'
            };
            const data = pages[url];

            if (data) {
                resolve({ status: 200, data });
            } else {
                reject({ status: 404 });
            }

        }, 3000);
    });
};

fakeRequest('/users')
    .then((res) => {
        console.log('Status Code:', res.status);
        console.log('Data', res.data);
    })
    .catch((res) => {
        console.log('Status:', res.status);
    });



fakeRequest('/about')
    .then((res) => {
        console.log('Status Code:', res.status);
        console.log('Data', res.data);
    })
    .catch((res) => {
        console.log('Status:', res.status);
    });

fakeRequest('/dogs')
    .then((res) => {
        console.log('Status Code:', res.status);
        console.log('Data', res.data);
    })
    .catch((res) => {
        console.log('Status:', res.status);
    });

    // when chaining .then methods.
    // we must return a promise in the above .then method so the next .then method can run.
    // each .then method will only run if the one before it has a promise that has been returned