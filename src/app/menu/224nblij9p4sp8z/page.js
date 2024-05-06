
import React from 'react'



import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/footer/Footer'
import DisplayAlaparrilla from '@/app/components/alaparrilla/Alaparrilla'



const page = () => {
 

  return (
      
      <div>
        <Navbar/>

        <div>
           
        <DisplayAlaparrilla/>

        </div>
        <Footer/>
        
    </div>
    
  )
}

export default page