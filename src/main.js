// Este es el punto de entrada de tu aplicacion
import {changeView} from './lib/controller/route.js';

const init = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCj2f2ozG16TIOa-uJqQsRZzdTQX1Iqo04",
    authDomain: "alicorp-e8409.firebaseapp.com",
    databaseURL: "https://alicorp-e8409.firebaseio.com/",
    projectId: "alicorp-e8409",
    storageBucket: "alicorp-e8409.appspot.com",
    messagingSenderId: "989939578907",
    appId: "1:989939578907:web:7a62e7ecc2314d3e5be0be",
    measurementId: "G-RSP54LZPJC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  changeView(window.location.hash);
  console.log(window);
  console.log(window.location);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
