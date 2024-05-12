"use client"
import React from 'react'
import DisplayCategorias from '../components/categorias/Categorias'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import LoadingSpinner from '../components/loadingSpinnner/LoadingSpinner'
import { useState, useEffect } from 'react';
import DisplayPlatillos from '../components/platillo/Platillo'
import NewCategoria from '../components/categorias2/NewCategoria'


const page = () => {
 
/*<DisplayCategorias>

</DisplayCategorias>*/
  return (
      
      <div>
        <Navbar/>
        <h1 className='text-6xl text-red-950 flex items-center justify-center'>Menu:</h1>
        <div className="flex items-center justify-center ">
        
        <NewCategoria/>
        </div>
        
        <Footer/>
        
    </div>
    
  )
}

export default page