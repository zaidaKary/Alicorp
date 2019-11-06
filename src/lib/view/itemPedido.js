
export const itemPedido = (img,name,categoria,price_prom,price_suger) => {
    const divElem = document.createElement('div');
    const itemPedido = `
    <div class="contenedorPedidoBolsa"> 
    <div class="imagen"> <img class="fotoProducto" src=${img}></div>
    <p class="name">${name}</p>
    <p class="name">${categoria}</p>
    <p class="name">S/.${price_prom}</p>
    <p class="name">Precio sugerido:S/. ${price_suger}</p>
    </div>`;
    divElem.innerHTML = itemPedido;
    return divElem;

};