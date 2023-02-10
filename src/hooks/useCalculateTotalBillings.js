
export const useCalculateTotalBillings = (billing=[]) => {
    if(billing) {

        let totalAmounts = 0;
        let averageAmount = 0;
        let totalUsage = 0;
        let averageUsage = 0;
        
        billing.map( (element, index) => {
            totalAmounts += +element.totalAmount;
            totalUsage += +element.usage || 0;
            averageAmount = totalAmounts / (index + 1);
            averageUsage = totalUsage / (index + 1);
        });
 
        totalAmounts = totalAmounts.toFixed(2);
        totalUsage = totalUsage.toFixed(2);
        averageAmount = averageAmount.toFixed(2);
        averageUsage = averageUsage.toFixed(2);
               
        return {
            totalAmounts,
            totalUsage,
            averageAmount,
            averageUsage
        }
    } else return;
}
