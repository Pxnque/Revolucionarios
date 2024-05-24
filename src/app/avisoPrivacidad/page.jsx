import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Aviso de Privacidad</h1>
        <p className="mb-4">
          En Los Revolucionarios, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Este aviso de privacidad describe cómo recopilamos, usamos y protegemos tu información.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Recopilación de Información</h2>
        <p className="mb-4">
          No solicitamos ni recopilamos información personal de los usuarios a través de nuestra página web. Los usuarios pueden navegar por nuestro menú, eventos y otra información relevante sin proporcionar datos personales.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Uso de la Información</h2>
        <p className="mb-4">
          Dado que no recopilamos información personal a través de nuestro sitio web, no utilizamos ni compartimos dicha información con terceros. Nuestra página está diseñada para proporcionar información útil sobre nuestro restaurante sin comprometer tu privacidad.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
        <p className="mb-4">
          Nuestro sitio web puede utilizar cookies para mejorar tu experiencia de navegación. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo para recordar tus preferencias y proporcionar funcionalidades adicionales.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Seguridad</h2>
        <p className="mb-4">
          Implementamos medidas de seguridad adecuadas para proteger la información de nuestros usuarios. Sin embargo, recuerda que ninguna transmisión de datos por Internet es completamente segura y no podemos garantizar la seguridad absoluta de los datos transmitidos a través de nuestro sitio web.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Cambios en el Aviso de Privacidad</h2>
        <p className="mb-4">
          Nos reservamos el derecho de actualizar este aviso de privacidad en cualquier momento. Te recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre nuestro aviso de privacidad, por favor contáctanos a través de [correo electrónico del restaurante] o visita nuestro restaurante en [dirección del restaurante].
        </p>
      </div>
    </div>
  )
}

export default page