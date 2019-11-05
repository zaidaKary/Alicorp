import { login } from '../controller/login-controller.js';

export default () => {
  // Template del login page
  const loginPage = `
  <img class="login-logo"src="img/logo.jpg" alt="AlicorpHack">
  <div>
    <div id="error-container">
      <span id="error"></span>
    </div>
    <form class="form">
      <input class="inputs" type="email" id="email" autocomplete="email" placeholder="✉ Email" required />
      <input class="inputs" type="password" id="password" autocomplete="password" placeholder="🔒 Contraseña" required />
      <div>
        <input type="button" value="Log in" class="buttons" id="button-login">
        <p id ="mensaje-error"></p>
      </div>
    </form>
</div>`;

const divElem = document.createElement('div');
divElem.innerHTML = loginPage;
const mensajeError = divElem.querySelector('#mensaje-error');
const buttonLogin = divElem.querySelector('#button-login');
buttonLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const email = divElem.querySelector('#email').value;
  const password = divElem.querySelector('#password').value;
  try {
    login( email, password, mensajeError);
  } catch (error) {
  console.log(error);
  }
});
return divElem;
};

