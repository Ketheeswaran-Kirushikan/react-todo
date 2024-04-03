import React from 'react';

const Radio = (props) => {
  return (
    <div>
      <label>
        <input type="radio" name={props.name} value={props.value} checked={props.checked} onChange={props.onChange} /> {props.label}
      </label>
    </div>
  );
};

export default Radio;
