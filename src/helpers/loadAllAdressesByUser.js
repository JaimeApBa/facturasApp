import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadAllAdressesByUser = async (id) => {
    try {
        const collectionRef = collection(FirebaseDB, `user-${id}`);
    
        const docs = await getDocs(collectionRef);
        
        const addresses = [];
    
        docs.forEach(doc => {
            addresses.push(doc.data());
        })
        return addresses;
        
    } catch (error) {
        console.log(error);
    }
}
