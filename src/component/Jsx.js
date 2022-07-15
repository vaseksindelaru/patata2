import React, {useState, Fragment} from 'react';
import Conta from './contar';
import App from '../App' 

const Jsx = (props) => {
    const[contadorValue,updateContador]=useState(13)
 /*const contador = useState(13)
 const contadorValue = contador[0]
 const updateContador  = contador[1] */ 
 const tocar = ()=>{updateContador(contadorValue+12)}

 return(
 <div>
 <h1>{contadorValue}</h1>
 <button onClick={tocar}>subir12</button>
 </div>)
}
 



 export default Jsx;