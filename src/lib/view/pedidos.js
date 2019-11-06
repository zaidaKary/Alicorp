export default () => {
    const viewPedidos = `
    <div>
        <h1>Bolsa de Compra</h1>
        <div id="containerBolsa">
        </div>
    </div>
    `;

    const divElement = document.createElement('section');
    divElement.innerHTML = viewPedidos;
    // const containerBolsa = divElement.querySelector('#containerBolsa');
    // arrayObjetProduct.forEach((element) => {
    //     containerBolsa.appendChild(itemProducts(element.img, element.name,
    //     element.price_prom, element.price_suger, element.category, element.id));
    // });
    return divElement;
}