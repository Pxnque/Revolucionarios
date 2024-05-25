"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://revolucionarios.pockethost.io/'); // Create a PocketBase client instance

var updateData = ""; // Variable to store the result of the update operation
var createData = ""; // Variable to store the result of the create operation
var deleteData = ""; // Variable to store the result of the delete operation

// Function to update a platillo in the database
async function update(data) {
  try {
    updateData = await pb.collection('comida').update(data.id, data); // Update the platillo
    if (updateData) {
      alert("Platillo editado con exito");
    } else {
      alert("Hubo un problema al editar el platillo");
    }
  } catch (e) {
    console.log(e);
  }
}

// Function to delete a platillo from the database
async function borrar(data) {
  try {
    deleteData = await pb.collection('comida').delete(data.id); // Delete the platillo
    if (deleteData) {
      alert("Platillo eliminado con exito");
    } else {
      alert("Hubo un problema al eliminar el platillo");
    }
  } catch (e) {
    console.log(e);
  }
}

// Function to create a new platillo in the database
async function create(data) {
  try {
    createData = await pb.collection('comida').create(data); // Create the platillo
    if (createData) {
      alert("Platillo agregado con exito");
    } else {
      alert("Hubo un problema al agregar el platillo");
    }
  } catch (e) {
    console.log(e);
  }
}

const Page = () => {
  const [data, setData] = useState(null); // State to store categories data
  const [dataComida, setDataComida] = useState(null); // State to store platillos data
  const [selectedComida, setSelectedComida] = useState({
    id: '',
    nombre: '',
    ingredientes: '',
    tiempoPrep: ''
  }); // State to store the selected platillo
  const [newComida, setNewComida] = useState({
    nombre: '',
    ingredientes: '',
    tiempoPrep: ''
  }); // State to store the new platillo data
  const [selectedCategoriaId, setSelectedCategoriaId] = useState(''); // State to store the selected category ID
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file
  const [isFileLoading, setIsFileLoading] = useState(false); // State to indicate file loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultList = await pb.collection('categoria').getList(1, 50);
        setData(resultList.items); // Store categories data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDataComida = async () => {
      try {
        const resultList = await pb.collection('comida').getList(1, 200);
        setDataComida(resultList.items); // Store platillos data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    fetchDataComida();
  }, []);

  const handleSelectChangeComida = (event) => {
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

  const handleNewIngredientesChange = (event) => {
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

  const handleNombreChange = (event) => {
    setNewComida({
      ...newComida,
      nombre: event.target.value
    });
  };

  const handleButtonClick = () => {
    const dataEditar = {
      id: selectedComida.id,
      ingredientes: selectedComida.ingredientes,
      tiempoPrep: selectedComida.tiempoPrep
    };
    update(dataEditar);
  };

  const handleButtonClickEliminar = () => {
    const dataEliminar = {
      id: selectedComida.id
    };
    if (confirm('¿Esta seguro que quiere eliminar el platillo ' + selectedComida.nombre + '?')) {
      borrar(dataEliminar);
    }
  };

  const handleButtonClickAgregar = () => {
    const dataAgregar = {
      nombre: newComida.nombre,
      ingredientes: newComida.ingredientes,
      tiempoPrep: newComida.tiempoPrep,
      idCategoria: selectedCategoriaId
    };
    create(dataAgregar);
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
              onChange={handleTiempoPrepChange} />
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
