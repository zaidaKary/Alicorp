export const itemProducts = (data) => {
    const divElem = document.createElement('div');
    const itemProduct = `
    <div>
    <img class="imagenProducto" src=${data.img}>
    <p>Precio real: ${data.price_prom}</p>
    <p>Precio sugerido: ${data.price_suger}</p>
    <button>Añadir</button>
    </div>`;
    divElem.innerHTML = itemProduct;
    return divElem;
};