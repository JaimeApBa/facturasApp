import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HomeContext } from "../context";

export const StatisticsDetail = ({ to, icon, totalBilling, spendingsByMonth, year }) => {

    const navigate = useNavigate();
    const { id } = useParams();

    const { water, electricity, gas, phone, currentAddress } = useContext(HomeContext);

    const navigateTo = (type) => {

        let stateByType = null;
        switch (type) {
          case 'electricidad':
            stateByType = electricity;
            break;
          case 'agua':
            stateByType = water;
            break;
          case 'gas':
            stateByType = gas;
            break;
          case 'telefono':
            stateByType = phone;
            break;
        
          default:
            break;
        }
        
        navigate(`/facturas/${id}/${year}/${type}`, { state: { type: stateByType, currentAddress: currentAddress, spendingsByMonth: spendingsByMonth } });
      }

    

    return (
        <div className="billing linkTo" onClick={ () => navigateTo(to) }>
        <span className="material-symbols-outlined billing-icon">{ icon }</span>
        {
            (totalBilling)
                && (
                <>
                    <p className="description totalAmount">Total Gasto: { totalBilling.totalAmounts } €</p>
                    <p className="description averageAmount">Media Gasto: { totalBilling.averageAmount } €</p>
                    {
                        (to !=='telefono')
                            && (
                                <>
                                    <p className="description totalUsage">Total Consumo: { totalBilling.totalUsage } Kwh</p>
                                    <p className="description averageUsage">Media Consumo: { totalBilling.averageUsage } Kwh</p>
                                </>
                            )
                    }
                </>
                )
        }
        
        </div>
    )
}
