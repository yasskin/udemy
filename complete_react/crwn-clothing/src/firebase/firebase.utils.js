import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAO6B3TPb2BZ2WuepnhiF7ZDbinPpjURYw',
  authDomain: 'crown-db-cd589.firebaseapp.com',
  databaseURL: 'https://crown-db-cd589.firebaseio.com',
  projectId: 'crown-db-cd589',
  storageBucket: 'crown-db-cd589.appspot.com',
  messagingSenderId: '79716257266',
  appId: '1:79716257266:web:4c088bcfda1e6eb79a2f6b',
  measurementId: 'G-GLTESR6S45',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
