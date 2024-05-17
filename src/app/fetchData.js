
const getSuspender = (promise) => { //Crea un objeto suspender que envuelve una promesa y rastrea su estado.
  let status = "pending"; //el estado inicial es pending
  let response; //variable que almacena la respuesta

  const suspender = promise.then(// El suspender rastrea el estado y la respuesta de la promesa
    (res) => {
      status = "success";//si la promesa se resuelve es success
      response = res;
    },
    (err) => { //si la promesa es rechazada
      status = "error";
      response = err;
      console.log('Fetch error:', err);  
    }
  );

  const read = () => {// Recupera la respuesta de la promesa o lanza un error si la promesa aún está pendiente o ha fallado.
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

export function fetchData(url) { //Recupera datos de una URL especificada y devuelve un objeto suspender para gestionar la promesa.
  const promise = fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);
      return response.json();
    })
    .then((json) => json);

  return getSuspender(promise);
}
