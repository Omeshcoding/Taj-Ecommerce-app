import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config =  {
  apiKey: "AIzaSyDpTGFzJutO5Wtk0jE9sg_JCmM47Wq8HQ8",
  authDomain: "taj-db.firebaseapp.com",
  projectId: "taj-db",
  storageBucket: "taj-db.appspot.com",
  messagingSenderId: "42936546979",
  appId: "1:42936546979:web:0e63193f7713310a3bf116",
  measurementId: "G-G05M74VHEG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


// Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;