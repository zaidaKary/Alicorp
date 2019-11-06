export const itemAdmin = (dni, name, email) => {
    const divElem = document.createElement('div');
    const itemAdmin = `
    <div class="contenedorUsers">
    <table>
    <td>${name}</td>
    <td>${dni}</td>
    <td>${email}</td>
    </table>
    </div>`;
    divElem.innerHTML = itemAdmin;

    return divElem;
};