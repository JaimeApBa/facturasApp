import { deleteAdress } from "../helpers";

export const useDeleteAddress = async (uid, id) => {
  return await deleteAdress(uid, id);
}
