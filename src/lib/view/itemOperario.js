export const itemOperario = (dni, name, email, saldo) => {
    const divElem = document.createElement('div');
    const itemOperario = `
    <div class="contenedorUsers">
    <p>${dni}</p>
    <p>${name}</p>
    <p>${email}</p>
    <p>${saldo}</p>
    </div>`;
    divElem.innerHTML = itemOperario;

    return divElem;
};