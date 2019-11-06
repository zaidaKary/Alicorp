export const itemAdmin = (dni, name, email) => {
    const divElem = document.createElement('div');
    const itemAdmin = `
    <div class="contenedorUsers">
    <p>${dni}</p>
    <p>${name}</p>
    <p>${email}</p>
    </div>`;
    divElem.innerHTML = itemAdmin;

    return divElem;
};