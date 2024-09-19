/* Nota 4.4 */
import { useState } from "react";

export const useCounter = (inicial) => {

 const [valor, setValor] = useState(inicial);
 const acumular = (numero)=> {
     setValor(valor + numero);
 };
    return {
        valor, 
        acumular
    }

};