import React from 'react';
import Input from '../Input/Input';
import Textarea from '../textarea/Textarea';
import Button from '../Button/Button';
import './ContactForm.css'; // Import the CSS file here

const ContactForm = () => {
  return (
    <form className='contactWork'>
      <div className='contactFormContainer'>
        <h1 className='formHeading'>Contact Us</h1>
        <div className='formGroup'>
          <label className='formLabel' htmlFor="fullname">Full Name</label>
          <Input placeholder="Full Name" inputId="fullname" type="text" />
        </div>
        <div className='formGroup'>
          <label className='formLabel' htmlFor="email">Email</label>
          <Input placeholder="Email" inputId="email" type="email" />
        </div>
        <div className='formGroup'>
          <label className='formLabel' htmlFor="textarea">Description</label>
          <Textarea placeholder="Description" id="textarea" rows="4" cols="55" />
        </div>
      </div>
      <div className='formGroup-checkbox'>
        <input
          className="formCheckbox"
          type="checkbox"
          value=""
          id="form4Example4"
          defaultChecked
        />
        <label htmlFor="form4Example4">
          Send me a copy of this message
        </label>
      </div>
      <Button name="Send" className="sendButton" />
    </form>
  );
};

export default ContactForm;
