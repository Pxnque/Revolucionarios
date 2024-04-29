"use client"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import React, {useState} from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from 'react-icons/rx'
import Image from 'next/image';

const slides = [
"/1714104245112.jpg",
"/1714104244442.jpg",
"/1714104245112.jpg"
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const prevSlide = () =>{
    const isFirstSlide = currentSlide === 0;
    const newIndex= isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
    
  }

  const nextSlide = () =>{
    const isLastSlide = currentSlide === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  }
  
  return (
   <main>
    <Navbar/>
    <div className="max-w-[1200px] h-[580px] m-auto py-4 px-4 relative group">
      <div style={{ 
          backgroundImage: `url(${slides[currentSlide]})`, // Aquí se usa la sintaxis de template strings
        }}
 className="w-full h-full rounded-2xl bg-center bg-cover duration-500"> 
  {}
  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer bg-opacity-50">
    <BsChevronCompactLeft size={30} onClick={prevSlide}/>
  </div>
  <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-0 translate-y-[-50%] text-2xl rounded-md p-2 bg-black bg-opacity-50 text-white cursor-pointer">
        <button>
          Menú
        </button>
  </div>
  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black bg-opacity-50 text-white cursor-pointer">
    <BsChevronCompactRight size={30} onClick={nextSlide}/>
  </div>
    </div>
    <div className="flex top-4 justify-center py-2 opacity-50">
    {slides.map((slide, slideIndex) => (
      <div key={slideIndex} 
      onClick={() => goToSlide(slideIndex)} 
      className="text-2xl cursor-pointer">
        <RxDotFilled/>
        </div>
  )
  )
  }
  </div>
    </div>

  <div className="flex m-8">
  <div className="w-1/2 h-full m-4">
  <h2 className="relative text-center text-xl font-bold">
      Sabor, sazón
    </h2>
    <p1 className="relative text-center ">
    ¡Bienvenidos  a Los Revolucionarios, donde la historia cobra vida y los sabores mexicanos te transportan a tiempos de aventura y tradición! En nuestro hogar, la hospitalidad es la esencia y la comida es el corazón
    </p1>
  </div>
  <div className="w-1/2 h-full">
  <Image src="/1714104244091.jpg" alt="Imagen" width={500} height={300} layout="responsive" className="rounded-lg">
    </Image>
  </div>
</div>


    <Footer/>
   </main>

  );
}
