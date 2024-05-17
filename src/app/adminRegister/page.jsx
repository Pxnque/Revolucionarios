"use client"
import React, { useState, useEffect } from 'react';
import { fetchData } from '@/app/fetchData';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');//se crea un objeto de conexion a la base de datos
//por medio de la api se manda a llamar el id y el nombre de la categoria de la tabla de categorias
const apiData = fetchData("http://127.0.0.1:8090/api/collections/categoria/records?fields=id,nombreCat,expand.relField.name");
//por medio de la api se manda a llamar el id, nombre, ingredientes y tiempo de preparacion de cada platillo de la tabla de comida. por pagina se llaman 200 platillos
const apiDataComida = fetchData("http://127.0.0.1:8090/api/collections/comida/records?fields=id,nombre,ingredientes,tiempoPrep,expand.relField.name?page=1&perPage=200");
var updateData =  ""; //variable que almacenara si se pudo editar el platillo
var createData = "";
var deleteData = ""; //variable que almacenara si se pudo crear el platillo
async function update(data){ //funcion asyncrona que actualiza el platillo de la baser de datos
  try{
  
    updateData = await pb.collection('comida').update(data.id, data); //actualiza el platillo, manda el id del platillo y su informacion
    if (updateData){//si el platillo fue editado con exito mostrara una alerta de confirmacion
      alert("Platillo editado con exito");
    }else{//si no se pudo editar mostrara la alerta de que hubo un problema
      alert("Hubo un problema al agregar el platillo");
    }
  }
  catch (e){
      console.log(e)
  }

}
async function borrar(data){ //funcion asyncrona que actualiza el platillo de la baser de datos
  try{
  
    deleteData = await pb.collection('comida').delete(data.id); //actualiza el platillo, manda el id del platillo y su informacion
    if (deleteData){//si el platillo fue editado con exito mostrara una alerta de confirmacion
      alert("Platillo eliminado con exito");
    }else{//si no se pudo editar mostrara la alerta de que hubo un problema
      alert("Hubo un problema al eliminar el platillo");
    }
  }
  catch (e){
      console.log(e)
  }

}


async function create(data){//funcion asyncrona que manda la informacion del nuevo platillo a la base de datos
  try{
    
    createData = await pb.collection('comida').create(data);//se guarda en la variable el resultado del .create
    if (createData){//si el platillof fue agregado con exito mostrara una alerta de confirmacion
      alert("Platillo agregado con exito")
    }else{//caso contrario
      alert("Hubo un problema al agregar el platillo")
    }
  }
  catch (e){
      console.log(e)
  }

}

const Page = () => {
  
  const [data, setData] = useState(null);// Estado para almacenar los datos de categorías
  const [dataComida, setDataComida] = useState(null);// Estado para almacenar los datos de platillos
  const [selectedComida, setSelectedComida] = useState({
    id: '',
    nombre: '',
    ingredientes: '',
    tiempoPrep: ''
  });// Estado para almacenar el platillo seleccionado
  const [newComida, setNewComida] = useState({
    nombre: '',
    ingredientes: '',
    tiempoPrep: ''
  });// Estado para almacenar el nuevo platillo a agregar
  const [selectedCategoriaId, setSelectedCategoriaId] = useState(''); // Estado para almacenar el id de la categoría seleccionada

  useEffect(() => {
    try {
      const fetchedData = apiData.read(); // se manda la promesa y se leen los datos de la api
      if (fetchedData && fetchedData.items) {
        setData(fetchedData.items);// Almacena los datos de categorías en el estado
      } else {
        console.error('Data is not in expected format:', fetchedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    try {
      const fetchedDataComida = apiDataComida.read();
      if (fetchedDataComida && fetchedDataComida.items) {
        setDataComida(fetchedDataComida.items);// Almacena los datos de platillos en el estado
      } else {
        console.error('Data is not in expected format:', fetchedDataComida);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  const handleSelectChangeComida = (event) => { //se encarga de recuperar la informacion del platillo seleccionado en el select
    const selectedRecord = dataComida.find(record => record.nombre === event.target.value);
    if (selectedRecord) { //si lo encuentra, actualizar la informacion del estado de la comida seleccionada
      setSelectedComida({
        id: selectedRecord.id,
        nombre: selectedRecord.nombre,
        ingredientes: selectedRecord.ingredientes,
        tiempoPrep: selectedRecord.tiempoPrep
      });
    }
  };

  const handleSelectChangeCategoria = (event) => { //funcion que maneja el cambio de estado del select de categoria 
    const selectedRecord = data.find(record => record.nombreCat === event.target.value);
    if (selectedRecord) { //si encuentra la categoria, actualiza el estado del selectedCategoriaId con el Id de la categoria seleccionada
      setSelectedCategoriaId(selectedRecord.id);
    }
  };

  const handleIngredientesChange = (event) => {//actualiza el valor de selectedComida.ingredientes del textArea de editar platillos
    setSelectedComida({
      ...selectedComida,
      ingredientes: event.target.value
    });
  };

  const handleTiempoPrepChange = (event) => {//actualiza el valor de selectedComida.tiempoPrep del input de editar platillos
    setSelectedComida({
      ...selectedComida,
      tiempoPrep: event.target.value
    });
  };

  const handleNewIngredientesChange = (event) => {//actualiza el valor de newComida.ingredientes del textArea de nuevo platillo
    setNewComida({
      ...newComida,
      ingredientes: event.target.value
    });
  };

  const handleNewTiempoPrepChange = (event) => {
    setNewComida({
      ...newComida,
      tiempoPrep: event.target.value
    });
  };

  const handleNombreChange = (event) => {//actualiza el valor de newComida.nombre del input de agrega platillo
    setNewComida({
      ...newComida,
      nombre: event.target.value
    });
  };

  const handleButtonClick = () => { //Lo que sucede al hacer click en el boton de aceptar de editar platillo
    const dataEditar = {
      id: selectedComida.id,

      ingredientes: selectedComida.ingredientes,
      tiempoPrep: selectedComida.tiempoPrep
    };
    
    update(dataEditar);
  };

  const handleButtonClickEliminar = () => { //Lo que sucede al hacer click en el boton de aceptar de editar platillo
    const dataEliminar = {
      id: selectedComida.id
    };
    if (confirm('¿Esta seguro que quiere eliminar el platillo '+selectedComida.nombre+'?')) {
      
      borrar(dataEliminar);
    }
    
  };

  const handleButtonClickAgregar = () => { //lo que sucede al hacer click en el boton de aceptar de agregar platillo
    const dataAgregar = {
      nombre: newComida.nombre,
      ingredientes: newComida.ingredientes,
      tiempoPrep: newComida.tiempoPrep,
      idCategoria: selectedCategoriaId
    };
   
    create(dataAgregar);
    
  };

  const renderOptionsCategorias = () => { //renderiza los nombres de las categorias en una etiqueta option
    return data?.map(record => (
      <option key={record.id} value={record.nombreCat}>{record.nombreCat}</option>
    ));
  };

  const renderOptionsComidas = () => {//renderiza los nombres de los platillos
    return dataComida?.map(record => (
      <option key={record.id} value={record.nombre}>{record.nombre}</option>
    ));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center my-4">
        <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl">Editar Platillo</h1>
        <select 
          className="w-1/2 md:w-1/3 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full"
          onChange={handleSelectChangeComida}>
          {renderOptionsComidas()}
        </select>
        <textarea
          name=""
          id="areaEditar"
          className="border border-black rounded-md m-4 w-1/2 md:w-1/3 px-4 py-2 text-xl"
          value={selectedComida.ingredientes}
          onChange={handleIngredientesChange}
        ></textarea>
        <input
          id="prepEditar"
          type="text"
          className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4"
          placeholder="Tiempo de preparación en min"
          value={selectedComida.tiempoPrep}
          onChange={handleTiempoPrepChange}/>
        <button
          className="border border-black rounded-md w-1/2 md:w-1/3 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl"
          onClick={handleButtonClick}>
          Editar
        </button>
        <button
          className="border border-black rounded-md w-1/2 md:w-1/3 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl"
          onClick={handleButtonClickEliminar}>
          Eliminar
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center my-4">
        <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl w-full">Cambiar Imagen Categorias</h1>
        <select 
          id="Categorias-option1"
          className="w-1/2 md:w-1/3 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full mb-4"
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
        <input
          type="text"
          className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4"
          placeholder="Nombre"
          onChange={handleNombreChange}
        />
        <select 
          id="Categorias-option2"
          className="w-1/2 md:w-1/3 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full"
          onChange={handleSelectChangeCategoria}
        >
          {renderOptionsCategorias()}
        </select>
        <textarea
          name=""
          id=""
          className="border border-black rounded-md m-4 w-1/2 md:w-1/3 px-4 py-2 text-xl"
          value={newComida.ingredientes}
          onChange={handleNewIngredientesChange}
        ></textarea>
        <input
          type="text"
          className="w-1/2 md:w-1/3 px-4 py-2 border border-black text-black rounded-sm mb-4"
          placeholder="Tiempo de preparación en min"
          value={newComida.tiempoPrep}
          onChange={handleNewTiempoPrepChange}
        />
        <button
          className="border border-black rounded-md w-1/2 md:w-1/3 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl"
          onClick={handleButtonClickAgregar}
        >
          Agregar
        </button>
      </div>
    </>
  );
};

export default Page;


