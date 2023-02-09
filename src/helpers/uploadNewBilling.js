import { collection, doc, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const uploadNewBilling = async (newBilling, uid, idAddress) => {

    const { type, totalAmount, usage, date } = newBilling;

    const convertedDate = new Date(date).getTime();
    const year = new Date(date).getFullYear();
    
    const billing = {
        totalAmount,
        usage,
        convertedDate
    }

    const newDoc = doc(collection(FirebaseDB, `user-${uid}/${idAddress}/billings/${type}/${year}`));
    // const newDoc = doc(FirebaseDB, `user-${uid}`, `${idAddress}` ,'billings', `${type}`);

    await setDoc(newDoc, billing);

    await updateDoc(newDoc, { id: newDoc.id });

}
