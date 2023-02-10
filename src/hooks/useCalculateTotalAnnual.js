
export const useCalculateTotalAnnual = (totalWater={}, totalElectricity={}, totalGas={}, totalPhone={}) => {

    let total = 0;
    if(totalWater && Object.keys(totalWater).length > 0) {
      total += +totalWater.totalAmounts;
    }
    if(totalElectricity && Object.keys(totalElectricity).length > 0) {
      total += +totalElectricity.totalAmounts;
    }
    if(totalGas && Object.keys(totalGas).length > 0) {
      total += +totalGas.totalAmounts;
    }
    if(totalPhone && Object.keys(totalPhone).length > 0) {
      total += +totalPhone.totalAmounts;
    }
    total = total.toFixed(2);

    return total;
     
    
}
