 import { itemPedido } from '../view/itemPedido.js';
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
        console.log('acaaaaaaa',element);
         containerBolsa.appendChild(itemPedido(element.img ,element.name,element.category,element.price_prom,element.price_suger));
    });
    return divElement;
}