// src/services/firebaseService.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Your Firebase config (replace with actual config)
const firebaseConfig = {
  apiKey: "AIzaSyA4M5r45UmWAH5lMAE_ofSD8EKe4kKeCUo",
  authDomain: "todolistpierbotteroweb-ff355.firebaseapp.com",
  projectId: "todolistpierbotteroweb-ff355",
  storageBucket: "todolistpierbotteroweb-ff355.appspot.com",
  messagingSenderId: "991868285179",
  appId: "1:991868285179:web:0840904ae56c42b160805e",
  databaseURL: "https://todolistpierbotteroweb-ff355.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionName = "todos2"

// Fetch all documents from a collection
export const fetchItems = async () => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Add a new item to a collection
export const addItem = async (item) => {
  const docRef = await addDoc(collection(db, collectionName), item);
  return docRef.id;
};

// Update an item in a collection
export const updateItem = async (id, updatedData) => {
  const itemRef = doc(db, collectionName, id);
  await updateDoc(itemRef, {
    concluida:updatedData.concluida
  });
};

// Delete an item from a collection
export const deleteItem = async (id) => {
  const itemRef = doc(db, collectionName, id);
  await deleteDoc(itemRef);
};
