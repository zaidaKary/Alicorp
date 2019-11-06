export const verInfoFb = (string) => {
  return firebase
    .firestore()
    .collection(string)
    .get();
};

export const addProduct = async idProduct => {
  const dataUser = await firebase
    .firestore()
    .collection("users")
    .doc("12345678abc")
    .get();
  const dataProduct = await firebase
    .firestore()
    .collection("products")
    .doc(idProduct)
    .get();
    console.log(dataUser.data().top_credit);
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
      .doc("12345678abc")
      .update({
        products: arr,
        saldo: sald,
        top_credit: cred
      });
  } else {
    alert("Tu credito no es suficiente");
  }
};
