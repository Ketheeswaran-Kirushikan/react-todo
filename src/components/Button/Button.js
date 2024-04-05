import React from 'react';
import './Button.css';

const Button = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div>
      <button className={props.className} onClick={handleClick}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;

