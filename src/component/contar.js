import React, {useState, Fragment} from 'react';
import Jsx from './Jsx';

const Conta = () => {

const [numero, setNumero] = useState(23)
console.log(numero)
const mas = () => {
 console.log("comer mas patatas")
 setNumero(numero + 1)
}
const menos = () => {
    console.log("comer menos patatas")
    setNumero(numero - 1) } 

    const tempe = () => {
        numero> 22 ? 'calor':'frio'
        return{}
    }


    return (
        <Fragment>
        <h3>patatas fritas {numero}</h3>
        <button onClick={mas}>Mas</button>
        <h4>{tempe}</h4>
        <br></br>
        
        <button onClick={menos}>menos</button>
        </Fragment>
     );

     
}
 



    

export default Conta;
