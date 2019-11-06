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
  const idUser = firebase.auth().currentUser.uid;

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
   
  if (dataUser.data().saldo >= dataProduct.data().price_prom) {
    let arr = dataUser.data().products;
    arr.push(idProduct);
    
    let sald = dataUser.data().saldo;
    let price = dataProduct.data().price_prom;
    
    sald = parseInt(sald - price, 10);
  
    firebase
      .firestore()
      .collection("users")
      .doc(idUser)
      .update({
        products: arr,
        saldo: sald
      });
  } else {
    alert("Tu credito no es suficiente");
  }
};

export const getProductUser = async (idUser, cb) => {
  
  const dataUser = await firebase
    .firestore()
    .collection("users")
    .doc(idUser)
    .get();
    const arrProducts = dataUser.data().products;
    let arrObjProducts = [];
    arrProducts.forEach( async element => {
      const dataProduct = await firebase
      .firestore()
      .collection("products")
      .doc(element)
      .get();
      const  dataProduc=  dataProduct.data();
     
      arrObjProducts.push(dataProduc);
   
    });
    console.log(arrObjProducts);
 cb(arrObjProducts);
};
