import firebase, { db } from 'FirabaseConfig';
import { collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc } from 'FirebaseConfig';


const savePersonName = (name) => {
    addDoc(collection(db, 'persons'), { name });

}