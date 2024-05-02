import React from 'react';
import "../assets/css/Navbar.css";

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/profile">Profile</a>
            <a href="/contact">Contact</a>
        </div>
    </div>
  );
}

export default NavBar;
