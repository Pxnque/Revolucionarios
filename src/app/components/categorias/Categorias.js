import React from 'react';
import styles from './Categorias.module.css';
import Link from 'next/link';
import Image from 'next/image';


/*async function getCategorias() {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const result = await db.records.getList('notes');
    const res = await fetch('http://127.0.0.1:8090/api/collections/categoria/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items || []; 
}


export default async function DisplayCategorias() {
    const categorias = await getCategorias();
  
    return(
      <div>
        <h1>Categoria</h1>
        <div className={styles.grid}>
          {categorias?.map((cat) => {
            return <Categoria key={cat.id} note={cat} />;
          })}
        </div>
      </div>
    );
  }
  function Categoria({ note }) {
    const { id, nombreCat, imagen, created } = note || {};
    const baseUrl = 'http://127.0.0.1:8090/api/files/categoria/';
    const imageUrl = imagen;
    return (
      React.createElement(Link, { href: `/notes/${id}` },
        React.createElement('div', { className: styles.note },
          React.createElement('h2', null, nombreCat),
          React.createElement('img', { src: baseUrl + id+ '/' +imageUrl, alt: "imagen" }),
          React.createElement('p', null, created)
        )
      )
    );
  }*/
  

  
  // JSX
  async function getCategorias() {
      const res = await fetch('http://127.0.0.1:8090/api/collections/categoria/records?page=1&perPage=30', { cache: 'no-store' });
      const data = await res.json();
      return data?.items || []; 
  }
  
  export default async function DisplayCategorias() {
      const categorias = await getCategorias();
    
      return (
          <div>
              <div className="flex items-center justify-center flex-wrap max-w-screen-xl">
                  {categorias?.map((cat) => {
                      return <Categoria key={cat.id} note={cat} />;
                  })}
              </div>
          </div>
      );
  }
  
  function Categoria({ note }) {
      const { id, nombreCat, imagen, created } = note || {};
      const baseUrl = 'http://127.0.0.1:8090/api/files/categoria/';
      const imageUrl = imagen;
      return (
          <Link href={`/notes/${id}`}>
              <div className="h-56 w-36 bg-black  rounded-md md:w-64 sm:w-48 sm:h-64 transform transition duration-300 hover:scale-110 m-4">  
                  <img src={baseUrl + id + '/' + imageUrl} alt="imagen" className="w-full rounded-t-md h-5/6" />
                  <h2 className="text-lg text-center p-1 text-white md:text-2xl">{nombreCat}</h2>
              </div>
          </Link>
      );
  }
  

  