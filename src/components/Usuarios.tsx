import { useState, useEffect } from "react";
import reqRespApi from "../api/reqRes";
import { Usuario, ReqRespUsuarioListado } from "../interfaces/reqRes";

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);

    useEffect(() => {
        cargarUsuarios(pagina);
    }, [pagina]);

    const cargarUsuarios = async (pagina: number) => {
        try {
            const resp = await reqRespApi.get<ReqRespUsuarioListado>('/users', {
                params: {
                    page: pagina
                }
            });
            setUsuarios(resp.data.data);
            setTotalPaginas(resp.data.total_pages);
        } catch (err) {
            console.log(err);
        }
    };

    const paginaSiguiente = () => {
        if (pagina < totalPaginas) {
            setPagina(pagina + 1);
        }
    };

    const paginaAnterior = () => {
        if (pagina > 1) {
            setPagina(pagina - 1);
        }
    };

    const renderItem = (usuario: Usuario) => (
        <tr key={usuario.id}>
            <td><img src={usuario.avatar} alt={usuario.first_name} style={{ width: 50, borderRadius: 100 }} /></td>
            <td>{usuario.first_name} {usuario.last_name}</td>
            <td>{usuario.email}</td>
        </tr>
    );

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => renderItem(usuario))}
                </tbody>
            </table>

            <div className="paginacion">
                <button onClick={paginaAnterior} disabled={pagina === 1}>
                    Anterior
                </button>
                <span>Página {pagina} de {totalPaginas}</span>
                <button onClick={paginaSiguiente} disabled={pagina === totalPaginas}>
                    Siguiente
                </button>
            </div>
        </>
    );
};
