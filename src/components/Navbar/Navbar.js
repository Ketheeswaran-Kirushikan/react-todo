import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>Ezhu</div>
      <ul className='navContents'>
        <li><a href="#" className='navLink'>Home</a></li>
        <li><a href="#" className='navLink'>About</a></li>
        <li><a href="#" className='navLink'>Services</a></li>
        <li><a href="#" className='navLink'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
