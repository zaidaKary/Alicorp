export const signInWithEmailAndPassword = (email, pass) => {
  return firebase.auth().signInWithEmailAndPassword(email, pass);
};