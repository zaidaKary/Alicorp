import { verInfoFb } from "../controller-firebase/controlador-fb.js";
import { cerrarSesion } from '../model/cerrarSesion.js';
import { obtenerUser } from '../model/obtenerUser.js';
import { itemProducts } from '../view/itemProducts.js';
export default (arrayObjetProduct) => {
    const viewProductos = `
    <header>
    <div class="menuHeader">
      <div class="headerLogo">
       <img class="logoalicorp" src="img/logoalicorp.png" alt="Logo alicorp"/>
      </div>
    <div class="menuHeaderDerecha">
      <div>
      <div class="saldoHeader">
        <p>S/</p><p id="saldo"></p>
        </div>
        <p>Saldo disponible</p>
      </div>
      <div id="btn-bolsacompra" class="infoMenuDerecha">
        <img class="bolsa" src="img/bolsa.png" alt="Bolsa de compra"/>
        <p>Ver Bolsa de Compras</p>
      </div>
      <div class="infoMenuDerecha">
        <img class="user" src="img/usuario.png" alt="Usuario Perfil"/>
        <p id="name"></p>
      </div>
      <div id="btn-cerrar" class="infoMenuDerecha">
      <img class="user" src="img/cerrarsesion.png" alt="Usuario Perfil"/>
      <p>Cerrar Sesión</p>
    </div>
      </div>
    </div>
    <div class="fondoHeader">
    <p class="lemaHeader">NUESTROS MEJORES PRODUCTOS</p>
    </div>
  </header>
    <div id='portada'>
        <h1 class="product">Productos</h1>
        <div class="containerFlex">
        <div id="containerBotones">
            <div class="containerBotones">
            <button id="btnProductos" class="productos">All</button>
            <button id="btnPastas" class="pastas">Pastas</button>
            <button id="btnDetergentes" class="detergentes">Detergentes</button>
            <button id="btnAceites" class="aceites">Aceites</button>
            <button id="btnConservas" class="conservas">Conservas</button>
            <button id="btnJabones" class="jabones">Jabones</button>
            </div>
        </div>
        <div id="containerCentral"></div>
        </div>
    </div>
    `;

    const divElement = document.createElement('section');
    divElement.innerHTML = viewProductos;
    //boton cerrar
    const btnCerrar = divElement.querySelector('#btn-cerrar');
    btnCerrar.addEventListener('click', (e) => {
        e.preventDefault();
        cerrarSesion();
        window.location.hash = '';
      });
      //boton ver bolsa de compra
      const btnBolsacompra = divElement.querySelector('#btn-bolsacompra');
      btnBolsacompra.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '#/bolsaCompra';
      });
      //informacion de usuario para el menu (nombre y saldo)
      const name = divElement.querySelector('#name');
      const saldo = divElement.querySelector('#saldo');
      obtenerUser(name, saldo);
      //pintando productos al iniciar sesion
    const containerProducts = divElement.querySelector('#containerCentral');
    arrayObjetProduct.forEach((element) => {
      containerProducts.appendChild(itemProducts(element.img, element.name,
        element.price_prom, element.price_suger, element.category, element.id));
    });
    //opcion ALL
   const productos = divElement.querySelector('#btnProductos');
   productos.addEventListener('click', () => {
     const containerProducts = divElement.querySelector('#containerCentral');
     containerProducts.innerHTML = '';
     arrayObjetProduct.forEach((element) => {
      containerProducts.appendChild(itemProducts(element.img, element.name,
        element.price_prom, element.price_suger, element.category, element.id));
    });
   });
    //opcion Pastas
    const pastas = divElement.querySelector('#btnPastas');
    pastas.addEventListener('click', () => {
      const containerProducts = divElement.querySelector('#containerCentral');
      containerProducts.innerHTML = '';
      verInfoFb('products','pastas')
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          containerProducts.appendChild(itemProducts(doc.data().img,
          doc.data().name, doc.data().price_prom, doc.data().price_suger, doc.data().category,
          doc.data().id));
          console.log(doc.data().name);
        });
      })
    });    
    //opcion Detergentes
    const detergentes = divElement.querySelector('#btnDetergentes');
    detergentes.addEventListener('click', () => {
      const containerProducts = divElement.querySelector('#containerCentral');
      containerProducts.innerHTML = '';
      verInfoFb('products','detergentes')
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          containerProducts.appendChild(itemProducts(doc.data().img,
          doc.data().name, doc.data().price_prom, doc.data().price_suger, doc.data().category,
          doc.data().id));
          console.log(doc.data().name);
        });
      })
    });    
    //opcion Aceites
    const aceites = divElement.querySelector('#btnAceites');
    aceites.addEventListener('click', () => {
      const containerProducts = divElement.querySelector('#containerCentral');
      containerProducts.innerHTML = '';
      verInfoFb('products','aceites')
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          containerProducts.appendChild(itemProducts(doc.data().img,
          doc.data().name, doc.data().price_prom, doc.data().price_suger, doc.data().category,
          doc.data().id));
          console.log(doc.data().name);
        });
      })
    });     
    //opcion Conservas
    const conservas = divElement.querySelector('#btnConservas');
    conservas.addEventListener('click', () => {
      const containerProducts = divElement.querySelector('#containerCentral');
      containerProducts.innerHTML = '';
      verInfoFb('products','conservas')
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          containerProducts.appendChild(itemProducts(doc.data().img,
          doc.data().name, doc.data().price_prom, doc.data().price_suger, doc.data().category,
          doc.data().id));
          console.log(doc.data().name);
        });
      })
    });     
    //opcion Jabones
    const jabones = divElement.querySelector('#btnJabones');
    jabones.addEventListener('click', () => {
      const containerProducts = divElement.querySelector('#containerCentral');
      containerProducts.innerHTML = '';
      verInfoFb('products','jabones')
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          containerProducts.appendChild(itemProducts(doc.data().img,
          doc.data().name, doc.data().price_prom, doc.data().price_suger, doc.data().category,
          doc.data().id));
          console.log(doc.data().name);
        });
      })
    }); 
    return divElement;
}


       
       
