import React from 'react';
import ReactDOM from 'react-dom';
import SeasonalDisplay from './SeasonalDisplay';

// we always have to extends React.Component when we make a react class
// React.Component has a lot of built in methods that the new react class subclasses and uses.
class App extends React.Component {
    // the class has to have a render method 
    render() {

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
            },
            err => {
                console.log(err);
            }
        );

        return (
            <div>Longitude: </div>
        );
    };
};



ReactDOM.render(
    <App />,
    document.querySelector('#root')
);