/* Nota 4.5 */
import { useReducer } from "react";
import { useEffect } from "react";
export const Login = () => {
    //const [{validando, token}, dispatch] = useReducer(authReducer, initialState)
    
    const initialState = {
        validando: true,
        token: null,
        nombre: ''
    };

    const authReducer = (state, action) => {
        switch (action.type) {
            case 'login':
                return {
                    ...state,
                    token: 'ABC123',
                    nombre: action.payload.nombre,
                    validando: false
                };
            case 'logout':
                return {
                    ...state,
                    token: null,
                    nombre: '',
                    validando: false
                };
            default:
                return state;
        }
    };
    
    const [state, dispatch] = useReducer(authReducer, initialState)
    useEffect(() => {
        setTimeout(() => {
          dispatch({type:'logout'}) 
        }, 2500);
    }, []);
    //FIC: si se agregara una dependencia 
    if (state.validando) {
        return (
        <>
            <h3>Login</h3>
                <div className="ficAlertInfo_Div">
                    Validando Información...
                </div>   
        </>
        )
    }
    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'Kenn',
                nombre: 'Kennby'
            }
        })
    }
    return (
        <>
            <h3>Login</h3>
            {
            (  state.token  )
                ? 
                (
                    <div className="ficAlertSuccess_Div">
                        Autenticado como: { state.nombre }
                    </div>
                )
                : 
                (   
                    <div className="ficAlertDanger_Div">
                        No Autenticado...
                    </div>
                )
            }
            {
                ( state.token )
                ? ( 
                    <button
                        className="ficLogout_Button"
                        onClick={ login }
                    >
                        Logout   
                    </button> 
                )
                : (   
                    <button
                        className="ficLogin_Button"
                        onClick={ login }
                        >
                        Login   
                    </button>   
                )
            }           
        </>
    )
}