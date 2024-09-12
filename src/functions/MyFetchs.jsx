
function MyFetchsAPIs() {
    
    var request = new XMLHttpRequest();
    request.open('GET', 'https://reqres.in/api/users', true );
    request.send(null);
    request.onreadystatechange = function( state ){
        if (request.readyState === 4) {
            //KEN: la respuesta obtiene un string.
            var resp = request.response;
            //KEN: ahora transformamos la cadena en formato
            var respObj = JSON.parse(resp);
            //KEN: enviamos el resultado a la consola.
            console.log( respObj );
            //KEN: obtenemos solo la pagina actual.
            console.log( respObj.page);
            //KEN: obtenemos solo la data de los usuarios.
            console.log( respObj.data);
        }   
    }
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH APIs
                </h1>
            </div>
       
        </>
    );
};
export default MyFetchsAPIs;