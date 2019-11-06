export const obtenerUser = (name, saldo) => {
    const auth = firebase.auth();
    return auth.onAuthStateChanged((user) => {
      if (user) {
        // El usuario ha iniciado sesión.
        const id = firebase.auth().currentUser.uid;
        // Obtención de datos de un documento
        console.log(id);
        firebase.firestore().collection('users').where("idUser", "==", id).get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log("Datos del documento:", doc.data());
              console.log(doc.data().name);
              console.log(doc.data().saldo);
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