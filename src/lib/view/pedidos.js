export default () => {
    const viewPedidos = `
    <section id='portada'>
        <div>
            <h1>Pedidos</h1>
        </div>
    </section>
    `;

    const divElement = document.createElement('section');
    divElement.innerHTML = viewPedidos;

    return divElement;
}