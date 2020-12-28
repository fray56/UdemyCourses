import React, { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const onCounterIncrease = () => {
         setCounter( counter +1 );
    }; 

    const onCounterDecrease = () => {
        if(counter !== 0) {
            setCounter( counter -1);
        }    
        
    }

    return (
        <div>
           <button onClick={ onCounterIncrease }>Counter Increase</button> 
           <button onClick={ onCounterDecrease }>Counter Decrease</button> 
           { counter }
        </div>
    );
};


export default Counter;