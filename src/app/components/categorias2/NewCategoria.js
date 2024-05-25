
import React, { useEffect, useState } from 'react'
import { Suspense } from 'react';
import { fetchData } from '@/app/fetchData';
import Link from 'next/link';
import PocketBase from 'pocketbase';

const url = 'https://revolucionarios.pockethost.io/'

const apiData = fetchData("https://revolucionarios.pockethost.io/api/collections/categoria/records?page=1&perPage=30");//Lectura de la api

const NewCategoria = () => {
    const [data, setData] = useState(null);//estado de la data, se inicializa en nulo

    useEffect(() => {
        try {
            const fetchedData = apiData.read();//se realiza el suspense y la promesa para obtener la informacion y se guarda en la variable
            if (fetchedData && fetchedData.items) {
                setData(fetchedData.items);
            } else {
                console.error('Data is not in expected format:', fetchedData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);

    const baseUrl = 'https://revolucionarios.pockethost.io/api/files/categoria/';//url base de la api para la recuperaciond de las imagenes

    return (
        <div className="flex items-center justify-center flex-wrap max-w-screen-xl">
            <Suspense fallback={<div>Loading...</div>}>
                <ul className="flex items-center justify-center flex-wrap max-w-screen-xl">
                    {data?.map((item) => (
                        <Link href={`/menu/${item.id}`} key={item.id}>
                            <div className="h-56 w-36 bg-black rounded-md md:w-64 sm:w-48 sm:h-64 transform transition duration-300 hover:scale-110 m-4">
                                <Image src={`${baseUrl}${item.id}/${item.imagen}`} alt="imagen" className="w-full rounded-t-md h-5/6" />
                                <h2 className="text-lg text-center p-1 text-white md:text-2xl">{item.nombreCat}</h2>
                            </div>
                        </Link>
                    ))}
                </ul>
            </Suspense>
        </div>
    )
}

export default NewCategoria;
