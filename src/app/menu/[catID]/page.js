// Importa useParams de next/navigation
import { useParams } from 'next/navigation';

const Page = () => {
  // Utiliza useParams para acceder a los parámetros de la ruta
  const { catID } = useParams();

  // Ahora puedes usar catID en tu componente
  return (
    <div>
      <h1>Categoría: {catID}</h1>
      {/* Aquí puedes incluir más lógica de renderización o llamadas a la API usando catID */}
    </div>
  );
};

export default Page; // Asegúrate de agregar esto para que Next.js sepa que es un componente del cliente

