import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="w-10/12 mx-auto border-b border-black"></div> 
      <div className="container flex items-center py-4 px-8 sm:px-4">
        <div className="flex items-center"> {/* Ajusta el margen a la derecha */}
          <div className="hidden sm:block"> {/* Ocultar en pantallas de teléfono */}
            <div className="mx-4">
              <Image src="REVOLUCIONARIOS-LOGO.svg" alt="Logo" width={100} height={40} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Los Revolucionarios</h2>
            <p className="text-md">El sabor y amor de la tradicion mexicana.</p>
            <div className="mx-4 text-center">
              <p>Dirección:<br/>
              Avenida Torreon Nuevo #519,  <br/>Colonia Vicente Rivapalacio,  <br/>Morelia 58116 México.
              </p>
            </div>
            <div className="mx-4 text-center">
              <p>
                Horario:<br/>
                10:00-22:00
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center"> {/* Ajusta el margen a la izquierda */}
          <a href="" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-col items-center">
            <Image src="whats-app-whatsapp-whatsapp-icon-svgrepo-com.svg" alt="Telefono" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">+52 434</span>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-col items-center">
            <Image src="facebook-fill-svgrepo-com.svg" alt="Facebook" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">Facebook</span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-col items-center">
            <Image src="instagram-fill-svgrepo-com.svg" alt="Instagram" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">Instagram</span>
          </a>
          <a href="https://www.google.com/maps/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <Image src="pin-svgrepo-com.svg" alt="Ubicación" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">Ubicación</span>
          </a>
        </div>
      </div>
      <div className="w-10/12 mx-auto border-b border-black"></div> 
    </footer>
  );
};

export default Footer;
