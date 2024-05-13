"use client"
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { PiPhoneFill } from "react-icons/pi";



const Footer = () => {
  return (
   /* <footer className="bg-white text-black py-8">
      <div className="w-10/12 mx-auto border-b border-black"></div> 
      <div className="container flex-row sm:flex-row items-center py-4 px-8 sm:px-4">
       
        <div className="flex items-center sm:flex-col sm:items-center ">
          <div className="mx-4 sm:mr-8 mb-4 sm:mb-0">
            <Image src="REVOLUCIONARIOS-LOGO.svg" alt="Logo" width={100} height={40} />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold mb-2">Los Revolucionarios</h2>
            <p className="text-md">El sabor y amor de la tradicion mexicana.</p>
            <p className="mt-2">Dirección:<br/>
            Avenida Torreon Nuevo #519,  <br/>Colonia Vicente Rivapalacio,  <br/>Morelia 58116 México.
            </p>
            <p className="mt-2">Horario:<br/>
            10:00-22:00
            </p>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end mt-4 sm:mt-0 bg-black">
          <a href="" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-col items-center">
            <Image src="whats-app-whatsapp-whatsapp-icon-svgrepo-com.svg" alt="Telefono" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">+52 434</span>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-col items-center">
            <Image src="facebook-fill-svgrepo-com.svg" alt="Facebook" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">Facebook</span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-col items-center">
            <Image src="instagram-fill-svgrepo-com.svg" alt="Instagram" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">Instagram</span>
          </a>
          <a href="https://www.google.com/maps/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <Image src="pin-svgrepo-com.svg" alt="Ubicación" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">Ubicación</span>
          </a>
        </div>
      </div>
      <div className="w-10/12 mx-auto border-b border-black"></div> 
  </footer>*/

    /*<footer>
      <div className="flex m-5">
        <div className="sm:block hidden ">
        <div className="m-4">
        <Image src="REVOLUCIONARIOS-LOGO.svg" alt="Logo" width={100} height={40} /> 
        </div>
        <div className="font-bold text-xl sm:text-lg m-10 sm:mx-4">
        Los Revolucionarios
        <div className="font-normal text-lg sm:text-md">
        El sabor y amor de la tradicion mexicana.
        </div>
        </div>
        <div className="mx-10 sm:mx-4">
        <p className="font-bold">
        Dirección:
        </p>
        Avenida Torreon Nuevo #519
        <br/>
        Colonia Vicente Rivapalacio,
        <br/>
        Morelia 58116 México.
        </div>
        <div className="m-10">
         <div>
         Horario
        </div>
        10:00-22:00
        </div>
        </div>
        <div className="flex justify-center sm:justify-end mt-4 sm:mt-0">
          <a href="" target="_blank" rel="noopener noreferrer" className="mx-10 flex flex-col items-center">
            <Image src="whats-app-whatsapp-whatsapp-icon-svgrepo-com.svg" alt="Telefono" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">+52 434</span>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mx-10 flex flex-col items-center">
            <Image src="facebook-fill-svgrepo-com.svg" alt="Facebook" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">Facebook</span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-10 flex flex-col items-center">
            <Image src="instagram-fill-svgrepo-com.svg" alt="Instagram" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">Instagram</span>
          </a>
          <a href="https://www.google.com/maps/" target="_blank" rel="noopener noreferrer" className="mx-10 flex flex-col items-center">
            <Image src="pin-svgrepo-com.svg" alt="Ubicación" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">Ubicación</span>
          </a>
        </div>
      </div>
    </footer>*/

  

    <footer className="bg-white text-black py-8">
      <div className=" flex justify-center w-auto mx-auto border-t-2 border-black mb-4 mx-4">
        <ul className="grid grid-cols-3 w-full m-4">
        <li className="size-auto text-center flex justify-center items-center text-2xl font-bold hover:cursor-pointer">
          <button className="transform transition duration-300 hover:scale-125">Nosotros</button>
        </li>
        <li className="size-auto flex justify-center">
        <Image src="/REVOLUCIONARIOS-LOGO.svg" alt="Logo" width={120} height={60}  className="md:w-120"/>
        </li>
        <li className="size-auto text-center flex justify-center items-center text-2xl font-bold cursor-pointer transform transition duration-300 hover:scale-125">Aviso de privacidad</li>
        </ul>
      </div>
      <div className="w-auto flex justify-center">
        <ul className="grid grid-cols-3">
          <li>
          <PiPhoneFill className="size-10 m-2 transform transition duration-300 hover:scale-125"></PiPhoneFill>
          </li>
          <li>
          <FaFacebook className="size-10 m-2 transform transition duration-300 hover:scale-125"></FaFacebook>
          </li>
          <li>
            <RiMapPin2Fill className="size-10 m-2 transform transition duration-300 hover:scale-125"></RiMapPin2Fill>
          </li>
        </ul>
        </div>    
    </footer>
 
  );
};

export default Footer;
