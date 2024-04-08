import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>Ezhu</div>
      <ul className='navContents'>
        <li><a href="/" className='navLink'>Home</a></li>
        <li><a href="/note" className='navLink'>Note</a></li>
        <li><a href="/about" className='navLink'>About</a></li>
        <li><a href="/content" className='navLink'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
