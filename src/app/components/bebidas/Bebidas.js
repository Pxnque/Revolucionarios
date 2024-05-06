 // JSX


 async function getPlatillos() {
    const url = `http://127.0.0.1:8090/api/collections/comida/records?filter=idCategoria='21ttens0z25r404'&page=1&perPage=30`;
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();
    
    return data?.items || [];

  }
  

export default async function DisplayBebidas() {
    const platillos = await getPlatillos();
  
    return (
        <div>
            <div className="flex items-center justify-center flex-wrap max-w-screen-xl">
                {platillos?.map((cat) => {
                        return <Bebidas key={cat.nombre} note={cat}/>;
                })}
            </div>
        </div>
    );
}

function Bebidas({ note }) {
    const { id, nombre, ingredientes, tiempoPrep } = note || {};
    //const baseUrl = 'http://127.0.0.1:8090/api/files/categoria/';
    //const imageUrl = imagen;
    return (
        
        <div className="container mx-auto px-4 md:mx-52">

        <h1 className="text-xl text-red-800 font-bold ">{nombre}</h1>

        <p className="text-base ">{ingredientes}</p>
        <p className="font-extralight">{tiempoPrep}</p>

    </div>
        
    );
}