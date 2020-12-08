import React from 'react';
import ReactDOM from 'react-dom';
import SeasonalDisplay from './SeasonalDisplay';
import Loader from './Loader';

// we always have to extends React.Component when we make a react class
// React.Component has a lot of built in methods that the new react class subclasses and uses.
class App extends React.Component {

    // if we set a constructor function inside our class we MUST pass props into it and call super(props)
    // this is so we use the React.Components constructor methods as well
    constructor(props) {
        // super references the props from the React.Component constructor and calls them here.
        super(props);

        // to set the state object we create it in the constructor so it loads when our class is initialised.
        // we can set the key value pairs of what we need our state to be in here
        // must be called state!!
        // if we have no value for the state yet we can set it as null
        // THIS IS THE ONLY TIME WE EVER DO DIRECT ASSIGNMENT TO THIS.STATE!!!!!
        this.state = { lat: null, errorMessage: '' };
    }

    // if we are only initialising state in our consrtuctor
    // we can just write:
    //
    // state = { lat: null, errorMessage: '' };
    //
    // we dont need to put the this. keyword
    // this does exactly the same as the above. 
    // babel will build a constructor function for us. 
    // no difference.



    //componentDidMount only every gets loaded once... this is the best place to put in logic that you want to call one time.
    // good place for api calls when the page loads 
    // we can use contructor as well but react best practices say you should use componentDidMount
    componentDidMount() {
        
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we ONLY use setState() to change state... we never use anything else!! 
                // must call the setState function! 
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }


    // the class has to have a render method 
    // we never put business logic or async calls inside the render method because it gets recalled and rendered alot!! 
    // the render method is just used for returning some jsx... thats it! 

    // putting conditional rendering inside the render function is not best practice because it stops us being able to add to or change the content being displayed.
    // we can make a helper function that contains the conditional logic and then show that function in the render method.
    renderContent() {
            // conditional rendering 
            // dont start with a return()        
            if( this.state.errorMessage && !this.state.lat ) {
                return <div>Error: { this.state.errorMessage }</div>;
            }
            if (!this.state.errorMessage && this.state.lat) {
            return <SeasonalDisplay 
                        lat={ this.state.lat }
                    />
            }
            return <Loader 
                      message="Finding your location..."
                    />;
    }


    render() {
        return (
            <div className="wrapper">
                {/* must include the this keyword. */}
                { this.renderContent() }
            </div>
        );        
    };
};



ReactDOM.render(
    <App />,
    document.querySelector('#root')
);