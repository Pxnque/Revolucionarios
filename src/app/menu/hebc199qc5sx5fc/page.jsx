"use client"
import React from 'react'


import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'
import DisplayEspecialidades from '@/app/components/especialidades/Especialidades'



const page = () => {
 

  return (
      
      <div>
        <Navbar/>

        <div>
           
        <DisplayEspecialidades/>

        </div>
        <Footer/>
        
    </div>
    
  )
}

export default page