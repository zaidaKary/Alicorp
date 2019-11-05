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

const but = document.getElementById('but');
but.addEventListener('click',()=>{
  document.getElementById("root").innerHTML = loginPage;

})


const email = document.getElementById('email');
const password = document.getElementById('password');
console.log(email,password);