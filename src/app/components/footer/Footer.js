import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
 <div className="w-10/12 mx-auto border-b border-black"></div> 
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="mr-4">
            <Image src="REVOLUCIONARIOS-LOGO.svg" alt="Logo" width={100} height={40} />
          </div>
          <div className="hidden sm:block">
            <h2 className="text-2xl font-bold mb-2 ">Los Revolucionarios</h2>
            <p className="text-md">El sabor y amor de la tradicion mexicana.</p>
          </div>
        </div>
        <div className="flex items-center">
        <a href="" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-col items-center">
            <Image src="whats-app-whatsapp-whatsapp-icon-svgrepo-com.svg" alt="Telefono" width={30} height={30} className="hover:fill-current text-blue-500" />
            <span className="text-sm">434</span>
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
