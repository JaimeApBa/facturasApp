import { calculateTotalSpendingByMonth } from "./";

export const calculateTotalAnnualByMonth = (water, electricity, gas, phone) => {
    let billing = {}

    if(water) billing = { ...billing, water }
    if(electricity) billing = { ...billing, electricity }
    if(gas) billing = { ...billing, gas }
    if(phone) billing = { ...billing, phone }

    return calculateTotalSpendingByMonth(billing);

  }