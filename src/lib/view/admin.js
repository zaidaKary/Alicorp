export default () => {
    const viewAdmin = `
    <div>
        <h1>Hola Admin</h1>
        <div id="containerBolsa">
        </div>
    </div>
    `;

    const divElement = document.createElement('section');
    divElement.innerHTML = viewAdmin;
    return divElement;
}