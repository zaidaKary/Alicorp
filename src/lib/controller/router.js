import { components } from '../controller/index.js';

export const changeTmp = (hash) => {
    const sectionMain = document.getElementById('root');
    sectionMain.innerHTML = '';
    switch (hash) {
        case '': 
        sectionMain.appendChild(components.login());
        break;
        case '#/productos': 
        sectionMain.appendChild(components.productos());
        break;
        case '#/pedidos': 
        sectionMain.appendChild(components.pedidos());
        break;
    }
};