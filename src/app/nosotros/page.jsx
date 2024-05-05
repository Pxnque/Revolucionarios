import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image';


const page = () => {
  return (
    <div>
    <Navbar/>
   
    <div className="flex items-center justify-center mt-6">
    <Image src="/wild-west-2696105_1280.jpg" alt="imagen" width={280} height={180} className="md:w-2/4 rounded-md"></Image>
    </div>
    <div className="flex items-center justify-center">
    <h1 className="font-bold text-black text-xl flex items-center md:text-5xl m-4">
        El Sabor de la Tradición
      </h1>
    </div>
    <div className="w-auto border border-black mx-16"></div>
    <div className="flex flex-col md:flex-row md:items-center">
    <div className="md:w-4/6 flex items-center justify-center">
    <Image src="/1714104244388.jpg" alt="imagen" width={280} height={180} className="md:w-4/6 md:m-12 rounded-md"></Image>
    </div>
    <div className="md:w-1/2 my-4 mx-6 flex items-center justify-center">
    <p className="text-base md:text-2xl text-center">
    En Los Revolucionarios, nuestra pasión por la cocina es el punto de partida, y esta pasión se enciende con la elección meticulosa de ingredientes frescos y de la más alta calidad. Nos comprometemos a ofrecer una experiencia culinaria excepcional en cada plato que servimos. Desde el momento en que seleccionamos los ingredientes hasta el momento en que llega a tu mesa, cada paso está impregnado de amor y dedicación. Nos esforzamos por ofrecerte lo mejor, utilizando únicamente los productos más selectos de temporada, asegurando que cada bocado sea una experiencia inolvidable.</p>
    </div>
    </div>
    <div className="w-auto border border-black mx-16"></div>
    <div className="flex flex-col md:flex-row md:items-center">
    <div className="md:w-1/2 my-4 mx-6 flex items-center justify-center">
    <p className="text-base md:text-2xl text-center">
    Nuestro restaurante es más que un lugar para disfrutar de deliciosos platillos; es un espacio donde las risas de los niños se mezclan con las conversaciones animadas de los adultos, creando una atmósfera de alegría y camaradería.
    Y para hacer aún más especial tu experiencia, te invitamos a unirte a nosotros en nuestras noches de eventos en vivo. Desde música en directo que te hace mover el cuerpo hasta entretenimiento para toda la familia, cada noche en Los Revolucionarios es una oportunidad para crear recuerdos inolvidables juntos.
    </p>
    </div>
    <div className="md:w-4/6 flex items-center justify-center">
    <Image src="/1714104245553.jpg" alt="imagen" width={280} height={180} className="md:w-4/6 md:m-12 rounded-md"></Image>
    </div>
    </div>

    <Footer/>
    </div>
  )
}

export default page