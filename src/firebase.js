// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsYmeKnKxFHazVPfzNnEWEN_oYBACDihs",
  authDomain: "facebook-clone-94f24.firebaseapp.com",
  databaseURL: "https://facebook-clone-94f24.firebaseio.com",
  projectId: "facebook-clone-94f24",
  storageBucket: "facebook-clone-94f24.appspot.com",
  messagingSenderId: "843992399589",
  appId: "1:843992399589:web:b04b1edbb928b639209e0c",
  measurementId: "G-X5GFNPZ33P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
