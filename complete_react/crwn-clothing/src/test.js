import firebase from 'firebase/app';
import 'firebase/firestore';

const firestone = firebase.firestore();

firestore
  .collection('users')
  .doc('qM0zF5uDS0PeyzyU19Mq')
  .collection('cartItems')
  .doc('fZA42TZalB48dNldo3Vs');

firestore.doc('/users/qM0zF5uDS0PeyzyU19Mq/cartItems/fZA42TZalB48dNldo3Vs');
firestore.collection('/users/qM0zF5uDS0PeyzyU19Mq/cartItems');
