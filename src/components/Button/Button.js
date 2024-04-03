import React from 'react';
import './Button.css'

const Button = (props) => {
  return (
    <div>
        <button className='buttonWork'>{props.name}</button>
    </div>
  )
}

export default Button;