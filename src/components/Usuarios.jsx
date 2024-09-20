/* Nota 4.6 */
import reqRespApi from "../api/ReqRes.jsx";
import { useEffect } from "react";

export const Usuarios = () => {

    useEffect(() => {
        //FIC: llamado de la API
        reqRespApi.get('/users')
        .then(resp=> {
                console.log(resp.data.data);
        })
        .catch(err => console.log(err))
        }, [])
    return (
        <>
            <h3>Usuarios</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>
            </table>
        </>
    )
}