
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
        console.log('Fetch error:', err);  // Log detailed error information
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
  
  export function fetchDataP(url) {
    const promise = fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();  // Ensures JSON parsing is attempted only after a successful response
        })
        .catch(error => {
            console.error('Fetch error:', error);
            throw error;  // Re-throw to ensure errors are propagated
        });

    return promise;
}
