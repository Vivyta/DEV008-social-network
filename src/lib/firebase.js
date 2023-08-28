import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDa4TRKo70MzOexsdPzb6WXG3tUYWybhO4",
  authDomain: "mangalovers-438a3.firebaseapp.com",
  projectId: "mangalovers-438a3",
  storageBucket: "mangalovers-438a3.appspot.com",
  messagingSenderId: "612741473348",
  appId: "1:612741473348:web:95db3af377dce57067c811",
  measurementId: "G-NXDLHM0ZC3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const loginFirebase = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerFirebase = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const savePosts = (text) => {
  return addDoc(collection(db, "mangalovers"), {
    text: text,
    email: auth.currentUser.email,
    fecha: new Date(),
  });
};

export const showPosts = () => console.log("muestra el post");

// const q = query(citiesRef, orderBy("fecha"));
// const q = query(collection(db, "mangalovers"), where("state", "==", "CA"));
export const listenPosts = (callback) => {
  const filter = query(collection(db, "mangalovers"), orderBy('fecha', "desc"));
  onSnapshot(filter, (docs) => {
    callback(docs);
  });
};
export const eliminar = id =>{
 return deleteDoc(doc(db,"mangalovers",id))
}
