// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// we can create a function outside of the react component and use it inside the component
function getButtonText() {
    return 'I am a button';
}

// Create a React Component
const App = () => {
    // always have to make sure there is something after the return keyword
    // will cause an error if we put the jsx on a new line.
    // if we want to put the jsx onto a new line we can wrap the jsx in a ()

    // we can create js variables that we can use in jsx
    const buttonText = 'Click Me!';

    // we can use different types of variables and use them in the jsx
    const numbers = 12345;
    const arr = ['hi', 'there'];

    // we can not use a native js object inside jsx
    const obj = { text: 'This is an object' }


    return (
        // when we want to write a class in jsx we use 'className' instead of class
        <div className="wrapper">
            {/* to add inline styling toa jsx element we use the {{}} with the styling inside it */}
            {/* the inside curly brackets is a javascript object so we need to use the right syntax for an object */}
            <h1 style={{ backgroundColor: 'red', color: '#fff' }}>This is the heading!</h1>
            <button>   
                 {/* we can referece variables we declared above inside jsx  */}
                 {/* we use single {} with the variables inside */}
                { buttonText }
            </button>
            <hr />
            <button className="btn">
                {/* must include the () so the function gets called */}
                { getButtonText() }
            </button>
            <hr />
            <button className="btn">
                { numbers }
            </button>
            <hr />
            <button className="btn">
                { arr }
            </button>
            <hr />
            <button className="btn">
                {/* we cant just display an object on the dom with jsx */}
                {/* we have to point to the key in the object that we want to use */}
                {/* which must have a value that is vaild jsx  */}
                { obj.text }
            </button>
        </div>
    );
}


// Take the component and show on the screen.
ReactDOM.render(
    // react dom takes the react component above and renders it to the page
    <App />,
    // we have to select the root element in the public html file. This is where we are appending the react app to.
    document.getElementById('root')
)

