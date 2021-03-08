import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCaScycB3y7DFevECjcePMqo_AdZ9lAflc",
    authDomain: "discord-baf2d.firebaseapp.com",
    projectId: "discord-baf2d",
    storageBucket: "discord-baf2d.appspot.com",
    messagingSenderId: "443357045378",
    appId: "1:443357045378:web:196afcdfd18bcc68204a9b",
    measurementId: "G-WL3243WFN4"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore(firebaseApp)
  const auth=firebase.auth();
  const provider=new firebase.auth.Provider();

  export default db;

  export {auth,provider}