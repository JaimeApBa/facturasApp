import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const uploadNewAddress = async (newAddress, id) => {
        
    const newDoc = doc(collection(FirebaseDB, `user-${id}`));
    
    await setDoc(newDoc, newAddress);
}
