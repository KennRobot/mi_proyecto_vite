
function MyPromises() {
    //enviar a la consola "Hola Mundo".
    console.log('¡Hola Mundo!');
    /* //funcion que recibe un nuemero y le suma uno.
    function fcnSumarUno( numero ){
        var promesa = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
      return promesa;
    } */
    /* PASO 7
     //llamado de la funcion y promesa
    fcnSumarUno(5).then( nuevoNumero=>{
        console.log(nuevoNumero);
    }); */

    //llamado de la funcion y promesa
    //de forma recursiva de manera encadenada.

    /*  PASO 9
    fcnSumarUno(5).then( nuevoNumero=>{
        console.log("Resultado:",nuevoNumero);
        return fcnSumarUno(nuevoNumero);
    }).then( nuevoNumero=>{
        console.log("Resultado:",nuevoNumero);
        return fcnSumarUno(nuevoNumero);
    }).then( nuevoNumero=>{
        console.log("Resultado:",nuevoNumero);
    }); */

    /* fcnSumarUno(5)
    .then( fcnSumarUno)
    .then( fcnSumarUno)
    .then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
    }); */

    //funcion que recibe un nuemero y le suma uno.
function fcnSumarUno( numero ){
    var promesa = new Promise(function(resolve, reject){
        if (numero >= 7 ){
            reject('El numero ya es muy alto');
        }
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
  return promesa;
};

//llamado de la funcion y promesa
//de forma recursiva y optimizada y con
//validacion de error.
fcnSumarUno(5)
    .then( fcnSumarUno)
    .then( fcnSumarUno)
    .then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
})
.catch(error =>{
    console.log('Error en la Promesa', error);
});
    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas de Kennby
                </h1>
            </div>
       
        </>
    );
};
export default MyPromises;