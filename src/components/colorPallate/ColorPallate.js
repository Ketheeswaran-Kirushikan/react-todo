import React, { useState } from 'react';
import './ColorPallate.css';
import Button from '../Button/Button';

const ColorPallate = () => {
    const [color, setColor] = useState('white');
    const changeColor = (newColor) => {
        const colorArray = ['blue', 'red', 'green'];
        for (const color of colorArray) {
            if (color === newColor) {
                setColor(newColor);
                break;
            }
        }
    };
    return (
        <div className='formWork'>
            <h1>Color-pallate</h1>
            <span>
                <div style={{backgroundColor:color,height:'100px',width:'100px',border:'1px solid black'}}>
                </div>
            </span>
            <Button name="Red" className="colorButton" onClick={() => changeColor('red')} />
            <Button name="Blue" className="colorButton" onClick={() => changeColor('blue')} />
            <Button name="Green" className="colorButton" onClick={() => changeColor('green')} />
        </div>
    );
};

export default ColorPallate;
