// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBQLKhJE1xPtBzdkY6_iblWlvO4CtgImTU",
    authDomain: "fir-e3a3a.firebaseapp.com",
    projectId: "fir-e3a3a",
    storageBucket: "fir-e3a3a.appspot.com",
    messagingSenderId: "37347080578",
    appId: "1:37347080578:web:6a24468572c00eaa7a379b",
    measurementId: "G-Q6WD1GEEY8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};