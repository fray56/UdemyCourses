import React from 'react';
// don't need to import axios here as well because its imported in the unsplash file.
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList';

class App extends React.Component {

    // setting state to an empty array
    // this is because when we get the images from the api call and show them on the page, it will be an array of images
    // so we set the state to be what or how we want the data to be shown on the page.
    state = { images: [] };

    
    // aysnc await is much easier and cleaner
    // we use an arrow function so the value of the this keyword doesnt change!
    onSearchSubmit = async (term) => {
        // must assign the await to a variable so we can access the data from the api call.
        // create a seperate file with the axios call config to stop messy code
        // then we use the import name to make an call... unsplash.
        const res = await unsplash.get('/search/photos', {
            // check documentation for the search params and headers when making an api call.
            params: {
                // this is the search result we pass through the user input.
                // we get the 'term' from the onSearchSubmit function we pass down as a prop to the SearchBar component.
                query: term
            },
            
        });
        // we can access the results without any .then method because we are using the async await calls.
        // ....must remember to assign the await to a variable!
        // console.log(res.data.results);

        // this is using Javascript Promises, we use a .then method as the success and failure method of .catch! this is the hard way! 
        // .then((res) => {
        //     console.log(res.data.results);
        // })
        // .catch((err) => {
        //     console.log(err);
        // })


        // once the api call has been made we update state to be the results from the api call.
        this.setState({ images: res.data.results });
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
                {/* ImageList is a component that will render a list of images of what the user has serched for.
                    we send the images state array down to the imagelist component by using props. */}
                <ImageList  images={ this.state.images } />
            </div>
        );
    }

}

export default App;