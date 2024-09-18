/* Nota 4.2 */
function MyObjects(){
    const persona = { 
        nombre: 'Kennby', 
        edad: 33, 
        direccion: { 
            pais: 'Mexico', 
            estado: 'Nayarit', 
            ciudad: 'Tepic', 
            direccion: 'Av. Mexico' 
        }
    }
    //console.log("JSON Person:", JSON.stringify(person, null, 2))
    return(
        <>
            <div>
                <h1>Programa de Objetos Literales e Interfaces</h1>
                <h2>
                    <code> 
                        <pre> 
                            {/*JSON.stringify(persona)*/} 
                            {JSON.stringify(persona, null, 2)} 
                        </pre> 
                    </code> 
                </h2>
            </div>
        </>

    );
};
export default MyObjects