import { loadBillingsByYear } from "../helpers";

export const useLoadBillingsByYear = async (uid, idAddress, type, year) => {
  
  return await loadBillingsByYear(uid, idAddress, type, year);
}
