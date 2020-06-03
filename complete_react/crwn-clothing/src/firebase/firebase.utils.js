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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
