import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import App from './App.jsx' */
import './index.css'
import MyFunctions from './functions/MyFunctions.jsx'
import MyPromises from './functions/MyPromises.jsx'
import MyPromisesAll from './functions/MyPromisesAll.jsx'
import MyPromisesRace from './functions/MyPromiseRace.jsx'
import MyFetchsAPIs from './functions/MyFetchs.jsx'
import MyFetchsAPIsGET from './functions/MyFetchsGET.jsx'
import MyFetchsAPIsPost from './functions/MyFetchPost.jsx'
import MyFetchAPIsBlob from './functions/MyFetchBlob.jsx'
import MyFetchAPIsPUT from './functions/MyFetchPut.jsx'
import MyDataTypes from './methods/MyDataTypes.jsx'
import MyObjects from './methods/MyObjects.jsx'
import { Contador } from './components/Contador.jsx'
import { ContadorHook } from './components/ContadorHook.jsx'
import { Login } from './components/Login.jsx'
import { Usuarios } from './components/Usuarios.tsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions></MyFunctions> */}
    {/* <MyPromises></MyPromises> */}
    {/* <MyPromisesAll></MyPromisesAll> */}
    {/* <MyPromisesRace></MyPromisesRace> */}
    {/* <MyFetchsAPIsGET></MyFetchsAPIsGET> */}
    {/* <MyFetchsAPIsPost></MyFetchsAPIsPost> */}
    {/* <MyFetchAPIsPUT></MyFetchAPIsPUT> */}
    {/* <MyFetchAPIsBlob></MyFetchAPIsBlob> */}
    {/* <MyDataTypes></MyDataTypes> */}
    {/* <MyObjects></MyObjects> */}
    {/* <Contador></Contador> */}
    {/* <ContadorHook></ContadorHook> */}
    {/* <Login></Login> */}
    <Usuarios></Usuarios>
  </StrictMode>,
)

