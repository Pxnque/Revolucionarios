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
"/1714104244779-min.jpg"
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
   <main className="">
    <Navbar/>
    <div className="max-w-[1200px] h-[480px] m-auto py-4 px-4 relative group">
      <div style={{ 
          backgroundImage: `url(${slides[currentSlide]})`, // Aquí se usa la sintaxis de template strings
        }}
 className="w-full h-full rounded-2xl bg-center bg-cover duration-500"> 
  
  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer bg-opacity-50 transform transition duration-300 hover:scale-125">
    <BsChevronCompactLeft size={30} onClick={prevSlide}/>
  </div>
  <div className="hidden group-hover:block absolute top-[50%] left-[50%] -translate-x-0 translate-y-[-50%] text-sm rounded-md p-2 bg-black bg-opacity-50 text-white cursor-pointer  transform transition duration-300 hover:scale-125 md:text-2xl">
  <a href="/menu">
  Menú
</a>
  </div>
  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black bg-opacity-50 text-white cursor-pointer transform transition duration-300 hover:scale-125">
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

    <div className="flex items-center justify-center m-2 ">
  <div className="w-full h-full m-4 text-center p-5 md:w-1/2 md:h-1/2">
    <h2 className="text-center text-xl font-bold lg:text-4xl">
      Sabor, sazón
    </h2>
    <p className="text-center lg:text-3xl sm:text-xl mx-4">
      ¡Bienvenidos a Los Revolucionarios, donde la historia cobra vida y los sabores mexicanos te transportan a tiempos de aventura y tradición! En nuestro hogar, la hospitalidad es la esencia y la comida es el corazón. Únete a la revolución del sabor y del entretenimiento con nosotros. ¡Tenemos Eventos en Vivo todos los días para el disfrute de toda la familia!
    </p>
  </div>
  <div className="p-10 hidden sm:block">
    <Image src="/1714104244091.jpg" alt="Imagen" width={380} height={280} className="rounded-lg max-w[480px] max-h[380px]" />
  </div>

</div>


    <Footer/>
   </main>

  );
}
