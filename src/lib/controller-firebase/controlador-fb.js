export const verInfoFb = (string) => {
    return firebase.firestore().collection(string).get();
};