"use client";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState} from "react";
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';

const pb = new PocketBase('http://127.0.0.1:8090'); //se crea un objeto de conexion a la base de datos
var authData = "";
//funcion asincrona que verifica que el usuario exista en la base de datos
async function login(usuario,contrasena){
    try{
        //guarda el resultado en una variable 
        authData = await pb.collection('users').authWithPassword(usuario, contrasena);
    }
    catch (e){
        console.log(e)
    }
    
}

const page = () => {    
    
    const router = useRouter(); 
    const [isCaptchaValid, setCaptchaValid] = useState(false);
    const captcha = useRef(null);
    

    const handleSubmit = (e) => {
        e.preventDefault(); // se evita que el form actualice la pagina.

        const username = e.target.username.value;
        const password = e.target.password.value;
        try{
            login(username,password) //llamada a la funcion login con los argumentos usuario y contraseña
           
        }
        catch (e) {
            alert("Ocurrio un error" + e);
        }
       
        if (!username || !password || !isCaptchaValid) { //Si algun campo esta vacio se manda una alerta.
            alert("Por favor, verifica que has llenado todos los campos y completado el CAPTCHA.");
            return;
        }

        if(pb.authStore.isValid){ //si el usuario está registrado en la base de datos, se redirige al 
                                  //panel de administrador
            router.push('/adminRegister');
            
        }else{
            alert("No se pudo iniciar sesion")
            console.log(authData);
            console.log(pb.authStore.isValid);
        }
       
    };

    const onCaptchaChange = (value) => {
        //console.log("Captcha value:", value);
        setCaptchaValid(!!value); //se actualiza el estado del captcha
    };

    return (
        <div>
            <Navbar/>
            <div className="flex items-center justify-center h-[60vh]">
                <div className="bg-stone-400 p-8 rounded-lg shadow-md w-96 ">
                    <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">LOGIN</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input type="text" id="username" name="username" placeholder="Usuario"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                        </div>
                        <div className="mb-6">
                            <input type="password" id="password" name="password" placeholder="Contraseña"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                        </div>
                        <div>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey="6LcwxtwpAAAAAIyboXq_gKk76OlVa1xIpTKZRaIt"
                                onChange={onCaptchaChange}
                            />
                            <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-md transition duration-200">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default page;
