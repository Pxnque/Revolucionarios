"use client"
import React from 'react'
import { useState, useEffect } from 'react'; 
import { fetchData } from '@/app/fetchData';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
var ingredientes = "";
var tiempoPreparacion = "";

const apiData = fetchData("http://127.0.0.1:8090/api/collections/categoria/records?fields=id,nombreCat,expand.relField.name");
const apiDataComida = fetchData("http://127.0.0.1:8090/api/collections/comida/records?fields=id,nombre,ingredientes,tiempoPrep,expand.relField.name?page=1&perPage=200");
var updateData = ""
async function update(data){
  try{
    console.log(data.id);
    console.log(data);
    //updateData = await pb.collection('comida').update(data.id, data);
  }
  catch (e){
      console.log(e)
  }
  
}

const page = () => {
  const [data, setData] = useState(null);
  const [dataComida, setDataComida] = useState(null);
  const [selectedCategoriaId, setSelectedCategoriaId] = useState('');
  const [selectedComida, setSelectedComida] = useState({
    id: '',
    nombre: '',
    ingredientes: '',
    tiempoPrep: '',
    idCategoria: '',
  });

    useEffect(() => {
        try {
            const fetchedData = apiData.read();
            if (fetchedData && fetchedData.items) {
                setData(fetchedData.items);
            } else {
                console.error('Data is not in expected format:', fetchedData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        try {
          const fetchedDataComida = apiDataComida.read();
          if (fetchedDataComida && fetchedDataComida.items) {
              setDataComida(fetchedDataComida.items);
          } else {
              console.error('Data is not in expected format:', fetchedDataComida);
          }
      } catch (error) {
          console.error('Error fetching data:', error);
      }
        
    }, []);

    const handleSelectChange = (event) => {
      const selectedRecord = dataComida.find(record => record.nombre === event.target.value);
      if (selectedRecord) {
        setSelectedComida({
          id: selectedRecord.id,
          nombre: selectedRecord.nombre,
          ingredientes: selectedRecord.ingredientes,
          tiempoPrep: selectedRecord.tiempoPrep
        });
      }
    };

    const handleSelectChangeCategoria = (event) => {
      const selectedRecord = data.find(record => record.nombreCat === event.target.value);
      if (selectedRecord) {
        setSelectedCategoriaId(selectedRecord.id);
      }
    };

    const handleNombreChange = (event) => {
      setSelectedComida({
        ...selectedComida,
         
        nombre: event.target.value
      });
    };

    const handleIngredientesChange = (event) => {
      setSelectedComida({
        ...selectedComida,
         
        ingredientes: event.target.value
      });
    };
  
    const handleTiempoPrepChange = (event) => {
      setSelectedComida({
        ...selectedComida,
        tiempoPrep: event.target.value
      });
    };
    
  
    const handleButtonClick = () => {
      const dataEditar = {
        id: selectedComida.id,
        
        ingredientes: selectedComida.ingredientes,
        tiempoPrep: selectedComida.tiempoPrep
      };
      //console.log(dataEditar);
      update(dataEditar);
    };
    const handleButtonClickAgregar = () => {
      const dataAgregar = {
        nombre: selectedComida.nombre,
        ingredientes: selectedComida.ingredientes,
        tiempoPrep: selectedComida.tiempoPrep,
        idCategoria: selectedCategoriaId
      };
      console.log(dataAgregar);
      //update(dataEditar);
    };

    const renderOptionsCategorias = () => {
      return data?.map(record => (
          <option key={record.id} value={record.nombreCat}>{record.nombreCat}</option>
      ));
  };

  const renderOptionsComidas = () => {
    
    return dataComida?.map(record => (
      <option key={record.id} value={record.nombre}>{record.nombre}</option>
      
    ));
    
  };
 
  return (
        <>
          <div className="flex flex-col items-center justify-center my-4">
            <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl">Editar Platillo</h1>
            <select className=" w-1/2 md:w-1/3 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full"
            onChange={handleSelectChange}>
            
            {renderOptionsComidas()}
      </select>
      <textarea name="" id="areaEditar" className="border border-black rounded-md m-4 w-1/2 md:w-1/3 px-4 py-2 text-xl " value={selectedComida.ingredientes} 
      onChange={handleIngredientesChange}></textarea>

      <input id='prepEditar' type="text" className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4" placeholder="Tiempo de preparación en min" value={selectedComida.tiempoPrep} 
      onChange={handleTiempoPrepChange}></input>

    <button className="border border-black rounded-md w-1/2 md:w-1/3 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl"
     onClick={handleButtonClick}>Aceptar</button>
      </div>
     
      <div className="flex flex-col items-center justify-center my-4">
            <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl w-full">Cambiar Imagen Categorias</h1>
            <select id="Categorias-option1" className=" w-1/2 md:w-1/3 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full mb-4"
            onChange={handleSelectChangeCategoria}>
            {renderOptionsCategorias()}
      </select>
      <div className="flex">
        <p className="font-semibold text-2xl px-4 py-2 mb-4">Imagen</p>
        <button className="font-semibold text-4xl border border-black px-4 py-2 mb-4 text-center justify-center rounded-md">...</button>
      </div>
    <button className="border border-black rounded-md w-1/2 md:w-1/3 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl">Aceptar</button>
      </div>

      <div className="flex flex-col items-center justify-center my-4">
            <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl">Agregar Platillo</h1>
            <input type="text" className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4" placeholder="Nombre"
            onChange={handleNombreChange}/>
            <select id="Categorias-option2" className=" w-1/2 md:w-1/3 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full"
            onChange={handleSelectChangeCategoria}>
            {renderOptionsCategorias()}
      </select>
      <textarea name="" id="" className="border border-black rounded-md m-4 w-1/2 md:w-1/3 px-4 py-2 text-xl "
      onChange={handleIngredientesChange}></textarea>
      <input type="text" className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4" placeholder="Tiempo de preparació en min"
      onChange={handleTiempoPrepChange}/>
     
    <button className="border border-black rounded-md w-1/2 md:w-1/3 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl"
    onClick={handleButtonClickAgregar}>Aceptar</button>
      </div>

    </>
  

  )
}

export default page

