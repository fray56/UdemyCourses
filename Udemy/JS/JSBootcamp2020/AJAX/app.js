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

const myReq = new XMLHttpRequest();