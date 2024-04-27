import React from 'react';
import styles from './Categorias.module.css';
import Link from 'next/link';

async function getCategorias() {
    // const db = new PocketBase('http://127.0.0.1:8090');
    // const result = await db.records.getList('notes');
    const res = await fetch('http://127.0.0.1:8090/api/collections/categoria/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items || []; // 'as any[]' is not needed in JavaScript
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
  }
  