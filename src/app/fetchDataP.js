
const getSuspender = (promise) => {
    let status = "pending";
    let response;
  
    const suspender = promise.then(
      (res) => {
        status = "success";
        response = res;
      },
      (err) => {
        status = "error";
        response = err;
        console.log('Fetch error:', err);  
      }
    );
    const read = () => {
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
  export function fetchDataP(url) { //a comparacion del fetchData, este archivo se encarga se recuperar la informacion de los platillos, a diferencia de las categorias
    //este no usa suspense, simplemente usa promesas
    const promise = fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();  
        })
        .catch(error => {
            console.error('Fetch error:', error);
            throw error;  
        });

    return promise;
}
