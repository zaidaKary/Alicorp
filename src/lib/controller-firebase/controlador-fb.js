export const verInfoFb = (string) => {
    return firebase.firestore().collection(string).get();
};

export const addProduct = (idProduct) =>{

    firebase.firestore().collection("products").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            if(doc.id===idProduct){
                console.log(doc.id, " => ", doc.data());
            }
           
        });
    });

  

  
}