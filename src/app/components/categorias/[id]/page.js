async function getPlatillos(categoriaId) {
   
    const url = `http://127.0.0.1:8090/api/collections/comida/records?filter=idCategoria=${categoriaId}&page=1&perPage=30`;
    const res = await fetch(url, { next: {revalidate :10}, });
    const data = await res.json();
    
    return data?.items || [];

  }
  export default async function DisplayPlatillos() {
    const platillos = await getPlatillos();
  
    return (
        <div>
            <div className="flex items-center justify-center flex-wrap max-w-screen-xl">
                {platillos?.map((cat) => {
                    return <Platillo key={cat.nombre} note={cat}/>;
                })}
            </div>
        </div>
    );
}

function Platillo({ note }) {
    const { id, nombre, ingredientes, tiempoPrep } = note || {};
    //const baseUrl = 'http://127.0.0.1:8090/api/files/categoria/';
    //const imageUrl = imagen;
    return (
        
            <div className="text-black">
                
                <h1>{nombre}</h1>
                
                <p>{ingredientes}</p>
                <p className="font-extralight">{tiempoPrep}</p>

            </div>
        
    );
}