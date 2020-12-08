import './Loader.css';
import React from 'react';

const Loader = (props) => {
    return (
        <div className="loader">
            <div className="ui active dimmer">
                <div className="ui big text loader">{ props.message }</div>
            </div>
        </div>
    );
};

// we can set defaults for the props we set
// incase a prop isnt passed from the parent the defaul value will show instead.
Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;