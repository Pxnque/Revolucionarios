"use client"
import React from 'react'


import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'
import DisplaySandwich from '@/app/components/sandwich/Sandwich'






const page = () => {
 

  return (
      
      <div>
        <Navbar/>

        <div>
           
        <DisplaySandwich/>

        </div>
        <Footer/>
        
    </div>
    
  )
}

export default page