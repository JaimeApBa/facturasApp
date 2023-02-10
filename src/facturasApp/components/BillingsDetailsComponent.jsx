import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../auth";
import { useCalculateTotalAnnual, useCalculateTotalBillings, useCalculateTotalSpendingByMonth } from "../../hooks";
import { HomeContext } from "../context";
import { AddBilling } from "../modals";

export const BillingsDetailsComponent = () => {

  const defaultYear = new Date().getFullYear();
  const emptyArray = Array(12).fill(0);

  const [showModal, setShowModal] = useState(false);
  const [year, setYear] = useState(defaultYear);
  const [totalWater, setTotalWater] = useState({});
  const [totalElectricity, setTotalElectricity] = useState({});
  const [totalGas, setTotalGas] = useState({});
  const [totalPhone, setTotalPhone] = useState({});
  const [totalAnnual, setTotalAnnual] = useState(0);
  const [spendingsByMonth, setSpendingsByMonth] = useState(emptyArray);
  
  const navigate = useNavigate();
  const { id } = useParams();
  const { uid } = useContext(AuthContext);
  const { 
          loadBillingsWater, loadBillingsElectricity, loadBillingsGas, loadBillingsPhone,
          water, electricity, gas, phone, currentAddress
        } = useContext(HomeContext);
  
  const handleModal = () => {
    setShowModal(true);
  }

  const handleChange = ({ target }) => {
    const { value } = target;
    setYear(value);
  }

 
    const x = useMemo(() => {
      loadBillingsWater(uid, id, year);
      loadBillingsElectricity(uid, id, year);
      loadBillingsGas(uid, id, year);
      loadBillingsPhone(uid, id, year);
    }, [year])

  
  useEffect(() => {
    setTotalWater( useCalculateTotalBillings(water) );
  }, [water]);

  useEffect(() => {
    setTotalElectricity( useCalculateTotalBillings(electricity) );
  }, [electricity]);

  useEffect(() => {
    setTotalGas( useCalculateTotalBillings(gas) );
  }, [gas]);

  useEffect(() => {
    setTotalPhone( useCalculateTotalBillings(phone) );
  }, [phone]);

  useEffect(() => {
    const resultTotalAnnual = useCalculateTotalAnnual(totalWater, totalPhone, totalGas, totalElectricity)
    setTotalAnnual( resultTotalAnnual);
    // calculateTotalAnnualByMonth();
  }, [totalWater, totalPhone, totalGas, totalElectricity]);
    
  useEffect(() => {
    calculateTotalAnnualByMonth();
  }, [x]);


  
  const calculateTotalAnnualByMonth = () => {
    
    if(water) {
      setSpendingsByMonth(useCalculateTotalSpendingByMonth(water, spendingsByMonth));
    }
    if(electricity) {
      setSpendingsByMonth(useCalculateTotalSpendingByMonth(electricity, spendingsByMonth));
    }
    if(gas) {
      setSpendingsByMonth(useCalculateTotalSpendingByMonth(gas, spendingsByMonth));
    }
    if(phone) {
      setSpendingsByMonth(useCalculateTotalSpendingByMonth(phone, spendingsByMonth));
    }
  }

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
    
    navigate(`/facturas/${id}/${year}/${type}`, { state: { type: stateByType, currentAddress: currentAddress } });
  }
  return (
    <>
      <section className="container">
        <header className="billings-heading">
          <h1>Resumen anual de tus facturas</h1>
          <div className="year-selector-container">
            <label className="year-selector-label">Año</label>
            <input  type="number" 
                    className="year-selector" 
                    min="2000" 
                    max="2099" 
                    step="1" 
                    defaultValue={ year }
                    onChange={ handleChange }
            />
          </div>
        </header>
          
          <div className="sectionBillings flex-column">
            <div className="billing-row flex-row">
              <div className="billing ligth linkTo" onClick={ () => navigateTo('electricidad') }>
                <span className="material-symbols-outlined billing-icon">emoji_objects</span>
                {
                  (totalElectricity)
                      && (
                        <>
                          <p className="description totalAmount">Total Gasto: { totalElectricity.totalAmounts } €</p>
                          <p className="description averageAmount">Media Gasto: { totalElectricity.averageAmount } €</p>
                          <p className="description totalUsage">Total Consumo: { totalElectricity.totalUsage } Kwh</p>
                          <p className="description averageUsage">Media Consumo: { totalElectricity.averageUsage } Kwh</p>
                        </>
                      )
                }
                
              </div>
              <div className="billing gas linkTo" onClick={ () => navigateTo('gas') }>
                <span className="material-symbols-outlined billing-icon">mode_heat</span>
                {
                  (totalGas)
                      && (
                        <>
                          <p className="description totalAmount">Total Gasto: { totalGas.totalAmounts } €</p>
                          <p className="description averageAmount">Media Gasto: { totalGas.averageAmount } €</p>
                          <p className="description totalUsage">Total Consumo: { totalGas.totalUsage } m3</p>
                          <p className="description averageUsage">Media Consumo: { totalGas.averageUsage } m3</p>
                        </>
                      )
                }
              </div>
            </div>
            <div className="billing-row flex-row">
              <div className="billing water linkTo" onClick={ () => navigateTo('agua') }>
                <span className="material-symbols-outlined billing-icon">water_drop</span>
                {
                  (totalWater)
                      && (
                        <>
                          <p className="description totalAmount">Total Gasto: { totalWater.totalAmounts } €</p>
                          <p className="description averageAmount">Media Gasto: { totalWater.averageAmount } €</p>
                          <p className="description totalUsage">Total Consumo: { totalWater.totalUsage } m3</p>
                          <p className="description averageUsage">Media Consumo: { totalWater.averageUsage } m3</p>
                        </>
                      )
                }
              </div>
              <div className="billing phone linkTo" onClick={ () => navigateTo('telefono') }>
                <span className="material-symbols-outlined billing-icon">call</span>
                {
                  (totalPhone)
                      && (
                        <>
                          <p className="description totalAmount">Total Gasto: { totalPhone.totalAmounts } €</p>
                          <p className="description averageAmount">Media Gasto: { totalPhone.averageAmount } €</p>
                        </>
                      )
                }
              </div>
            </div>
          </div>

          <div className="totalSpendings" onClick={ () => navigateTo('annualSummary') }>
                <p className="totalSpendings-text">Gasto Total Anual: <span className="spending">{ totalAnnual } €</span> </p>
          </div>

          <footer className="footerHome">
            <p className="bt-add linkTo"><span className="material-symbols-outlined" onClick={ handleModal }>add</span></p>
          </footer>

        </section>
        {
          (showModal) && <AddBilling setShowModal={ setShowModal } />
        }
      </>
  )
}
