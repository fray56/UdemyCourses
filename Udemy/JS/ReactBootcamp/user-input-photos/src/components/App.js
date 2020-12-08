import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component {

    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '32px' }}>
                {/* we pass the onSearchSubmit function down to the SearchBar component as a prop.
                    this will get called inside the SEarchBar component when the user submits the form
                    the value of the text input will be stored inside the callback, which we will have 
                    access to here in the parent component.
                    Good way to pass data back from the child component to the parent. */}
                <SearchBar onSubmit={ this.onSearchSubmit } />
            </div>
        );
    }

}

export default App;