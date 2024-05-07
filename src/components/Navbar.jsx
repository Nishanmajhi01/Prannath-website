import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
    <header className='flex justify-center items-center flex-col'>
        <img className="h-20 w-20 "src="logo2.png" alt="prannath" srcset="" />
        <span>श्री प्राणनाथ ज्ञानपीठ</span>
    </header>
    <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Our Books</a></li>
            <li><a href="">Recent Videos</a></li>
            <li><a href="">Donations</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">About</a></li>
            
        </ul>
    </nav>
    </>
  )
}
