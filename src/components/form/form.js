import React, { useState } from 'react';
import Input from '../Input/Input';
import Textarea from '../textarea/Textarea';
import Radio from '../radiobutton/Radio';
import './form.css';
import Button from '../Button/Button'

const Form = () => {
  const [progress, setProgress] = useState('finished');

  const handleProgressChange = (value) => {
    if (progress !== value) {
      setProgress(value);
    }
  };

  return (
    <div className='formWork'>
      <h1>Todo-List</h1>
      <Input placeholder="Todo list Title" inputId="todoInput" type="text" />
      <Input placeholder="Created By" inputId="createdByInput" type="text" />
      <Input placeholder="Deadline" inputId="deadlineInput" type="date" />
      <div className='radioButton'>
      <Radio
        name="progress"
        value="finished"
        label="Finished"
        checked={progress === 'finished'}
        onChange={() => handleProgressChange('finished')}
      />
      <Radio
        name="progress"
        value="ongoing"
        label="On Going"
        checked={progress === 'ongoing'}
        onChange={() => handleProgressChange('ongoing')}
      />
      <Radio
        name="progress"
        value="goodToGo"
        label="Good to Go"
        checked={progress === 'goodToGo'}
        onChange={() => handleProgressChange('goodToGo')}
      />
      </div>
      <Textarea placeholder="Description" id="textarea" rows="4" cols="55" />
      <Button name="Save" className="buttonWork"/>
    </div>
  );
};

export default Form;

