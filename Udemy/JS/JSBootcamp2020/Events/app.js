// try and click me button game! 
const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
})

btn.addEventListener('click', function () {
    btn.innerText = 'You Got Me!';
    document.body.style.backgroundColor = 'green';
})



// adding event listeners to multiple elements
//
// we can use the keyword this when assigning multiple event listeners to elements. 
// the keyword this will be scoped to the loop or the element that it is inside. 
// remember to not use an arrow function...

const boxes = document.querySelector('#boxes');

const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'purple',
    'violet'
];

//function that the event listener calls
// 'this' can be used because it is scoped to box variable that is inside the loop
// box is a loop that for each color a div is created and the background is set to each item in the colors array 
// h2 must be called inside the changeColour function so it can be accessed by this.
const changeColour = function () {
    const h2 = document.querySelector('h2');
    h2.style.color = this.style.backgroundColor
}

for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    boxes.appendChild(box);
    box.addEventListener('click', changeColour);
}




const conatiner = document.querySelector('#event');
const cardColors = [
    'red',
    'green',
    'blue',
    'orange',
    'purple',
    'yellow',
    'violet',
    'brown',
    'pink',

];
const change = function () {
    
    this.style.backgroundColor = 'black';
    
}
for (let color of cardColors) {
    const card = document.createElement('div');
    card.style.backgroundColor = color;
    card.classList.add('card');
    conatiner.appendChild(card);
    card.addEventListener('click', change)
}





// event object.
// we can add an argument to the addEventListener callback function (e) (event) (evt)
//this will give us access to the event object.

// using keypress will only show up when something shows in the input field. this is better to use 
// keyup and keydown doesnt register if shift, CTRL, backspace is pressed becausenot in the input field has changed.

// selects input field
const newItem = document.querySelector('#newItem');

newItem.addEventListener('keypress', function (evt) {
    // check to see if the enter key has been press
    if (evt.key === 'Enter') {
        // check to see if the input is empty when the enter key is press... if it is then return early and nothing is appended to the view.
        if (!this.value) return
        // grab value from input and save to variable 
        const item = this.value;
        // crate a li element
        const newItemList = document.createElement('li');
        // add the value from the input field to the new created li
        newItemList.innerText = item;
        // select the ul 
        const itemList = document.querySelector('#itemList');
        // append the new li to the ul
        itemList.appendChild(newItemList);
        // clear the input field after the Enter key has been pressed and the value has been appended to the ul
        this.value = '';
    }
})



// forms and prevent default
//
// when a form is submitted. 
// use the preventDefault() to stop the form beinbg submitted and sent to a db
//
// we can grab the values from the form this way and use the data.

const form = document.querySelector('#form');
const name = document.querySelector('#name')
const check = document.querySelector('#check')
const select = document.querySelector('#select')

form.addEventListener('submit', function (evt) {
    // prevent the form from submitting
    evt.preventDefault();
    // get value from text input
    console.log(`Text Input: ${name.value}`);
    // get checkbox status
    console.log(`Checkbox: ${check.checked}`);
    // get selected option
    console.log(`Option: ${select.value}`);

})

// this grabs the values from the form 
// we can now send the info to a server or render it onto the page 




// input and change events 
//
// creating a data structure and keeping it update in real time.
//
// having an input field and as the user types something into it...it updates something on the screen in real time.

// the input addEventListener will update the event.object as soon as there is any update. 
// the change addEventListener works the same but only updates the text fields once the user loses focus on the input or presses the Enter key.

// we can store the value inside an object 

const formData = {};

name.addEventListener('input', (evt) => {
    formData['imput'] = evt.target.value
});

select.addEventListener('input', (evt) => {
    formData['choice'] = evt.target.value;
})

check.addEventListener('input', (evt) => {
    formData['checked'] = evt.target.checked;
})



