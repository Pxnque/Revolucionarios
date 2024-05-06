"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {

    const[isClick, setisClick] = useState(false);
    const toggleNavbar = ()=> {
        setisClick(!isClick);
    };

  return (
    <>
      <nav className="bg-white m-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-black text-2xl md:text-4xl lg:text-6xl">
                Los Revolucionarios
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="/"
                className="text-black hover:bg-black hover:text-white rounded-lg p-2 text-xl transform transition duration-300 hover:scale-125"
              >
                Inicio
              </a>
              <a
                href="/menu"
                className="bg-black text-white hover:bg-white hover:text-black border hover:border-black rounded-lg p-2 text-xl transform transition duration-300 hover:scale-125 "
              >
                Menú
              </a>
              <Link href="/nosotros" className="text-black hover:bg-black hover:text-white rounded-lg p-2 text-xl transform transition duration-300 hover:scale-125">
                Nosotros
              </Link> 
              <a
                href="/eventos"
                className="text-black hover:bg-black hover:text-white rounded-lg p-2 text-xl transform transition duration-300 hover:scale-125"
              >
                Eventos
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-black
            hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            onClick={toggleNavbar}>
                {isClick ? (
               <svg  className="h-6 w-6"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor" >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M6 18L18 6M6 6l12 12"/>
            </svg>
                ) : (
                    <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                )
                }
            </button>
          </div>
          
        </div>
        <div className="w-auto border border-black mx-4"></div>
      </div>
      {isClick && 
      (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
                href="/"
                className="text-black block hover:bg-black hover:text-white rounded-lg p-2 text-lg" 
              >
                Inicio
              </a>
              <a
                href="/menu"
                className="text-black block hover:bg-black hover:text-black rounded-lg p-2 text-lg "
              >
                Menú
              </a>
              <a
                href="/nosotros"
                className="text-black block hover:bg-black hover:text-white rounded-lg p-2 text-lg"
              >
                Nosotros
              </a>
              <a
                href="/eventos"
                className="text-black block hover:bg-black hover:text-white rounded-lg p-2 text-lg"
              >
                Eventos
              </a>
          </div>
        </div>
      )
      }
    </nav>
    
    </>
  );
};

export default Navbar;
