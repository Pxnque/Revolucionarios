"use client"
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";
import React, { useEffect, useState } from 'react'
import { Suspense } from 'react';
import { fetchData } from '@/app/fetchData';
import { fetchDataP } from "@/app/fetchDataP";

export default function platilloId ({ params }){
    const [data, setData] = useState(null);
    const idComida = params.id;
    console.log(idComida);
    // Ensure the id is enclosed in encoded single quotes
    const url = `http://127.0.0.1:8090/api/collections/comida/records?filter=idCategoria='${idComida}'`;

    console.log(url); // To verify the URL is correct
    const apiData = fetchDataP(url);
    
    useEffect(() => {
        fetchDataP(url)
            .then(data => {
                console.log('Data received:', data);  // Log to verify data structure
                if (data && data.items) {
                    setData(data.items);  // Set state to the items array
                } else {
                    console.error('No items found in response');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [url]);
    
    return(
        <>
            <Navbar/>
            <div className="flex items-center justify-center flex-wrap max-w-screen-xl">
            <Suspense fallback={<div>Loading...</div>}>
                <ul className="flex items-center justify-center flex-wrap max-w-screen-xl">
                    {data?.map((item) => (
                        <div className="container mx-auto px-4 md:mx-52">

                        <h1 className="text-xl text-red-800 font-bold ">{item.nombre}</h1>
                
                        <p className="text-base ">{item.ingredientes}</p>
                        <p className="font-extralight">{item.tiempoPrep}</p>
                
                    </div>
                    ))}
                </ul>
            </Suspense>
            </div>
            <Footer/>
        </>
    ); 
}