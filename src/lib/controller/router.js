import Pedidos from '../view/pedidos.js';
import Productos from '../view/productos.js';
import Login from '../view/login.js';
import Administrador from '../view/admin.js';
import { getProducts } from '../model/getProducts.js';
import { getUsers } from '../model/getUsers.js';
import { getPedidos } from '../model/getPedidos.js';

export const components = {
    login: Login,
    pedidos: Pedidos,
    productos: Productos,
    administrador: Administrador,
};
export const changeTmp = (hash) => {
    const sectionMain = document.getElementById('root');
    sectionMain.innerHTML = '';
    switch (hash) {
        case '': 
        sectionMain.appendChild(components.login());
        break;
        case '#/productos': 
        const productsData = (arrayObjetProduct) => {
            sectionMain.appendChild(components.productos(arrayObjetProduct));
        };
        getProducts(productsData);
        break;
        case '#/bolsaCompra': 
        const productosPedido = (arrayObjetUsers) => {
            sectionMain.appendChild(components.pedidos(arrayObjetUsers));
        };
        getPedidos(productosPedido);
        break;
        case '#/administtrador': 
        const usersData = (arrayObjetUsers) => {
            sectionMain.appendChild(components.administrador(arrayObjetUsers));
        };
        getUsers(usersData);
        break;
    }
};