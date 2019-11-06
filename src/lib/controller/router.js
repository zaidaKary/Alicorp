import Pedidos from '../view/pedidos.js';
import Productos from '../view/productos.js';
import Login from '../view/login.js';
import { getProducts } from '../model/getProducts.js';

export const components = {
    login: Login,
    pedidos: Pedidos,
    productos: Productos,
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
        case '#/pedidos': 
        sectionMain.appendChild(components.pedidos());
        break;
    }
};