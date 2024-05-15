"use client"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import ReCAPTCHA from "react-google-recaptcha"
import { useRef } from "react"



const page = () => {
    const clickeado = (e) =>{
        console.log(captcha.current.getValue());
    };
    const captcha = useRef(null)
    return (
      
      <div>
          <Navbar/> 
        <div className="flex items-center justify-center h-[60vh]">
            <div className="bg-stone-400 p-8 rounded-lg shadow-md w-96 ">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">LOGIN</h2>
            <form action="/login" method="post">
                <div className="mb-4">
                    <input type="text" id="username" name="username" placeholder="Usuario" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                </div>
                <div class="mb-6">
                    <input type="password" id="password" name="password" placeholder="Contraseña" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                </div>
                <div>
                <ReCAPTCHA ref={captcha} sitekey="6LcwxtwpAAAAAIyboXq_gKk76OlVa1xIpTKZRaIt" onChange={clickeado}/>
                    <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-md transition duration-200">Entrar</button>
                </div>
                
            </form>
            </div> 
        </div>
        <Footer/>
      </div>
       
    )
  }
  
  export default page