// Login.js
import React from 'react';
import Input from '../Input/Input';
import './Login.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/login.jpg';

const Login = () => {
  return (
    <div className='container-Box'>
      <div>
      <img src={profileImage} alt="sideimage" className="side-image" />
        </div>
        <div className='formWork'>
        <div className="column">
          <h1 className='h1-work'>User Login</h1>
          <Input placeholder="Email" inputId="email" type="email"/>
          <Input placeholder="Password" inputId="password" type="password" />
          <Button name="Save" className="buttonWork" />
          <Link to="/register" style={{ paddingTop: '20px' }}>Create new account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
