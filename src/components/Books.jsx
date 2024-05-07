import React, { useState } from 'react';
import BookList from './BookList';

function Books() {
  const [isFirstDivClicked, setIsFirstDivClicked] = useState(false)
  const [isBookListVisible, setIsBookListVisible] = useState(false)
  const handleFirstDivClick =()=>{
    setIsFirstDivClicked(true);
  }

  const handleClick = ()=>{
    setIsBookListVisible(true);
  }
  return (
    <>
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-md overflow-hidden md:flex py-5 my-6 justify-evenly">
  <div className="md:flex flex-col items-center" >
  
    <div className="md:shrink-0">
      <img className="rounded-3xl h-48 w-full object-cover md:h-full md:w-48" src="bitak.png" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
     
      <a href="#" onClick={handleClick} className="block mt-1 text-5xl font-bold leading-tight  text-black hover:underline align-center">ब्रह्मवाणी</a>
      {isBookListVisible && <BookList/>}
    </div>
  </div>
  <div className="md:flex flex-col items-center">
    <div className="md:shrink-0">
      <img className="rounded-3xl h-48 w-full object-cover md:h-full md:w-48" src="bitak.png" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
     
      <a href="#" className="block mt-1 text-5xl font-bold leading-tight  text-black hover:underline">साहित्य</a>
   
    </div>
  </div>
  <div className="md:flex flex-col items-center">
    <div className="md:shrink-0">
      <img className="rounded-3xl h-48 w-full object-cover md:h-full md:w-48" src="bitak.png" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
     
      <a href="#" className="block mt-1 text-5xl font-bold leading-tight  text-black hover:underline">गायन</a>
   
    </div>
  </div>
</div>
    </>
  );
}

export default Books;
