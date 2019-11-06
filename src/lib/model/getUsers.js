//funcion que obtiene los users de firebase
export const getUsers = (dataUsers) => {
    firebase.firestore().collection('users')
    .onSnapshot((querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
            array.push({ id: doc.id, ...doc.data() });
        });
        dataUsers(array);
    });
};