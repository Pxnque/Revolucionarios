"use client"
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";
import React, { useEffect, useState } from 'react'
import { Suspense } from 'react';
import { fetchData } from '@/app/fetchData';

export default function platilloId ({ params }){
    const [data, setData] = useState(null);
    const apiData = fetchData(`http://127.0.0.1:8090/api/collections/comida/records?filter=idCategoria='${params.id}'&page=1&perPage=30`);
    useEffect(() => {
        try {
            const fetchedData = apiData.read();
            if (fetchedData && fetchedData.items) {
                setData(fetchedData.items);
            } else {
                console.error('Data is not in expected format:', fetchedData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);
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