import { collection, doc, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const uploadNewBilling = async (newBilling, uid, idAddress) => {

    const { type, totalAmount, usage, date } = newBilling;

    const convertedDate = new Date(date).getTime();

    const billing = {
        totalAmount,
        usage,
        convertedDate
    }

    const newDoc = doc(collection(FirebaseDB, `user-${uid}/${idAddress}/billings/${type}/bill`));
    // const newDoc = doc(FirebaseDB, `user-${uid}`, `${idAddress}` ,'billings', `${type}`);

    await setDoc(newDoc, billing);

    await updateDoc(newDoc, { id: newDoc.id });

}
