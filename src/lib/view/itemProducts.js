import { addProduct } from "../controller-firebase/controlador-fb.js";
export const itemProducts = (img, name, price_prom, price_suger, category, id) => {
    const divElem = document.createElement('div');
    const itemProduct = `
    <div class="contenedorProducto">
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
    console.log(id);
    addProduct(id);
});
    return divElem;

};