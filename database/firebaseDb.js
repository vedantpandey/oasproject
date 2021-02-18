import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0jifdjTfUisMa-DhO4SMzVzNIwpb17Kk",
    authDomain: "oasproject-78504.firebaseapp.com",
    projectId: "oasproject-78504",
    storageBucket: "oasproject-78504.appspot.com",
    messagingSenderId: "940097869934",
    appId: "1:940097869934:web:df9b1bb0bd9841a47eae7f",
    measurementId: "G-WNZVQYXYZ4"
  };

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;