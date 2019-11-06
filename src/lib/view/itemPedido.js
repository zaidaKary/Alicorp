
export const itemPedido = (idProducto) => {
    const divElem = document.createElement('div');
    const itemPedido = `
    <div class="contenedorProducto">   
    <p>${idProducto}</p>
    </div>`;
    divElem.innerHTML = itemPedido;
    return divElem;

};