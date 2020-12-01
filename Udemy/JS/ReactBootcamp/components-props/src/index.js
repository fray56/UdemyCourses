import React from 'react';
import ReactDOM from 'react-dom';
// we have to import all the components we want to use here!
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// this function gets an image from the unsplash api that we use as a prop in the commentDetail component
function getAvatar() {
    return 'https://source.unsplash.com/random';
}

const App = () => {
    return (
        
        <div className="ui  container comments">
            
            {/* we can render our components inside the jsx */}
            {/* we dont use {} when redering our components. We treat them as a jsx element */}
            {/* there is no limit on the amount of components we can use. */}


            {/* Props */}
            {/* Props are us passing data from the PARENT component to the CHILD component */}
            {/* we pass the prop with a name and then the value we want to pass down */}
            {/* we can use any name  */}
            {/* we can pass any type of value down to the child */}
           
            {/* we can pass a component as a child component as a prop. 
                inside the ApprovalCard component we must pass in props */}
            <ApprovalCard>
                <CommentDetail 
                // we call the prop author
                // then we can pass the name of the author down as a string
                author="Sam" 
                timePosted="Today at 3:23pm"
                userComment="This is a really good comment"
                getImage={getAvatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Tom" 
                timePosted="Today at 11:45am"
                userComment="This is just the second comment"
                getImage={getAvatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Amy" 
                timePosted="Today at 1:30pm"
                userComment="This is the last comment"
                getImage={getAvatar()}
                />
            </ApprovalCard>

            {/* We can insert anything into the ApprovalCard and it will be passed as the content 
                We can pass any data into the approvalCard - jsx below*/}

            {/* Even when we are not passing through a child component... we HAVE to make sure props is passed into the parent component
                and that {props.children} is put where we want the passed through values to be shown. */}
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
