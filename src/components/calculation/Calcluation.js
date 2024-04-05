import React, { useState } from 'react';
import './Calculation.css';
import Button from '../Button/Button';

const Calculation = () => {
    const [count, setCount] = useState(0);
    const decrementCount = () => {
        setCount(countValue => countValue - 1);
    };
    const incrementCount = () => {
        setCount(countValue => countValue + 1);
    };
    return (
        <div className='formWork'>
            <h1>Todo-List</h1>
            <span style={{fontSize: '50px'}}>{count}</span>
            <Button name="-" className="calculateButton" onClick={decrementCount} />
            <Button name="+" className="calculateButton" onClick={incrementCount} />
        </div>
    );
};

export default Calculation;
