/* Nota 4.1 */

function MyDataTypes() {
    let IdNombre = 'Kennby';
    IdNombre = 706;

    console.log("IdNombre:", IdNombre);

    const FicNombre = "Kennby";
    const FicApellidos = "Glez Dguez"
    const FicNumControl = 706;
    const FicNumControl2 = 10749;
    const FicFechaReg = new Date();
    let FicExperiencia = 23;
    let FicActivo = true;
   
    return (
        <>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de Datos 
                </h1>
                <h1>
                    {IdNombre}
                </h1>
            </div>       
        </>
    );
};
export default MyDataTypes;