import { itemProducts } from './itemProducts.js';

export default (arrayObjetProduct) => {
  const divElem = document.createElement('div');
  const viewHome = `
  <div id="products">
  </div>`;

  divElem.innerHTML = viewHome;
  const containerProducts = divElem.querySelector('#products');
  arrayObjetProduct.forEach((element) => {
    containerProducts.appendChild(itemProducts(element));
  });
  return divElem;
};