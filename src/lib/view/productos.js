import { verInfoFb } from "../controller-firebase/controlador-fb.js";
import {addProduct} from "../controller-firebase/controlador-fb.js"
export default () => {
    const viewProductos = `
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

    const productos = divElement.querySelector('#btnProductos');
    productos.addEventListener('click', () => {
        const datos = document.getElementById('containerCentral');
        datos.innerHTML = '';
        let aux;
        verInfoFb('products')
        .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    datos.innerHTML += `<div class="contenedorProducto" data-set="${doc.id}" data-price="${doc.data().id}">
                    <img class="fotoProducto" src="${doc.data().img}">
                    <p>${doc.data().name}</p>
                    <p>${doc.data().category}</p>
                    <button type="button"  id ="products">Comprar</button>     
                    </div>`
                    aux =  doc.id;
                   
                });
                const comprarProduct = document.getElementById('products')
                comprarProduct.addEventListener('click',()=>{

                    addProduct(aux);
                })

            })
            .catch(() => console.log('error'));
    })

    const pastas = divElement.querySelector('#btnPastas');
    pastas.addEventListener('click', () => {
        const docu = document.getElementById('containerCentral');
        docu.innerHTML = '';
        verInfoFb('products')
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                   if(doc.data().category==='pastas'){
                    docu.innerHTML += `<div class="contenedorProducto" data-set="${doc.id}" data-price="${doc.data().id}">
                    <img class="fotoProducto" src="${doc.data().img}">
                    <p>${doc.data().name}</p>
                    <button type="button" id="pasta">Comprar</button>    
                    </div>`
                   }
                   console.log('entramos');
                   const comprarPasta = document.getElementById('pasta')
                   comprarPasta.addEventListener('click',()=>{
                       console.log('comprarPasta');
                   })
               
                });

            })
            .catch(() => console.log('error'));
    })


 
   
        
    

    const detergentes = divElement.querySelector('#btnDetergentes');
    detergentes.addEventListener('click', () => {
        const docum = document.getElementById('containerCentral');
        docum.innerHTML = '';
        verInfoFb('products')
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (doc.data().category === 'detergentes') {
                        docum.innerHTML += `<div class="contenedorProducto" data-set="${doc.id}" data-price="${doc.data().id}">
                        <img class="fotoProducto" src="${doc.data().img}">
                        <p>${doc.data().name}</p>
                        <button type="button">Comprar</button>   </div>`
                    }
                });

            })
            .catch(() => console.log('error'));
    })

    const aceites = divElement.querySelector('#btnAceites');
    aceites.addEventListener('click', () => {
        const documen = document.getElementById('containerCentral');
        documen.innerHTML = '';
        verInfoFb('products')
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (doc.data().category === 'aceites') {
                        documen.innerHTML += `<div class="contenedorProducto" data-set="${doc.id}" data-price="${doc.data().id}">
                        <img class="fotoProducto" src="${doc.data().img}">
                        <p>${doc.data().name}</p>
                        <button type="button" >Comprar</button>  </div>`
                    }
                });

            })
            .catch(() => console.log('error'));
    })

    const conservas = divElement.querySelector('#btnConservas');
    conservas.addEventListener('click', () => {
        const documentt = document.getElementById('containerCentral');
        documentt.innerHTML = '';
        verInfoFb('products')
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (doc.data().category === 'conservas') {
                        documentt.innerHTML += `<div class="contenedorProducto" data-set="${doc.id}" data-price="${doc.data().id}">
                        <img class="fotoProducto" src="${doc.data().img}">
                        <p>${doc.data().name}</p>
                        <p>${doc.data().priceprom}</p>
                        <button type="button" >Comprar</button>   </div>`
                    }
                });

            })
            .catch(() => console.log('error'));
    })
    const jabones = divElement.querySelector('#btnJabones');
    jabones.addEventListener('click', () => {
        const documento = document.getElementById('containerCentral');
        documento.innerHTML = '';
        verInfoFb('products')
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    if (doc.data().category === 'jabones') {
                        documento.innerHTML += `<div class="contenedorProducto" data-set="${doc.id}" data-price="${doc.data().id}">
                        <img class="fotoProducto" src="${doc.data().img}">
                        <p>${doc.data().name}</p>
                        <button type="button" >Comprar</button>   </div>`
                    }
                });

            })
            .catch(() => console.log('error'));
    })

    return divElement;
}


       
       
           