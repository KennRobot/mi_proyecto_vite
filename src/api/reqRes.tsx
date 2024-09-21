import axios from "axios";

// Configuración de Axios con la base URL de la API de reqres.in
export const reqRespApi = axios.create({
    baseURL: 'https://reqres.in/api',
});

export default reqRespApi;
