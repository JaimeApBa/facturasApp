import { deleteDoc, doc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const deleteAdress = async (uid, id) => {

    await deleteDoc(doc(FirebaseDB, `user-${uid}`, `${id}`));
}
