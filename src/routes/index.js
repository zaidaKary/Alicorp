// Importamos todas las funciones que vamos a usar
import loginController from '../../controller/login.js.js';

import { redirect } from '../utils.js';
export default () => {
  // Creamos nuestro router
  const routerSwitch = async () => {
    const routesWithoutAuth = ['/login', '/register'];
    // Obtenemos la dirección de la página actual
    const { hash } = window.location;
    const currentRoute = hash.replace('#', '');
    let next;
    switch (currentRoute) {
      case '/login':
        next = loginController;
        break;
      case '/register':
        next = registerController;
        break;
      case '/home':
        next = homeController;
        break;
      case '/profile':
        next = profileController;
        break;

      case '/sign-out':
        firebase.auth().signOut().then(() => {
          redirect('login');
        });
        break;
      case '':
        redirect('home');
        return;
      default:
        document.getElementById('root').innerHTML = '404 not found';
        break;
    }

    // middleware
    firebase.auth().onAuthStateChanged((user) => {
      const noAuthNedeed = routesWithoutAuth.find(route => currentRoute === route);
      if (user) {
        if (noAuthNedeed) {
          redirect('home');
        } else {
          next();
        }
      } else if (noAuthNedeed) {
        next();
      } else {
        redirect('login');
      }
    });
  };


  window.onload = () => routerSwitch();

  // Cambiamos la vista
  window.addEventListener('hashchange', () => {
    routerSwitch();
  });
};