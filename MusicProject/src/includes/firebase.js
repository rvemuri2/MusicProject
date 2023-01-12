import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBQBFr9cbMbghflo_qfIbeT5sx3TQFgaU",
  authDomain: "musicproject-17424.firebaseapp.com",
  projectId: "musicproject-17424",
  storageBucket: "musicproject-17424.appspot.com",
  appId: "1:247326089041:web:02bd857a5d80c88755fd70",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
export { auth, db, usersCollection, storage };
