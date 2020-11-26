// AJAX stands for 
// Asynchronous JavaScript and XML
//
// It is way for us to update the page content a user is on without having to reload the page and send a server request to reload the entire page.
// just a selected part of the page we need to update/change will be reloaded. 
//
// This makes the user experience much better because of performance and speed increaes.
//
// These days, we always use JSON instead of XML
//
// JSON is just a way of storing and transferring data between servers. 
// makes it very easy for us to extract data from it and use it on a web app.
//
// 
// XML
// is a markup language similar to HTML but cannot be used in the same way,
// it's used to transfer data.

/* <name>
    <first>Tom</first>
    <last>Fraser</last>
</name>
<email>tom@gmail.com</email>
<age>34</age> */
//
// XML uses tags to group the data you want to store.
// js can take the the sorted data and turn it into a javascript object!


//
//
//
// JSON
//
// Looks similar to js but its not the same and cant be used like js.
// It is a very eay way to store and transfer data between servers and for us to take that data and use it on a web app.
// It can hold arrys but not functions.
// The keys must be in "" and can only be a string.
//
// {
//     "name": [
//         "first": "tom",
//         "last": "fraser"
//     ],
//     "email": "tom@gmail.com",
//     "age": 34
// }


// XMLHttpRequest
//
//This is the old way, not used very often anymore
// Doesnt have to use XML 
// XHR is used most of the time and can retrieve any sort of data from api
// doesnt support promises

// Making XMLHttpRequest

// const myReq = new XMLHttpRequest();

// myReq.addEventListener('load', function() {
//     console.log('it worked!');
//     //to turn json into javascript we use the JSON.parse()
//     const res = JSON.parse(this.responseText);
//     console.log(res);
//     for (let planet of res.results) {
//         console.log(planet.name);
//     }
// });
// myReq.addEventListener('error', () => {
//     console.log('it did NOT work!');
// });

// myReq.open('get', 'https://swapi.dev/api/planets');
// myReq.send();
// console.log('request sent');





//
// Fetch
//
// Fetch is a much better way to make api calls.
// it supports promises so you only need one catch method for errors.
// its easier to chain on requests.
//
// not supported in IE 
//
// much easier and cleaner syntax


// use fetch to call the api
// first paramater is the url that you want to call to
// second paramter is an object that you can pass options to...  headers -> accept json
// fetch('https://thisexample.com', {
//     headers: { Accept: 'application/json' }
// })
    // fecth returns a promise so we use the .then method/
    // fetch makes a call to the url that is stated above and then returns a reponse object that we can use in the .then method to abstract the data.
    // we use 'res' paramater to access the data
    // .then((res) => {
        // if the response is not status code 200 then we console log 'problem and the status
        // if (res.status !== 200) {
        //     console.log('Problem', res.status);
            // we always have to return because we are using promises!
    //         return;
    //     }
        
    //     res.join().then((data) => {
    //         console.log(data);
    //     })
    //         .catch(function (err) {
    //         console.log('fetch error', err);
    //     })
    // })



// fetch makes the call to the api
// .then method will return the respone object.. we use a param in the .then method to access that data
fetch('https://swapi.dev/api/planets/').then((res) => {
    // the respose is a 'readable stream' - which is a way or returning huge amounts of data easily and 
    // quickly that we can access parts as and when we need it

    // the respone we get from the fetch call is not 'read to competion'
    // we can use the .json() method to read the respone fully.
    // but this is async and takes time if its a huge data set.

    // because this can take a while when accessing huge data sets.
    // .json() returns a promise.

     // we have to do another .then() because the .json() has returned a promise
        // we use the data param to access the data from the .json() promise
    if (!res.ok) {
            // we can log or show a error response using the .ok 
            // console.log('something is not right!', res.status);
        
            // if we throw a new error inside a .then it will trigger the .catch() method
            throw new Error(`Status Error Code: ${res.status}`);
    }
            return res.json();
    
})
    .then((data) => {
        console.log(data);
        for (let planet of data.results) {
            //loops through each result
            // beloew we are looking in data.results which is the response and then the results and looking for the first result [0]
            // then we are looking for the first result in films
            // and saving it to a const so we can use it in the next fetch call
            const filmURL = data.results[0].films[0];
            return fetch(filmURL);
        }
        // if we return a new fecth call we it returns a promise so we can chain on another .then method
    })
    // this is a chained on fetch call from above.
    // again we check that the response is 200, if not we throw a new error 
    
    .then((res) => {
        if (!res.ok) {
            throw new Error(`Error Code: ${res.status}`);
        }
        // if it passes we take the reponse a pass it through the json method and return it so we can chain another .then on/
        return res.json();
    })
    // we use data again so we can access the data from the 2nd fetch call.
    .then((data) => {
        // we are looking inside the data response and printing out the title.
        console.log(data.title);
        // print out the full data response.
        console.log(data);

        // look inside the data and fetch the 4th starship filmURL
        const ship = data.starships[4];

        return fetch(ship);
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`there is an error ${res.status}`)
        }
        return res.json();
    })
    .then((data) => {
        console.log(data.name);
    })
    
    
    
    // the way fetch is set up. if we just put a .catch() method like usual,
    // if fetch cant find the data and returns a 404, it wont use the .catch() method.

    // instead, we can check to see if the status of the .then response is ok/200 and if its 
    // we can throw a new error which will trigger the .catch method
   .catch((err) => {
            console.log('something has gone wrong');
            console.log(err);
   }) 
    




   // 
   // An even better way with AXIOS!
   //
   // third person library
   // makes making http calls really easy.
   //
   // npm install axios from the command line.
   //
   //
   // to make a get request we call axios.get 
   // this returns a promise like fetch
   // axios will parse the response into json for us though so we dont need to call the .json method.


const drinksList = document.querySelector('#drinksList');
   

axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    // axios will parse the resonse data into javascript for us
    // we don't need to make a check to see what the response status was to check for a 404
    // axios does this for us
    .then((res) => {
        //we can just access the data straight away
        for (let drink of res.data.drinks) {
            // save drink to variable
            const drinkItem = drink.strCategory;
            // create new li item
            const li = document.createElement('li');
            // add each drink result to the new li item
            const newDrinkItem = li.innerText = drinkItem;
            // append each li to the end of the ul
            drinksList.appendChild(li);
        }
    })
    // if there is a 404 or error, axios will automaticlly throw an error and run the catch method for us.
    .catch((err) => {
        console.log('Axios says NO!');
        console.log(err);
    })