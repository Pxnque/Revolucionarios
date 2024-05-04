import React from 'react'
import DisplayCategorias from '../components/categorias/Categorias'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Platillo from '../components/platillos/Platillo'


const page = () => {
  return (
    
    <div>
        <Navbar/>

        <div className="flex items-center justify-center ">
        <DisplayCategorias>

        </DisplayCategorias>
        </div>
        
        <Footer/>
    </div>
  )
}

export default page