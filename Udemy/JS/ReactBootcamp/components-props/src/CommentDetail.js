// we have to import react in every file/component we create.
import React from 'react';

// when we are passing props down to the child component. we have to add 'props' to the component function to tell it we are passing props down
const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={ props.getImage } />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {/* to pass a prop down we wrap in {} and because props is an obkect we add the name of the object 'props' and the value we want from it. in this case it is .author which is the prop we set in the parent component */}
                    { props.author }
                </a> 
                <div className="metadata">
                    <span className="data">{ props.timePosted }</span>
                </div>
                    <div className="text">{ props.userComment }</div>
            </div>
        </div>
    );
};

// when we create a component, we have to export default the component. 
// this is so the other files in our project can have access to this component.
export default CommentDetail;