import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseStep = () => {
        const newStep = steps + 1;
        setSteps(newStep);

    }
    useEffect(() => {
        console.log(steps);
    }, [steps])
    return (
        <div>
            <h2>this is my current step</h2>
            <p>my step: {steps}</p>
            <button onClick={increaseStep}>Dour...</button>
            <Display name='ami' steps={steps}></Display>

        </div>
    );
};

export default Watch;