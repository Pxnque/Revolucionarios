"use client"
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";
import React, { useEffect, useState } from 'react'
import { Suspense } from 'react';
import { fetchDataP } from "@/app/fetchDataP";

export default function platilloId ({ params }){
    const [data, setData] = useState(null);
    const idComida = params.id;
    const url = `https://revolucionarios.pockethost.io/api/collections/comida/records?filter=idCategoria='${idComida}'`;
    
    useEffect(() => {//llama a la API para recuperar la informacion de los platillos
        fetchDataP(url)
            .then(data => {
                if (data && data.items) {
                    setData(data.items);  //Actualiza el estado del array de datos
                } else {
                    console.error('No items found in response');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [url]);
    
    return(
        <div>
            <Navbar/>
            <div className="flex items-center justify-center flex-wrap max-w-screen-xl">
            <Suspense fallback={<div>Loading...</div>}>
                <ul className="flex items-center justify-center flex-wrap max-w-screen-xl">
                    {data?.map((item) => ( //mapea los platillos recuperados de la llamada a la API
                        <div className="container mx-auto px-4 md:mx-52">

                        <h1 className="text-xl text-red-800 font-bold md:text-3xl">{item.nombre}</h1>
                
                        <p className="text-base md:text-2xl font-semibold">{item.ingredientes}</p>
                        <p className="md:text-xl">{item.tiempoPrep}</p>
                
                    </div>
                    ))}
                </ul>
            </Suspense>
            </div>
            <Footer/>
        </div>
    ); 
}