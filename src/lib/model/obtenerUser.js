export const obtenerUser = (name, saldo) => {
    const auth = firebase.auth();
    return auth.onAuthStateChanged((user) => {
      if (user) {
        // El usuario ha iniciado sesión.
        const id = firebase.auth().currentUser.uid;
        // Obtención de datos de un documento
     
        firebase.firestore().collection('users').where("idUser", "==", id).get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
             
              name.textContent = doc.data().name;
              saldo.textContent = doc.data().saldo;
            });
          }).catch((error) => {
            console.log("Error al obtener el documento", error);
          });
      } else {
        // Ningún usuario ha iniciado sesión.
      }
    });
  };