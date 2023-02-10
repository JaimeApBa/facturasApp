
export const useCalculateTotalSpendingByMonth = (billing=[], totalSpending=[]) => {
    console.log(billing);
    console.log('before',totalSpending);
    if(billing) {
        
        billing.map( (element) => {
            const date = new Date(element.convertedDate).getMonth();
            totalSpending[date] = (totalSpending[date] + +element.totalAmount);
            
        });
        console.log('after',totalSpending);
        
               
        return {
            totalSpending
        }
    } else return;
}
