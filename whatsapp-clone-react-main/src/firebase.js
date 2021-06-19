import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyCk2AJOhZyB_H5cRM9GEUJa1voiKGAsrAA",
  authDomain: "whatsapp-clone-projectt.firebaseapp.com",
  projectId: "whatsapp-clone-projectt",
  storageBucket: "whatsapp-clone-projectt.appspot.com",
  messagingSenderId: "3274481383",
  appId: "1:3274481383:web:4f8048a1a474381104cc42",
  measurementId: "G-J8S75S6EB0"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
