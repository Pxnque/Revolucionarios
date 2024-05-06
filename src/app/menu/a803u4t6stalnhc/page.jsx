
import React from 'react'


import DisplayPlatillos from '@/app/components/platillo/Platillo'
import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'



const page = () => {
 

  return (
      
      <div>
        <Navbar/>

        <div>
           
        <DisplayPlatillos/>

        </div>
        <Footer/>
        
    </div>
    
  )
}

export default page