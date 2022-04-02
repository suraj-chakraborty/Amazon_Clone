import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDyAq84I3GIhyQppATCLY_mi68CdEuzUVM",
  authDomain: "clone-beb42.firebaseapp.com",
  projectId: "clone-beb42",
  storageBucket: "clone-beb42.appspot.com",
  messagingSenderId: "39921416939",
  appId: "1:39921416939:web:97d37d2e58da6191539cae",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
