import React from 'react';

function ListCreate(props)
{
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const MapExample = () =>
{
    return (
        <div>
        <ListCreate numbers = {Array.from({length: 5}, () => Math.floor(Math.random() * 100) + 1)}/>
        </div>
    );
}

export default MapExample;