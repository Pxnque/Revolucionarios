"use client";
import React, { useState, useEffect } from 'react';
import { fetchData } from '@/app/fetchData';
import PocketBase from 'pocketbase';
//c
const pb = new PocketBase('https://revolucionarios.pockethost.io/');//se crea un objeto de conexion a la base de datos
//por medio de la api se manda a llamar el id y el nombre de la categoria de la tabla de categorias
const apiData = fetchData("https://revolucionarios.pockethost.io/api/collections/categoria/records?fields=id,nombreCat,expand.relField.name");
//por medio de la api se manda a llamar el id, nombre, ingredientes y tiempo de preparacion de cada platillo de la tabla de comida. por pagina se llaman 200 platillos
const apiDataComida = fetchData("https://revolucionarios.pockethost.io/api/collections/comida/records?fields=id,nombre,ingredientes,tiempoPrep,expand.relField.name?page=1&perPage=200");
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
    console.log(e);
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
    console.log(e);
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
  });
  const [selectedCategoriaId, setSelectedCategoriaId] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileLoading, setIsFileLoading] = useState(false);

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

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = async () => {
    if (!selectedFile || !selectedCategoriaId) {
      alert("Por favor, selecciona una imagen y una categoría.");
      return;
    }

    setIsFileLoading(true);

    try {
      const formData = new FormData();
      formData.append('imagen', selectedFile); 

      const response = await pb.collection('categoria').update(selectedCategoriaId, formData);
      if (response) {
        alert("Imagen subida con éxito");
      } else {
        alert("Hubo un problema al subir la imagen");
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert("Hubo un problema al subir la imagen");
    } finally {
      setIsFileLoading(false);
    }
  };

  return (
    <>
    <nav className="bg-white m-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-black text-2xl md:text-4xl lg:text-6xl transform transition duration-300 hover:scale-125">
                Los Revolucionarios
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
            
              <a
                href="/adminLog"
                className="text-black hover:bg-red-800 hover:text-white rounded-lg p-2 text-xl transform transition duration-300 hover:scale-125"
              >
                Cerrar sesión
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto border border-black mx-4"></div>  
    </nav>
    <div id='contenedor' className='grid grid-cols-3 gap-4 pt-16'>
    <div className="">
      <div className="flex flex-col items-center justify-center my-4">
        <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl">Editar Platillo</h1>
        <select 
          className="md:w-1/3 lg:w-3/4 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full"
          onChange={handleSelectChangeComida}>
          {renderOptionsComidas()}
        </select>
        <textarea
          name=""
          id="areaEditar"
          className="border border-black rounded-md m-4 md:w-1/3 lg:w-3/4 px-4 py-2 text-xl"
          value={selectedComida.ingredientes}
          onChange={handleIngredientesChange}
        ></textarea>
        <input
          id="prepEditar"
          type="text"
          className="md:w-1/3 lg:w-3/4 px-4 py-2 border border-black text-black rounded-sm mb-4"
          placeholder="Tiempo de preparación en min"
          value={selectedComida.tiempoPrep}
          onChange={handleTiempoPrepChange}/>
        <button
          className="border border-black rounded-md md:w-1/3 lg:w-3/4 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl"
          onClick={handleButtonClick}>
          Editar
        </button>
        <br />
        <button
          className="border border-black rounded-md md:w-1/3 lg:w-3/4 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl"
          onClick={handleButtonClickEliminar}>
          Eliminar
        </button>
        </div>
      </div>
      <div className=''>
      <div className="flex flex-col items-center justify-center my-4 ">
        <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl w-full">Cambiar Imagen Categorias</h1>
        <select 
          id="Categorias-option1"
          className="md:w-1/3 lg:w-3/4  px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full mb-4"
          onChange={handleSelectChangeCategoria}>
          {renderOptionsCategorias()}
        </select>
        <div className="flex flex-col items-center">
          <p className="font-semibold text-2xl px-4 py-2 mb-4">Imagen</p>
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="mb-4"
          />
          {isFileLoading && <p className="text-xl text-red-500">Cargando...</p>}
        </div>
        <button 
          className="border border-black rounded-md md:w-1/3 lg:w-3/4 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl"
          onClick={handleUploadClick}
        >
          Aceptar
        </button>
      </div>
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <h1 className="font-bold text-3xl text-center mb-4 md:text-4xl">Agregar Platillo</h1>
        <input
          type="text"
          className="md:w-1/3 lg:w-3/4 px-4 py-2 border border-black text-black rounded-sm mb-4"
          placeholder="Nombre"
          onChange={handleNombreChange}
        />
        <select 
          id="Categorias-option2"
          className="md:w-1/3 lg:w-3/4 px-4 py-2 border border-black rounded-md text-xl text-center font-bold h-full"
          onChange={handleSelectChangeCategoria}
        >
          {renderOptionsCategorias()}
        </select>
        <textarea
          name=""
          id=""
          className="border border-black rounded-md m-4 md:w-1/3 lg:w-3/4 px-4 py-2 text-xl"
          value={newComida.ingredientes}
          onChange={handleNewIngredientesChange}
        ></textarea>
        <input
          type="text"
          className="md:w-1/3 lg:w-3/4 px-4 py-2 border border-black text-black rounded-sm mb-4"
          placeholder="Tiempo de preparación en min"
          value={newComida.tiempoPrep}
          onChange={handleNewTiempoPrepChange}
        />
        <button
          className="border border-black rounded-md md:w-1/3 lg:w-3/4 px-4 py-2 hover:text-white hover:bg-red-700 font-bold text-xl"
          onClick={handleButtonClickAgregar}
        >
          Agregar
        </button>
      </div>
    </div>
    </>
  );
};

export default Page;