
export const calculateTotalSpendingByMonth = ({ ...billing}) => {
    const totalSpending = Array(12).fill(0);
    if(billing) {
        for (const key in billing) {

            billing[key].map( (element) => {
                const date = new Date(element.convertedDate).getMonth();
                totalSpending[date] = (totalSpending[date] + +element.totalAmount);
                
            });
        }
        return {
            totalSpending
        }

    } else return;
}
