"use client"
import React from 'react'


import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'
import DisplayBotanas from '@/app/components/botanas/Botanas'




const page = () => {
 

  return (
      
      <div>
        <Navbar/>

        <div>
           
        <DisplayBotanas/>

        </div>
        <Footer/>
        
    </div>
    
  )
}

export default page