export const verInfoFb = (string,category) => {
  return firebase
    .firestore()
    .collection(string).where("category", "==", category)
    .get();
};

export const verInfoAdmin = (string, rol) => {
  return firebase
    .firestore()
    .collection(string).where("roles", "==", rol)
    .get();
};

export const addProduct = async idProduct => {
  const idUser = firebase.auth().currentUser.uid;;

  const dataUser = await firebase
    .firestore()
    .collection("users")
    .doc(idUser)
    .get();
  const dataProduct = await firebase
    .firestore()
    .collection("products")
    .doc(idProduct)
    .get();
    console.log(dataUser.data().dni);
  if (dataUser.data().top_credit >= dataProduct.data().price_prom) {
    let arr = dataUser.data().products;
    arr.push(idProduct);
    console.log(arr);
    let sald = dataUser.data().saldo;
    let cred = dataUser.data().top_credit;
    let price = dataProduct.data().price_prom;
    sald = sald + price;
    cred = cred - price;
    firebase
      .firestore()
      .collection("users")
      .doc(idUser)
      .update({
        products: arr,
        saldo: sald,
        top_credit: cred
      });
  } else {
    alert("Tu credito no es suficiente");
  }
};
