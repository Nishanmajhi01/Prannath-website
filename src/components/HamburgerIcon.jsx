// HamburgerIcon.js
import React from 'react';

const HamburgerIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className="cursor-pointer block lg:hidden"
      onClick={toggleMenu}
    >
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </>
        ) : (
          <>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </>
        )}
      </svg>
    </div>
  );
};

export default HamburgerIcon;
