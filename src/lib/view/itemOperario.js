export const itemOperario = (dni, name, email, saldo) => {
    const divElem = document.createElement('div');
    const itemOperario = `
    <div class="contenedorUsers">
    <table>
    <td>${dni}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${saldo}</td>
    </table>
    </div>`;
    divElem.innerHTML = itemOperario;

    return divElem;
};