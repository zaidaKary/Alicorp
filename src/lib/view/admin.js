import { verInfoAdmin, verInfoUser } from "../controller-firebase/controlador-fb.js";
import { itemAdmin } from '../view/itemAdmin.js';
import { itemOperario } from '../view/itemOperario.js';
import { cerrarSesion } from '../model/cerrarSesion.js';

export default (arrayObjetUsers) => {
    const viewAdmin = `
    <header>
        <div class="menuHeader">
            <div class="headerLogo">
                <img class="logoalicorp" src="img/logoalicorp.png" alt="Logo alicorp"/>
            </div>
            <div id="btn-cerrar" class="infoMenuDerecha">
                <img class="user" src="img/cerrarsesion.png" alt="Usuario Perfil"/>
                <p>Cerrar Sesión</p>
            </div>
        </div>
    </header>
    <div id='portada'>
        <h1 class="product">Usuarios: Administradores y Operarios</h1>
        <div class="containerFlex">
        <div id="containerBotones">
            <div class="containerBotones">
            <button id="btnUsuarios">Todos los Usuarios</button>
            <button id="btnAdministradores">Administradores</button>
            <button id="btnOperarios">Operarios</button>
            </div>
        </div>
        <div id="containerUsers"></div>
        </div>
    </div>
    `;

    const divElement = document.createElement('section');
    divElement.innerHTML = viewAdmin;    
    //boton cerrar
    const btnCerrar = divElement.querySelector('#btn-cerrar');
    btnCerrar.addEventListener('click', (e) => {
        e.preventDefault();
        cerrarSesion();
        window.location.hash = '';
    });
    //Pintando usuarios
    const containerUsers = divElement.querySelector('#containerUsers');
    arrayObjetUsers.forEach((element) => {
        containerUsers.appendChild(itemAdmin(element.dni, element.name,
        element.email));
    });
    //opcion Todos los usuarios
   const usuarios = divElement.querySelector('#btnUsuarios');
   usuarios.addEventListener('click', () => {
     const containerUsers = divElement.querySelector('#containerUsers');
     containerUsers.innerHTML = '';
     arrayObjetUsers.forEach((element) => {
        containerUsers.appendChild(itemAdmin(element.dni, element.name,
            element.email));
    });
   });
    //opcion Administradores
   const administrador = divElement.querySelector('#btnAdministradores');
   administrador.addEventListener('click', () => {
     const containerUsers = divElement.querySelector('#containerUsers');
     containerUsers.innerHTML = '';
     verInfoAdmin('users', true)
     .then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
        containerUsers.appendChild(itemAdmin(doc.data().dni,
         doc.data().name, doc.data().email));
         console.log(doc.data().roles);
       });
     })
   });
   //opcion Operarios
   const operarios = divElement.querySelector('#btnOperarios');
   operarios.addEventListener('click', () => {
     const containerUsers = divElement.querySelector('#containerUsers');
     containerUsers.innerHTML = '';
     verInfoUser('users', false)
     .then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
        containerUsers.appendChild(itemOperario(doc.data().dni,
         doc.data().name, doc.data().email, doc.data().saldo));
         console.log(doc.data().roles);
       });
     })
   });
    return divElement;
}
