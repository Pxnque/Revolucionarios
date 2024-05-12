import Platillo2 from "@/app/components/platillo2/Platillo2";

export default function platilloId ({ params }){
    return(
        <>
        <h1>Categoria con id {params.id} </h1>
        <Platillo2 id={params.id}/>
        </>
    ); 
}