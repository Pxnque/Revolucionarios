"use client"
import React from 'react'



import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'
import DisplayTacos from '@/app/components/tacos/Tacos'



const page = () => {
 

  return (
      
      <div>
        <Navbar/>

        <div>
           
        <DisplayTacos/>

        </div>
        <Footer/>
        
    </div>
    
  )
}

export default page