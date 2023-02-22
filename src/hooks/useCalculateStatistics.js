import { useEffect, useState } from "react";
import { calculateTotalAnnual, calculateTotalBillings } from "../helpers";
import { calculateTotalAnnualByMonth } from "../helpers/calculateTotalAnnualByMonth";

export const useCalculateStatistics = ( water, electricity, gas, phone ) => {
    const emptyArray = Array(12).fill(0);

    const [totalWater, setTotalWater] = useState({});
    const [totalElectricity, setTotalElectricity] = useState({});
    const [totalGas, setTotalGas] = useState({});
    const [totalPhone, setTotalPhone] = useState({});
    const [totalAnnual, setTotalAnnual] = useState(0);
    const [spendingsByMonth, setSpendingsByMonth] = useState(emptyArray);

    useEffect(() => {
        setTotalWater(calculateTotalBillings( water ));
    }, [water]);

    useEffect(() => {
        setTotalElectricity(calculateTotalBillings( electricity ));
    }, [electricity]);

    useEffect(() => {
        setTotalGas(calculateTotalBillings( gas ));;
    }, [gas]);

    useEffect(() => {
        setTotalPhone(calculateTotalBillings( phone ));
    }, [phone]);


    useEffect(() => {
    const resultTotalAnnual = calculateTotalAnnual(totalWater, totalPhone, totalGas, totalElectricity)
    setTotalAnnual( resultTotalAnnual);
  }, [totalWater, totalPhone, totalGas, totalElectricity]);

    
  useEffect(() => {
    const dataByMonth = calculateTotalAnnualByMonth(water, electricity, gas, phone);
    setSpendingsByMonth(dataByMonth.totalSpending);
    
  }, [water, electricity, gas, phone]);


    return ({ 
        totalWater,
        totalElectricity,
        totalGas,
        totalPhone,
        totalAnnual,
        spendingsByMonth
    })
}
