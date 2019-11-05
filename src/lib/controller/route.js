import Home from '../view/home.js';
import { getProducts } from '../model/getProducts.js';
// import Login from '../view/login.js';

//Creando objeto de los componentes
const components = {
    // login: Login,
    home: Home,
};
export const changeView = (route) => {
    const container = document.getElementById('root');
    container.innerHTML = '';
    switch (route) {
        // case '#/':
        //     container.appendChild(components.login());
        //     break;
        case '#/home':
            const productsData = (arrayObjetProduct) => {
                container.innerHTML = '';
                container.appendChild(components.home(arrayObjetProduct));
            };
            getProducts(productsData);
            break;
    } 
};