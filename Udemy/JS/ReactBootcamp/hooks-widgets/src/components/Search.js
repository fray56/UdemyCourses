
// we import useEffect the same was we do with state
import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const Search = () => {
    const [ term, setTerm ] = useState('');
    const [ results, setResults ] = useState([]);

    // when we call use effect we are hooking into the lifecycle methods and calling the useEffect function sometime in the app
    // we can call it as soon as the component has loaded for the first time and only call it once
    // or we can call it when a peiece of state/data has been updated and/or when the component is being rerendered.
    useEffect(() => {

        const search = async () => {
           const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        };

        if(term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if(term){
                search();
                }
            }, 1000);


        // inside a useEffect function we can only ever 'return' one thing.
        // that is a arrow function. or a 'cleanup function.
        // the cleanup function does NOT get called on the initial render of the component.
        // react holds on to it and then when the component is re-rendered the cleanup function is then invoked,
            return () => {
                clearTimeout(timeoutId);
            };
        };

        // the second argument is how we want the useEffect function to behave
        // [] = we only want the useEffect function to run one time only as soon as the component is first rendered.
        //    = NO argument we want the useEffect function to run when the component is first rendered and then anytime the component is re-rendered. 
        // [data] = an array with items in there means we want the useEffect to run when the component is first rendered and then when the piece of data or state we passed into the array has changed.
    }, [term]);


    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={ result.pageid }>
                <div className="right floated content">
                   <a 
                        className="ui button" 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                        rel="noreferrer">    
                    Go</a> 
                </div>
                <div className="item">
                    <div className="content">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>    
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ term }
                        onChange={ (e) => setTerm(e.target.value) }
                    />
                </div>
            </div>
            <div className="ui celled list">
                { renderedResults }
            </div>
        </div>
    );
};

export default Search;
