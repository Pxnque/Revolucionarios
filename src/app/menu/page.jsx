"use client"
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import NewCategoria from '../components/Categorias2/NewCategoria'



const page = () => {
 

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