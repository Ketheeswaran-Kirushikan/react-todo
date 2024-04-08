import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <div>
      <label></label>
      <input className='inputType' placeholder={props.placeholder} id={props.inputId} type={props.type}/>
    </div>
  );
};

export default Input;
