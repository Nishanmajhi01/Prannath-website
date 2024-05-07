import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Routes,Route,Link } from 'react-router-dom';
import About from './About';
import BookList from './BookList';
import VideoList from './VideoList';
import Section1 from './Section1';
import Books from './Books';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobileView = useMediaQuery({ query: '(max-width: 1250px)' });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Cleanup function
    return () => {
      // Ensure menu is closed when component unmounts
      setIsMenuOpen(false);
    };
  }, []);

  return (
    <>
      <header className={`flex justify-${isMobileView ? 'start-flex' : 'center'} items-center`}>
        <div className="ml-4 flex items-center flex-col my-3">
          <img className="h-20 w-20" src="logo2.png" alt="prannath" />
          <span className='font-bold text-center my-1 text-4xl'>श्री प्राणनाथ ज्ञानपीठ</span>
        </div>
        {/* Hamburger/Cross Icon */}
        {isMobileView && (
          <button onClick={toggleMenu} className="block text-gray-500 focus:outline-none ml-auto mr-4 relative ">
            {isMenuOpen ? (

            <>
              <span className="block w-6 h-0.5 bg-black absolute top-1/2 left-1/2 transform -translate-x-2/3 -rotate-45"></span>
              <span className="block w-6 h-0.5 bg-black absolute top-1/2 left-1/2 transform -translate-x-2/3 rotate-45"></span>
             {/* <span className="block w-6 h-0.5 bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-0.5"></span> */}
            </>
             
            ) : (
              <>
              
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </>
            )}
          </button>
        )}
        
      </header>
      
      <nav className={`${isMobileView ? (isMenuOpen ? 'block absolute right-0 h-5/6 w-2/4 bg-gray-100 z-0.5' : 'hidden') : 'hidden sm:block'}`}>
        <ul className={`${isMobileView ? (isMenuOpen ? 'flex flex-col items-center h-screen justify-stretch' : 'hidden') : 'sm:flex sm:items-center sm:space-x-4'}`}>
          <li>
            <Link to="/" onClick={closeMenu} className="block py-2 px-4 text-black-600 font-bold hover:text-black-800">Home</Link>
          </li>
          <li>
          <Link to="/" onClick={closeMenu} className="block py-2 px-4 text-black-600 font-bold hover:text-black-800">OurBooks</Link>
          </li>
          <li>
          <Link to="/" onClick={closeMenu} className="block py-2 px-4 text-black-600 font-bold hover:text-black-800">Recent Videos</Link>
           </li>
           <li>
          <Link to="/" onClick={closeMenu} className="block py-2 px-4 text-black-600 font-bold hover:text-black-800">Donations</Link>
           </li>
           <li>
          <Link to="/" onClick={closeMenu} className="block py-2 px-4 text-black-600 font-bold hover:text-black-800">Contact us</Link>
           </li>
           <li>
          <Link to="/" onClick={closeMenu} className="block py-2 px-4 text-black-600 font-bold hover:text-black-800">About</Link>
           </li>
          
        </ul>
      </nav>
      <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/book-list" element={<BookList/>}/>
      <Route path="/videolist" element={<VideoList/>}/>
      <Route path="/section1" element={<Section1/>}/>
      <Route path="/books" element={<Books/>}/>
    {/* <Route path="/about" element={<About/>}/> */}
    </Routes>
    </>
  );
}
