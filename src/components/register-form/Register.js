import React, { useState } from 'react';
import Input from '../Input/Input';
import Radio from '../radiobutton/Radio'; // Assuming this is correctly imported and functional
import './Register.css';
import Button from '../Button/Button';

const Form = () => {
  const [progress, setProgress] = useState('Male'); // Initialize progress state with a default value

  const handleProgressChange = (value) => {
    if (progress !== value) {
      setProgress(value);
    }
  };

  return (
    <div className='formWork'>
      <h1>User Registration</h1>
      <Input placeholder="First Name" inputId="first-name" type="text" />
      <Input placeholder="Last Name" inputId="last-name" type="text" />
      <Input placeholder="Email" inputId="email" type="email" />
      <Input placeholder="Password" inputId="password" type="password" />
      <Input placeholder="Re-enter Password" inputId="re-enter-password" type="password" />
      <div className='radioButton'>
        <Radio
          name="Gender"
          value="Male"
          label="Male"
          checked={progress === 'Male'}
          onChange={() => handleProgressChange('Male')}
        />
        <Radio
          name="Gender"
          value="Female"
          label="Female"
          checked={progress === 'Female'}
          onChange={() => handleProgressChange('Female')}
        />
        <Radio
          name="Gender"
          value="Others"
          label="Others"
          checked={progress === 'Others'}
          onChange={() => handleProgressChange('Others')}
        />
      </div>
      <Button name="Save" class="buttonWork" />
    </div>
  );
};

export default Form;
