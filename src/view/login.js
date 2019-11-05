import { template } from '../utils.js';


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

  template(loginPage);
  document.getElementById('root').classList.add('container');
  document.getElementById('body').classList.remove('body-home');
};