// import { addProduct } from "../controller-firebase/controlador-fb.js";
export const itemProducts = (data) => {
    const divElem = document.createElement('div');
    const itemProduct = `
    <div class="contenedorProducto">
    <img class="fotoProducto" src=${data.img}>
    <p>${data.name}</p>
    <p>Precio real: ${data.price_prom}</p>
    <p>Precio sugerido: ${data.price_suger}</p>
    <p>${data.category}</p>
    <button type="button" id="añadir">Añadir</button>
    </div>`;
    divElem.innerHTML = itemProduct;
    
    const comprarProduct = divElem.querySelector('#añadir');
    comprarProduct.addEventListener('click', () => {
    console.log('hola');
    // addProduct(element.id);
});
    return divElem;

};