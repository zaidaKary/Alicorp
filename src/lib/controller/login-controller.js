import { signInWithEmailAndPassword } from '../model/modelLoginRegistro.js';
export const login = (email, pass, mensajeError) => {
  signInWithEmailAndPassword(email, pass)
    .then(() => {
      const auth = firebase.auth();
      return auth.onAuthStateChanged((user) => {
        if (user) {
          // El usuario ha iniciado sesión.
          const id = firebase.auth().currentUser.uid;
          // Obtención de datos de un documento
          console.log(firebase.auth().currentUser);
          firebase.firestore().collection('users').where("idUser", "==", id).get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log("Datos del documento:", doc.data());
              if(doc.data().roles === false){
                console.log(doc.data().roles);
                window.location.hash = '#/productos';
              }else{
                console.log(doc.data().roles);
                window.location.hash = '#/administtrador';
              }
            });
          }).catch((error) => {
            console.log("Error al obtener el documento", error);
          });
        } 
    });
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
          mensajeError.innerHTML = '*Se ha producido un error';
      }
    });
};
