import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyD0ljcmiUP7tDNmLnrQiLSmOM5N87UD_zQ",
    authDomain: "react-native-983c6.firebaseapp.com",
    projectId: "react-native-983c6",
    storageBucket: "react-native-983c6.appspot.com",
    messagingSenderId: "374469404600",
    appId: "1:374469404600:web:2dcbf5c1e34770bf4d114d",
    measurementId: "G-G80XEGDER4"
});

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};