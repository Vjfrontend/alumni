
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD4MXqcqSY17x0FjvyzxJbX4DHhwZlizW0",
    authDomain: "oocf-d27e2.firebaseapp.com",
    projectId: "oocf-d27e2",
    storageBucket: "oocf-d27e2.appspot.com",
    messagingSenderId: "31254965976",
    appId: "1:31254965976:web:4047e2c035ce7fd6fb71ad"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export  const database = getFirestore(app)