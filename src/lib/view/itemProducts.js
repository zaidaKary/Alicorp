export const itemProducts = (data) => {
    const divElem = document.createElement('div');
    const itemProduct = `
    <div>
    <p>${data.name}</p>
    <img src=${data.img}>
    <p>${data.price_prom}</p>
    </div>`;

    divElem.innerHTML = itemProduct;
    return divElem;
};