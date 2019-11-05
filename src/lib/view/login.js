import { login } from '../controller/login-controller.js';


export default () => {
  // Template del login page
  const loginPage = `
  <figure>
  <img   class="login-logo"src="img/logo.jpg" alt="AlicorpHack">
</figure>
<div>

<div id="error-container">
  <span id="error"></span>
</div>
  
  
<form class="form">
  
  <input class="inputs " type="email" id="email" autocomplete="email" placeholder="Email" required />
  <input class="inputs" type="password" id="password" autocomplete  placeholder="Password" required />
  <div>
    <input type="submit" value="Log in" class="buttons" id="button-login" >
  </div>
 
  <div >
   
  </div>
</form>
</div>
`;

const divElem = document.createElement('div');
divElem.innerHTML = loginPage;
return divElem;
};

// const buttonLogin =  document.getElementById('button-login');

// buttonLogin.addEventListener('click', () => {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   try {
//     login( email,password);
//     redirect('home');
//   } catch (error) {
//   //console.log(error.code);
//   }
// });
