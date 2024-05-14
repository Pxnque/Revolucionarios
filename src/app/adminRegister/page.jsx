"use client"
import React from 'react'
import { useState, useEffect } from 'react'; 


/*
  async function fetchOptionsFromDatabase() {
    // Aquí puedes hacer la llamada a tu API, consulta a la base de datos, etc.
    // Por simplicidad, asumiremos que obtienes un array de objetos con propiedades 'value' y 'label'
    const options = await fetch('/api/options');
    return options.json();
  }
  
  export default function MySelectComponent() {
    const [options, setOptions] = useState([]);
  
    useEffect(() => {
      // Llamada a la función para obtener las opciones cuando el componente se monta
      fetchOptionsFromDatabase().then((data) => {
        setOptions(data);
      });
    }, []);
  
    return (
      <div>
        <div className="relative block items-center w-1/2">
        <h1 className="text-3xl">Cambiar Desbripción</h1>
        <select
          className="block appearance-none flex-1 bg-white border border-black hover:border-solid px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-red-700 m-4"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
  
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 12l-6-6 1.414-1.414L10 9.172l4.586-4.586L16 6z" />
          </svg>
        </div>
        </select>
        
      </div>
      </div>
      
    );
  }

*/
const page = () => {
  return (
        <div>
          <div className="flex flex-col items-center justify-center my-4">
            <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl">Editar Platillo</h1>
            <select className=" w-1/2 md:w-1/3 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full">
            <option value="" disabled selected>Selecciona una platillo</option>
      </select>
      <textarea name="" id="" className="border border-black rounded-md m-4 w-1/2 md:w-1/3 px-4 py-2 text-xl "></textarea>
      <input type="number" className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4" placeholder="Tiempo de espera en min"/>
      <input type="number" className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4" placeholder="Precio"/>
    <button className="border border-black rounded-md w-1/2 md:w-1/3 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl">Aceptar</button>
      </div>
     
      <div className="flex flex-col items-center justify-center my-4">
            <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl w-full">Cambiar Imagen Categorias</h1>
            <select className=" w-1/2 md:w-1/3 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full mb-4">
            <option value="" disabled selected>Selecciona una categoria</option>
      </select>
      <div className="flex">
        <p className="font-semibold text-2xl px-4 py-2 mb-4">Imagen</p>
        <button className="font-semibold text-4xl border border-black px-4 py-2 mb-4 text-center justify-center rounded-md">...</button>
      </div>
    <button className="border border-black rounded-md w-1/2 md:w-1/3 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl">Aceptar</button>
      </div>

      <div className="flex flex-col items-center justify-center my-4">
            <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl">Agregar Platillo</h1>
            <input type="text" className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4" placeholder="Nombre"/>
            <select className=" w-1/2 md:w-1/3 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full">
            <option value="" disabled selected>Selecciona una categoria</option>
      </select>
      <textarea name="" id="" className="border border-black rounded-md m-4 w-1/2 md:w-1/3 px-4 py-2 text-xl "></textarea>
      <input type="number" className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4" placeholder="Tiempo de espera en min"/>
      <input type="number" className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4" placeholder="Precio"/>
    <button className="border border-black rounded-md w-1/2 md:w-1/3 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl">Aceptar</button>
      </div>

    </div>
  

  )
}

export default page

