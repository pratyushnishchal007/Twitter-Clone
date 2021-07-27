import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAOXlgtFJkoWLY0YD4l0lBUz-ppGRzodn4",
    authDomain: "twitter-clone-73971.firebaseapp.com",
    projectId: "twitter-clone-73971",
    storageBucket: "twitter-clone-73971.appspot.com",
    messagingSenderId: "137335263941",
    appId: "1:137335263941:web:cd71890656886ef58f16ac",
    measurementId: "G-7EPS8ZHTKH"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  
  export default db;