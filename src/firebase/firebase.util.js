import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQmeiaJuU1C5lvXdvlMOxlEGEY_b5jTbk",
    authDomain: "easyshop-db.firebaseapp.com",
    projectId: "easyshop-db",
    storageBucket: "easyshop-db.appspot.com",
    messagingSenderId: "801745285262",
    appId: "1:801745285262:web:863da81cc00b127ee719df",
    measurementId: "G-Z3VBFVNV8S"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;