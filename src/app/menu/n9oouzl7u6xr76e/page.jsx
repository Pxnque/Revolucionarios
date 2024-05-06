"use client"
import React from 'react'


import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'
import DisplayCocteles from '@/app/components/cocteles/Cocteles'






const page = () => {
 

  return (
      
      <div>
        <Navbar/>

        <div>
           
        <DisplayCocteles/>

        </div>
        <Footer/>
        
    </div>
    
  )
}

export default page