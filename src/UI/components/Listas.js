import firebase, { db } from 'FirabaseConfig';
import { collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc } from 'FirebaseConfig';


export const savePersonName = (name) => {
    addDoc(collection(db, 'persons'), { name });

}

<<<<<<< HEAD
=======

export const getPersons = async() => {
    const result = await getDocs(query(collection(db, 'persons')));
    return result;
}
>>>>>>> 35828789106fb7c19cafdac68feefb944872969a
