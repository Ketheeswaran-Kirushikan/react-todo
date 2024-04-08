import React, { useState } from 'react';
import Input from '../Input/Input';
import Textarea from '../textarea/Textarea';
import Radio from '../radiobutton/Radio';
import './TodoEdit.css';
import Button from '../Button/Button'

const TodoEdit = () => {
  const [progress, setProgress] = useState('finished');

  const handleProgressChange = (value) => {
    if (progress !== value) {
      setProgress(value);
    }
  };

  return (
    <div className='todoWork'>
      <h1>Todo-List-Update</h1>
      <label className='labelWork'>Todo-Title</label><Input placeholder="Todo list Title" inputId="todoInput" type="text" />
      <label className='labelWork' >Date-update</label><Input placeholder="Updated date" inputId="updatedInput" type="date" />
      <label className='labelWork'>Deadline-Date</label><Input placeholder="Deadline" inputId="deadlineInput" type="date" />
      <label className='labelWork'>Progress-Level</label>
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
      <label className='labelWork'>Description</label>
      <Textarea placeholder="Description" id="textarea" rows="4" cols="55" />
      <Button name="Update" className="buttonWork"/>
    </div>
  );
};

export default TodoEdit;

