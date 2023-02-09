import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadBillingsByYear = async (uid, idAddress, type, year) => {
    try {

        const collectionRef = collection(FirebaseDB, `user-${uid}/${idAddress}/billings/${type}/${year}`);

        const docs = await getDocs(collectionRef);

        const billings = [];
        
        docs.forEach(doc => {
            billings.push(doc.data());
        })
        
        return billings;

    } catch (error) {
        console.log(error);
    }
}
