
export const itemPedido = (img,name,categoria,price_prom,price_suger) => {
    const divElem = document.createElement('div');
    const itemPedido = `
    <div class="contenedorProducto"> 
    <img class="fotoProducto" src=${img}>  
    <p>${name}</p>
    <p>${categoria}</p>
    <p>${price_prom}</p>
    <p>${price_suger}</p>
    </div>`;
    divElem.innerHTML = itemPedido;
    return divElem;

};