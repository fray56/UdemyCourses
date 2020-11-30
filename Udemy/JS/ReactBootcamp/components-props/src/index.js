import React from 'react';
import ReactDOM from 'react-dom';
// we have to import all the components we want to use here!
import CommentDetail from './CommentDetail';

// this function gets an image from the unsplash api that we use as a prop in the commentDetail component
function getAvatar() {
    return 'https://source.unsplash.com/random';
}

const App = () => {
    return (
        <div className="ui container comments">
            {/* we can render our components inside the jsx */}
            {/* we dont use {} when redering our components. We treat them as a jsx element */}
            {/* there is no limit on the amount of components we can use. */}


            {/* Props */}
            {/* Props are us passing data from the PARENT component to the CHILD component */}
            {/* we pass the prop with a name and then the value we want to pass down */}
            {/* we can use any name  */}
            {/* we can pass any type of value down to the child */}
           
            {/* we call the prop author
            then we can pass the name of the author down as a string */}
            <CommentDetail 
            author="Sam" 
            timePosted="Today at 3:23pm"
            userComment="This is a really good comment"
            getImage={getAvatar()}
            />
            <CommentDetail 
            author="Tom" 
            timePosted="Today at 11:45am"
            userComment="This is just the second comment"
            getImage={getAvatar()}
            />
            <CommentDetail 
            author="Amy" 
            timePosted="Today at 1:30pm"
            userComment="This is the last comment"
            getImage={getAvatar()}
            />
            
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
