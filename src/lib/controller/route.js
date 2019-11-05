import Login from '../view/login-view.js';

// Creando un objeto de los componenetes
const components = {
  login: Login,
  home: Home,
  register: Register,
  profile: Profile,
  different: Different,
};

export const changeView = (route) => {
  // nos trae el window.location.hash del main.js cada vez que
  // cambiemos la URL para poder asociar a cada uno de las vistas
  const container = document.getElementById('root');
  container.innerHTML = '';
  switch (route) {
    case '#/':
      container.appendChild(components.login());
      break;
   
    default:
      container.appendChild(components.different());
      break;
  }
};