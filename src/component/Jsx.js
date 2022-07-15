import React, {useState, Fragment} from 'react';
import Conta from './contar';
import App from '../App' 

const Jsx = (props) => {
    const[contadorValue,updateContador]=useState(13)
 /*const contador = useState(13)
 const contadorValue = contador[0]
 const updateContador  = contador[1] */ 
 
 setInterval(()=>{
    updateContador(contadorValue+1)
 },2000)

 return  <h1>{contadorValue}</h1>
}
 



 export default Jsx;