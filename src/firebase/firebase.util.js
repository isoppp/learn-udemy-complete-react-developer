import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB8iRpo7byfFsQc9t19obco7F7XQeWiMco",
  authDomain: "crwn-db-76e89.firebaseapp.com",
  databaseURL: "https://crwn-db-76e89.firebaseio.com",
  projectId: "crwn-db-76e89",
  storageBucket: "",
  messagingSenderId: "772829992810",
  appId: "1:772829992810:web:812e072fd5c27528333713"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

