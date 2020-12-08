import React from 'react';

class SearchBar extends React.Component {

    // we can name this callback what we want but convention says we start it with 'on' then the element its targeted to 'input' and then the action 'change'
    // using a function like this is an 'uncontrolled' element. 
    // in react we prefer to have a 'controlled' element - by using state
    // onInputChange(evt) {
    //     console.log(evt.target.value);
    // }

    //using controlled events so we have more control over the element so we can do other operations much easier/
    state = { term: '' };

    // if we use a normal function here we will get an error this is undefind.
    // because the keyword this act differently when its inside a function. 
    // to solve this we can use an arrow function. 
    // we do this because the keyword this does not get a new value when its inside an arrow function
    // it keeps the value it had before.
    onFormSubmit = (evt) => {
        evt.preventDefault();

        // we take the prop that we have passed down from the parent App component and passed it into the function that gets called when we submit the form.
        // this is how we can pass data from the child to the parent.
        // once the form is submitted the function we declared in the App component is called and the state of term is passed in as the argument
        //
        // when we use props with a class based component we have to use the this keyword to set it.
        this.props.onSubmit(this.state.term);
    }


    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <label>Image Search</label>
                        {/* we use the onChange prop to listen out for any changes to the input field and when there is, we call the onInputChange method.  
                            this is the uncontrolled version that calls another function*/}

                        {/* <input type="text" onChange={ this.onInputChange }/> */}

                        {/* this is the controlled version that we should always try to use in react
                            it gives us alot more control over the element and we can perform other operations and use the value in other places in our app alot easier */}
                        <input type="text" value={ this.state.term } onChange={ (e) => this.setState({ term: e.target.value }) } />
                    </div>
                </form>
                {/* When we use a controlled element we can print the value of the input field easily onto the screen with using state. */}
                {/* <div>
                    <p>
                        { this.state.term }
                    </p>
                </div> */}
            </div>
        );
    }
}

export default SearchBar;