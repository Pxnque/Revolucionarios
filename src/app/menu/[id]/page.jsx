"use client"
import Footer from "@/app/components/footer/Footer";
import Navbar from "@/app/components/navbar/Navbar";
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://revolucionarios.pockethost.io');

export default function PlatilloId({ params }) {
    const [data, setData] = useState(null);
    const idComida = params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resultList = await pb.collection('comida').getList(1, 50, {
                    filter: `idCategoria='${idComida}'`
                });
                setData(resultList.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [idComida]);

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center flex-wrap max-w-screen-xl">
                <Suspense fallback={<div>Loading...</div>}>
                    <ul className="flex items-center justify-center flex-wrap max-w-screen-xl">
                        {data?.map((item) => (
                            <div key={item.id} className="container mx-auto px-4 md:mx-52 justify-center items-center">
                                <h1 className="text-xl text-red-800 font-bold md:text-5xl">{item.nombre}</h1>
                                <p className="text-base md:text-3xl font-semibold">{item.ingredientes}</p>
                                <p className="md:text-2xl">{item.tiempoPrep}</p>
                                <div className="border border-black border-dashed w-full" />
                            </div>
                        ))}
                    </ul>
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}
