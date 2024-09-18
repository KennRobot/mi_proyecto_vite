/* Nota 4.1 */

function MyDataTypes() {
    let IdNombre = 'Kennby';
    IdNombre = 706;

    console.log("IdNombre:", IdNombre);

    const Nombre = "Kennby";
    const Apellidos = "Glez Dguez"
    const NumControl = 706;
    const NumControl2 = 10749;
    const FechaReg = new Date();
    let Experiencia = 23;
    let Activo = true;
    //Arreglos
    let Pasatiempos = ['futbol ', 'basquet ', 'leer manga ', 'series y peliculas '];
    //Agregamos elementos al arreglo
    Pasatiempos.push(' loteria');
    Pasatiempos.push(' baraja ');
    Pasatiempos.push(706);
    Pasatiempos.push(true);
    console.log("Pasatiempos:", Pasatiempos);
    let Libros = [];
    Libros.push(1533);
    Libros.push(true);
    Libros.push("El Principito ");
    console.log("Libros:", Libros);
   
    return (
        <>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de de Datos
                </h1>
                <h2>
                            {IdNombre} 
                    <br/>
                            {Nombre},
                    <br/>
                            {Apellidos},
                    <br/>
                            {NumControl},
                    <br/>
                            {NumControl2},
                    <br/>
                            {FechaReg.toString()},
                    <br/>
                            {Experiencia},
                    <br/>
                            {(Activo) ? 'Activo' : 'No Activo'}

                            Pasatiempos: {Pasatiempos}, <br/>
                            Libros: {Libros[0]},   
                                    {(Libros[1]) ? 'Activo' : 'No Activo'},
                                    {Libros[2]}
                </h2>
            </div>
       
        </>
    );
};
export default MyDataTypes;