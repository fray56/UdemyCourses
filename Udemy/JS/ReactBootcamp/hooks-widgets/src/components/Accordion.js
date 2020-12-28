// we have to destructor the useState hook out of the reatc library so we can use it
import React, { useState } from 'react'

const Accordion = ({ items }) => {
    // setting state in a functional component
    // we use array destructoring
    // the first item in the array is the name of the state
    // the second item in the array is the name of the setter function. this will be the function that we use to change the state
    // the arrgument in the useState is the default value 
    const [ activeIndex, setActiveIndex ] = useState(null)

    const onTitleClick = (index) => {
        // we just call the setter function and pass in the value that we want to change state to.
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={ item.title }>
                <div 
                    className={`title ${active}`}
                    onClick={ () => onTitleClick(index) }    
                >
                    <i className="dropdown icon"></i>
                    { item.title }
                </div>
                <div className={`content ${active}`}>
                    <p>{ item.content }</p>
                </div>
                    {/* we can render the state to the page by calling the state name. */}
                  {/* { activeIndex } */}
            </React.Fragment>
        );
    })

    return (
            <div className="ui styled accordion">
                { renderedItems }
            </div>
    );
};

export default Accordion;
