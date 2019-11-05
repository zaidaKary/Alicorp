import { signInWithEmailAndPassword } from '../model/modelLoginRegistro.js';
export const login = (email, pass, mensajeError) => {
  console.log(email);
  signInWithEmailAndPassword(email, pass)
    .then(() => {
      window.location.hash = '#/productos';
    })
    .catch((error) => {
      const errorCode = error.code;
      switch (errorCode) {
        case 'auth/user-not-found':
          mensajeError.innerHTML = '*Usuario no registrado. Por favor, registrarse.';
          break;
        case 'auth/wrong-password':
          mensajeError.innerHTML = '*La contraseña es incorrecta.';
          break;
        case 'auth/invalid-email':
          mensajeError.innerHTML = '*El formato del correo ingresado no es válido, verifica e intente de nuevo.';
          break;
        default:
          mensajeError.innerHTML = 'Se ha producido un error';
      }
    });
};