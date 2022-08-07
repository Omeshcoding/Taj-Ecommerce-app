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

export const createUsetProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log('error creacting user', error.message)
    }
  }

  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


// Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;