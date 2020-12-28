import React, { useState } from 'react'

import Accordion from './components/Accordion';
import Counter from './components/Counter';
import Search from './components/Search';
import Dropdown from './components/Dropdown';


const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end library'
    },
    {
        title: 'Why use React?',
        content: 'React is really easy to use and make UI designs'
    },
    {
        title: 'How to use React?',
        content: 'You use React by making components'
    }
];


const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color of Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];



const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="ui container">
            <Counter />
            <br/>
            <Accordion items={ items } />
            <br />
            <Search />
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected} 
                options={ options } 
            />
        </div>
    );
};

export default App;