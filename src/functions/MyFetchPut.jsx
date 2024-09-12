/* Nota 3.9 */
function MyFetchAPIsPUT(){

    let usuario = {
        "name": "morpheus",
        "job": "leader"
    }
    fetch('https://reqres.in/api/user/1', {
    method: 'PUT',
    body: JSON.stringify(usuario), //data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {
        console.log('Error en la petición API PUT');
        console.log(error);
    });

    return(
        <>
            <div>
                <h1>
                    Programa para FETCH API PUT
                </h1>
            </div>
        </>
    );

};
export default MyFetchAPIsPUT;