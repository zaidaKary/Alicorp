//funcion que obtiene los productos de firebase
export const getProducts = (dataProducts) => {
    firebase.firestore().collection('products')
    .onSnapshot((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
            array.push({ id: doc.id, ...doc.data() });
        });
        dataProducts(array);
    });
};