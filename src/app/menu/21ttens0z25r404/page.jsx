"use client"
import React from 'react'


import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'
import DisplayBebidas from '@/app/components/bebidas/Bebidas'





const page = () => {
 

  return (
      
      <div>
        <Navbar/>

        <div>
           
        <DisplayBebidas/>

        </div>
        <Footer/>
        
    </div>
    
  )
}

export default page