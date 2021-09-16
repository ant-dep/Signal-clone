import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP28Qy8yOis072Yczw8ktGWsY-HkPpjSk",
  authDomain: "signal-clone-565f2.firebaseapp.com",
  projectId: "signal-clone-565f2",
  storageBucket: "signal-clone-565f2.appspot.com",
  messagingSenderId: "1047278242687",
  appId: "1:1047278242687:web:da20c242d40a3c3403a84a",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
