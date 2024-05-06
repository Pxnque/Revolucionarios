"use client"
import React from 'react'


import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'
import DisplayEnsaladas from '@/app/components/ensaladas/Ensaladas'




const page = () => {
 

  return (
      
      <div>
        <Navbar/>

        <div>
           
        <DisplayEnsaladas/>

        </div>
        <Footer/>
        
    </div>
    
  )
}

export default page