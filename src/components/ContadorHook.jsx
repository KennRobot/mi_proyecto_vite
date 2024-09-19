/* Nota 4.3 */
import React from 'react';
//import {useState} from 'react';
import { useCounter } from './hooks/useCounter';

export const ContadorHook = () => {

    const {valor, acumular} = useCounter(10);
    return (
        <div>
           
            <h1>
                Aprender useState
            </h1>

            <h2>
                Contador Hook: <small>{valor}</small>
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