import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component {

    onInputSubmit = (term) => {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={ this.onInputSubmit } />
            </div>
        );
    }
}

export default App;
