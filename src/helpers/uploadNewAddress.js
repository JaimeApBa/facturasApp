import { collection, doc, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const uploadNewAddress = async (newAddress, id) => {
        
    const newDoc = doc(collection(FirebaseDB, `user-${id}`));
    
    await setDoc(newDoc, newAddress);

    await updateDoc(newDoc, { id: newDoc.id });

}
