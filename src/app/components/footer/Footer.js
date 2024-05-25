"use client"
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { PiPhoneFill } from "react-icons/pi";



const Footer = () => {
  return (
 

    <footer className="bg-white text-black py-8">
      <div className=" flex justify-center w-auto mx-auto border-t-2 border-black mb-4 mx-4">
        <ul className="grid grid-cols-3 w-full m-4">
        <li className="size-auto text-center flex justify-center items-center text-2xl font-bold hover:cursor-pointer">
          <button className="transform transition duration-300 hover:scale-125">Nosotros</button>
        </li>
        <li className="size-auto flex justify-center">
        <Image src="/REVOLUCIONARIOS-LOGO.svg" alt="Logo" width={120} height={60}  className="md:w-120"/>
        </li>
        <li className="size-auto text-center flex justify-center items-center text-2xl font-bold cursor-pointer">
        <a className="transform transition duration-300 hover:scale-125" href="/avisoPrivacidad">Aviso de privacidad</a>
        </li>
        </ul>
      </div>
      <div className="w-auto flex justify-center">
        <ul className="grid grid-cols-3">
        <li className="relative group">           
            <PiPhoneFill className="size-10 m-2 transform transition duration-300 hover:scale-125" />
            <span className="w-24 px-2 absolute bottom-full transform -translate-x-1/2 mb-2 py-1 text-lg text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              443 232 4326
            </span>
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
