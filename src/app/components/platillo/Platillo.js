 // JSX


 async function getPlatillos() {
    const url = `http://127.0.0.1:8090/api/collections/comida/records?filter=idCategoria='a803u4t6stalnhc'&page=1&perPage=30`;
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();
    
    return data?.items || [];

  }

export default async function DisplayPlatillos() {
    const platillos = await getPlatillos();
  
    return (
        <div>
            {platillos?.map((platillo) => {
                return <Platillo key={platillo.nombre} platillo={platillo} />;
            })}
        </div>
    );
}

function Platillo({ platillo }) {
    const { nombre, ingredientes, tiempoPrep } = platillo || {};

    return (
        <div className="container mx-auto px-4 md:mx-52">

        <h1 className="text-xl text-blue-800 font-bold ">{nombre}</h1>

        <p className="text-base ">{ingredientes}</p>
        <p className="font-extralight">{tiempoPrep}</p>

    </div>
    );
}
