import './ImageList.css';

import React from 'react';
import ImageCard from './ImageCard';

export const ImageList = (props) => {
    
    // we use a map function to map over the images array and create a new array that we display to the user.
    // .map takes an arrow function with an argument. the argument is the name for each item looped over
    // then we can return jsx with the results of the new array 
   const images =  props.images.map((image) => {
       // we always add a 'key' this is so react knows when we add or remoce an element.
       // always add the key to the root element thats being returned in the function

       // we have used a component for each image that we render to the page.
       // this is so we can add some additional styling and logic to each image individually.

       // we are passing the image argument down as a prop to the image card conponent
       // 'image' is each item the .map loops over so it gives us the data for each item in the array.
       // we pass it down as a prop to the imagecard component so we can use the data in that component.
        return <ImageCard key={ image.id } image={ image }/>
    });


    return (
        
        <div className="image-list">
            {/* we can use the .map to display the images to the page */}
            { images }
        </div>
    );
}

export default ImageList;
