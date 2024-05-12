
import React, { useEffect, useState } from 'react'
import { Suspense } from 'react';
import { fetchData } from '@/app/fetchData';
import Link from 'next/link';

const apiData = fetchData("http://127.0.0.1:8090/api/collections/categoria/records?page=1&perPage=30");

const NewCategoria = () => {
    const [data, setData] = useState(null);

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

    const baseUrl = 'http://127.0.0.1:8090/api/files/categoria/';

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
