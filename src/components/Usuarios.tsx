import reqRespApi from "../api/reqResp.jsx"; // Asegúrate que este archivo existe
import { useEffect, useState } from "react";

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        // API call to fetch users
        reqRespApi.get<ReqRespUsuarioListado>('/users')
        .then(resp => {
            setUsuarios(resp.data.data);
        })
        .catch(err => console.log(err))
    }, []);

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img
                        src={usuario.avatar}
                        alt={usuario.first_name}
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>
                    {usuario.first_name} {usuario.last_name}
                </td>
                <td>
                    {usuario.email}
                </td>
            </tr>
        );
    };

    return (
        <table>
            <tbody>
                {usuarios.map(usuario => renderItem(usuario))}
            </tbody>
        </table>
    );
};
