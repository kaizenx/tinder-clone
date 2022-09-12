import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBXVL1NAO0_DIYpEnY2qr--48J9EXUT82k",
  authDomain: "tinder-clone-90581.firebaseapp.com",
  projectId: "tinder-clone-90581",
  storageBucket: "tinder-clone-90581.appspot.com",
  messagingSenderId: "72290998561",
  appId: "1:72290998561:web:fcde5d4bc68b9698218660",
  measurementId: "G-ECDE8E9RJM"
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getFirestore(firebaseApp)

export default database;