import React from 'react';

const person = ( props ) => {
    return (
        <div> 
            <p onClick={props.click}>I'm {props.name} and I am {props.age} yeras old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;