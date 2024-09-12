/* NOTA 3.7 */
function MyFetchsAPIsGET() {
    function fcnXMLHttpRequest() {
        console.log("¡Execute GET API by XMLHttpRequest!");
        var request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/users', true );
        request.send(null);
       
        return new Promise(function(resolve, reject){
       
            request.onreadystatechange = function( state ){
           
                if (request.readyState === 4) {
                    //la respuesta obtiene un string.
                    var resp = request.response;
                    //ahora transformamos la cadena en formato
                    var respObj = JSON.parse(resp);
                    //enviamos el resultado a la consola.
                    //console.log( respObj );
                    //obtenemos solo la pagina actual.
                    //console.log( respObj.page);
                    //obtenemos solo la data de los usuarios.
                    //console.log( respObj.data);
                    resolve(respObj.data);
                };       
          };
        });
    };
  //*** Principal Code ***//
  //Llama la funcion local para ejecutar el GET API con la clase Fetch XMLHtppRequest
  fcnXMLHttpRequest()
  .then (response=> {
        console.log('Response XMLHttp:', response);
  });
  function fcnFetchRequest() {
    console.log("¡Execute GET API by Fetch!");
    //Función Fetch 
    fetch('https://reqres.in/api/users')
        //.then(resp => {
        //console.log("Response Fetch:",resp);
        //Para mandar todo en formato JSON.
        //resp.json().then(respjson=> {
        // console.log("Response Fetch:", respjson)
        .then(resp => resp.json())
        .then(respObj => {
                //console.log(respObj);
                //console.log(respObj.page);
                //console.log(respObj.per_page);
                console.log("Response Fetch:",respObj.data);
            });
};

//Llama la funcion local para ejecutar el GET API con la clase Fetch
fcnFetchRequest();
    
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH APIs GET
                </h1>
            </div>
       
        </>
    );
};
export default MyFetchsAPIsGET;