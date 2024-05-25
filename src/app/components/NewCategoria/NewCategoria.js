import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import Link from 'next/link';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://revolucionarios.pockethost.io');

const NewCategoria = () => {
    const [data, setData] = useState(null); // estado de la data, se inicializa en nulo

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resultList = await pb.collection('categoria').getList(1, 50);
                setData(resultList.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const baseUrl = 'https://revolucionarios.pockethost.io/api/files/categoria/'; // url base de la api para la recuperaciond de las imagenes

    return (
        <div className="flex items-center justify-center flex-wrap max-w-screen-xl">
            <Suspense fallback={<div>Loading...</div>}>
                <ul className="flex items-center justify-center flex-wrap max-w-screen-xl">
                    {data?.map((item) => (
                        <Link href={`/menu/${item.id}`} key={item.id}>
                            <div className="h-56 w-36 bg-black rounded-md md:w-64 sm:w-48 sm:h-64 transform transition duration-300 hover:scale-110 m-4">
                                <img src={`${baseUrl}${item.id}/${item.imagen}`} alt="imagen" className="w-full rounded-t-md h-5/6" />
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
