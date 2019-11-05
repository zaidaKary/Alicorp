import { itemProducts } from './itemProducts.js';

export default (arrayObjetProduct) => {
  const divElem = document.createElement('div');
  const viewHome = `
  <header>
    <div class="menuHeader">
      <div class="headerLogo">
       <img class="logoalicorp" src="img/logoalicorp.png" alt="Logo alicorp"/>
      </div>
    <div class="menuHeaderDerecha">
      <div>
        <p>Saldo: 80 soles</p>
      </div>
      <div class="infoMenuDerecha">
        <img class="bolsa" src="img/bolsa.png" alt="Bolsa de compra"/>
        <p>Ver Bolsa de Compras</p>
      </div>
      <div class="infoMenuDerecha">
        <img class="user" src="img/user.png" alt="Usuario Perfil"/>
        <p>Julio Guzmán</p>
      </div>
      </div>
    </div>
    <div class="fondoHeader">
    <p class="lemaHeader">NUESTROS MEJORES PRODUCTOS</p>
    </div>
  </header>
  <div id="products">
  </div>`;

  divElem.innerHTML = viewHome;
  const containerProducts = divElem.querySelector('#products');
  arrayObjetProduct.forEach((element) => {
    containerProducts.appendChild(itemProducts(element));
  });
  return divElem;
};