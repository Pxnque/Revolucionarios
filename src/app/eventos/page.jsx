import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image';


const page = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <div className="flex items-center justify-center">
        <h1 className="font-bold text-2xl md:text-3xl my-4">
            Acompañanos a vivir la emoción
        </h1>
        </div>
         <div className="flex flex-col md:flex-row md:items-center">
    <div className="md:w-4/6 flex items-center justify-center">
    <Image src="/raul-najera-OsTJNX83lC0-unsplash - copia.jpg" alt="imagen" width={280} height={180} className="md:w-2/3 md:mx-12 rounded-md"></Image>
    </div>
    <div className="md:w-1/2 my-4 mx-6 flex-col items-center justify-center">
        <h1 className="font-bold text-xl md:text-2xl text-center">
            DEPORTES EN VIVO TODOS LOS DIAS
        </h1>
    <p className="text-base md:text-2xl text-center mr-10">
    Todos los dias podras disfrutar con nosotros de tus deportes favoritos en vivo, apoya a tu equipo favorito con uno de nuestros deliciosos platillos
    </p>
    </div>
    </div>

    <div className="flex items-center justify-center border-black border w-2/3 mx-auto my-6"></div>
        <div>
        <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 my-4 mx-6 flex-col items-center justify-center">
        <h1 className="font-bold text-xl md:text-2xl text-center">
            LOS VIERNES MUSICA EN VIVO
        </h1>
        
    <p className="text-base md:text-2xl text-center">
    Por las tardes acompañanos a conocer nuevos artistas, disfrutar música a puerta cerrada para hacer de estos eventos intimos entre tú, la música y el sabor de la tradición
    </p>
    <h2 className="font-bold text-xl md:text-2xl text-center">
    A partir de las 8:00 PM
    </h2>
    </div>
    <div className="md:w-4/6 flex items-center justify-center">
    <Image src="/raul-najera-OsTJNX83lC0-unsplash - copia.jpg" alt="imagen" width={280} height={180} className="md:w-2/3 md:mx-12 rounded-md"></Image>
    </div>
   
    </div>
        </div>
      </div>
      <Footer/>
    
    </div>
  )
}

export default page
