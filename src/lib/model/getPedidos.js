//funcion que obtiene los pedidos de firebase
export const getPedidos = (dataProducts) => {
    firebase.firestore().collection('users')
    .onSnapshot((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
            array.push({ id: doc.id, ...doc.data() });
        });
        dataProducts(array);
    });
};