import { addProduct } from "../controller-firebase/controlador-fb.js";
export const itemProducts = (img, name, price_prom, price_suger, category, id) => {
    const divElem = document.createElement('div');
    const itemProduct = `
    <div id="contenedorProduct" class="contenedorProducto">
    <img class="fotoProducto" src=${img}>
    <p>${name}</p>
    <p>Precio real: ${price_prom}</p>
    <p>Precio sugerido: ${price_suger}</p>
    <p>${category}</p>
    <button type="button" id="añadir">Añadir</button>
    </div>`;
    divElem.innerHTML = itemProduct;

    const comprarProduct = divElem.querySelector('#añadir');
    comprarProduct.addEventListener('click', () => {
    addProduct(id);
});
// const pintarModal = (name) => {
//     const divElem = document.createElement('div');
//     const itemProduct = `
//     <div>
//     <p>${name}</p>
//     </div>`;
//     divElem.innerHTML = itemProduct;
//     return divElem;
// };
// const modal = divElem.querySelector('#contenedorProduct');
//     modal.addEventListener('click', () => {
//         pintarModal(name);    
// });
    return divElem;

};