
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getFirestore, updateDoc, onSnapshot } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDunszcbIrWrTy1BSF1fJFFH8digKCK3dk",
  authDomain: "lite-thinking-da8f3.firebaseapp.com",
  projectId: "lite-thinking-da8f3",
  storageBucket: "lite-thinking-da8f3.appspot.com",
  messagingSenderId: "309122540162",
  appId: "1:309122540162:web:d5df6059b5e0aebb204a9b",
  measurementId: "G-N702MMPPVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database
export const db = getFirestore(app);

// Agregar doc

export const addFirebaseData = async (company) => {
  try {
    await addDoc(collection(db, 'companies'), company)
  } catch (error) {
    console.error('Error adding company', error)
  }
}

// Eliminar Doc

export const removeFirebaseData = async (id) => {
  deleteDoc(doc(db, 'companies', id));
}

// Actualizar doc

export const updateFirebaseData = async (id, comp) => {
  updateDoc(doc(db, 'companies', id), comp)
}

export {
  onSnapshot,
  collection
}
