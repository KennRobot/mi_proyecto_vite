/* Nota 4.3 */
import React from 'react';
import {useState} from 'react';
export const Contador = () => {
    //use state para "valor"
    const [valor, setValor] = useState(1);
    //funcion que incrementa o decrementa el valor automaticamente
    const acumular = (numero)=> {
        setValor(valor + numero);
    };
    console.log(valor);
    return (
        <div>
           
            <h1>
                Aprender useState
            </h1>

            <h2>
                Contador: <small>{valor}</small>
            </h2>

            <button onClick={()=> acumular(1)}>
                Sumar (+1)
            </button> 
            &nbsp;
            <button onClick={()=> acumular(-1)}>
                Restar (-1)
            </button>
        </div>
    )
};