// Importamos las funciones que vamos a usar.
import loginPage from '../view/login.js.js';
import { redirect } from '../utils.js';

export default () => {
  // Esta es nuestra vista del login.
  loginPage();
  // Aquí logueamos los usuarios creados. 
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
    try {
      console.log(email, password);
      await login(email, password);
      redirect('home');
    } catch (error) {
      errorController(error.code);
    }
  });

}