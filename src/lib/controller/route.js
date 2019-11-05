import Home from '../view/home.js';

//Creando objeto de los componentes
const components = {
    home: Home,
};
export const changeView = (route) => {
    const container = document.getElementById('root');
    container.innerHTML = '';
    switch (route) {
        case '#/home':
            container.appendChild(components.home());
            break;
    } 
};