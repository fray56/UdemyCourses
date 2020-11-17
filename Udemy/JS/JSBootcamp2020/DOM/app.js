// select element by the ID
const text = document.getElementById('text');
const btn = document.getElementById('btn');

// select elements by the tag name
// selects all elements on the page with that tag name. 
const img = document.getElementsByTagName('img');
// when selecting an element by the tag name it returns a html collection.
// looks like an array and has some array like features.
// but it is NOT an array! 
// can use [2] to find the item index
// can use .length to find the length.
// can not use methods.

// to turn it into an array, we can use spread to spread the items into a new array.

// const tags = [...img]
// this will spread the img tags into a new array called tags.


// select elements by class name;
const list = document.getElementsByClassName('list');
const listItem = document.getElementsByClassName('list-item');

// to get elements from within a ul
//first select the ul
// then get elements inside the ul
//have to select the index with []
const ul = document.getElementsByTagName('ul')[0];
const li = ul.getElementsByClassName('list-item');


//using query selector
// able to select all types of elements
// use the css name to select element.
// class -> .text 
// tag -> 'img'
// id -> #btn

//query selector selects the first element of the type
// query selector ALL selects all types of selected elements on the page

const query = document.querySelector('#img')
const queryAll = document.querySelectorAll('.list-item');

//menu slides out from right
btn.addEventListener('click', function () {
    query.classList.toggle('slide');
})



// InnerText - textContent
// shows the content of the selected element as a string

const showText = text.innerText;
// innerText will just show the content of the element as a string. no formatting.

const showContent = text.textContent;
// show Content will down the content of the element but will show any formatting that might be there. 


// InnerHTML
// returns the text and all html markup.
const form = document.querySelector('#form');
const html = form.innerHTML;

// can use innerHTML to change the html of the element. 
// have to write it as a string 

// const changeHTML = form.innerHTML = '<ul><li>hello new list</li></ul>';



// value, src, href, etc

// able to select specific attributes in a element.
// value in a form input

const inputs = document.querySelectorAll('input');

// can access the elements attributes with a method after selceting the element.
// inputs[2].value



// getAttribute
//
// getAttribute selects an attribute from an element that can then be changed.
//to select the attribute, select the element and pass in the attribute using a string.

const range = document.querySelector('input[type="range"]');

// getAttribute just returns the value of the attribute
const getRange = range.getAttribute('step');

//setAttribute
// takes 2 arguments
// 1st argument is the name of the attribute you want to target
// 2nd argument is the new vlaue you want to change the attribute to

const setRange = range.setAttribute('step', 50);

// can use set attribute to change the type of input 

const checked = document.querySelector('input[type="checkbox"]');
// use the 'type' as the first argument to change the type attribute
const changeChecked = checked.setAttribute('type', 'radio');




// finding the parent element 

const firstLi = document.querySelector('li');

// then we can use..   firstLi.parentElement to find the element of firstLi


// finding children of an element

const firstUl = document.querySelector('ul');

// to find the children, use the children method.

// firstUl.children    this finds any child elements to firstUl



// find siblings to the element

// firstLi.nextElementSibling

//can chain them together to find next, previous siblings etc





// change multiple elements

const allLis = document.querySelectorAll('li');

for (let li of allLis) {
    console.log(li.innerText);
}

// run a loop over each item and change attributes





// altering styles with js 
// can only change values of styles.... cant return what the style is.
const h2 = document.querySelector('h2');

h2.style.color = 'blue';
h2.style.fontSize = '40px';


// when changing the styles using js it sets an inline style which will always overrule a class bases style.
const listColors = document.querySelectorAll('.list li');
const liColors = ['red', 'blue', 'green'];

listColors.forEach((li, i) => {
    const colors = liColors[i];
    li.style.color = colors;
})




// get computed styles.

//
// use getComputedStyles to return the value of elements class based styles.

const h2Styles = document.querySelector('h2');

//  getComputedStyle(h2Styles).color    returns the css class set styles




// creating elements
//
// create a new html element through js 

const newH2 = document.createElement('h2');
// this is creates a representation of the element it doesnt appear on the page
// can add text to the element
newH2.innerText = 'I am a new element';

// to render the new element to the dom we need to append it 

const section = document.querySelector('section');

// this appends the new h2 to the section we selected above as a child element.
section.appendChild(newH2);
// when we append something as a child it will go to the end of the parent if there is elements already in it.

//creates new img element
const newImg = document.createElement('img');
//sets the src for the new img
newImg.src = 'https://images.unsplash.com/photo-1605274280779-a4732e176f4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';
// appends it to the section... where it goes to the end of the section because there is a h2 already in there
section.appendChild(newImg);


// use inserBefore to append something before a selected element.

// select parent element
const paragraphs = document.querySelector('.paragraphs');
// select element that the new created element will append before
const para = document.querySelector('.para');

// create new element
const newH3 = document.createElement('h3');
newH3.innerText = 'I am a new heading!!!!';

// append new element 
// inserBefore needs two arguments. 1st -> the new element you have created...  2nd -> the element the new created element is appending before.
paragraphs.insertBefore(newH3, para);


// to append multiple elements 
// can use append.

section.append(newH2, newH3);




// use removeChild to remove a child element from a parent
// call removeChild on the parent and then pass the element to be removed as an argument 
section.removeChild(newH2);

