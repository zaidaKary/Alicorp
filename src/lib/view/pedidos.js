 import { itemPedido } from '../view/itemPedido.js';
 import {getUserLogAcum} from'../controller-firebase/controlador-fb.js';
export default (arrayObjetUsers) => {
    const viewPedidos = `
    <div>
        <h1>Bolsa de Compra</h1>
        <div id="containerBolsa">
        </div>
    </div>
    `;

    const divElement = document.createElement('section');
    divElement.innerHTML = viewPedidos;
     const containerBolsa = divElement.querySelector('#containerBolsa');
    arrayObjetUsers.forEach((element) => {
         containerBolsa.appendChild(itemPedido(element.img ,element.name,element.category,element.price_prom,element.price_suger));
    });
 
    
    getUserLogAcum().then((result) => {
        const ganancia =document.createElement('p').appendChild(document.createTextNode(`La ganacia acumulada es de: ${result}`));
        containerBolsa.appendChild(ganancia);
    })

    return divElement;
}