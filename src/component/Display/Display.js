import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div>
            <h2>name: {props.name}</h2>
            <p>step: {props.steps}</p>
            <Dial name="ami" steps={props.steps}></Dial>
        </div>
    );
};

export default Display;