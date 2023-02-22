import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../auth";
import { useCalculateStatistics } from "../../hooks";
import { HomeContext } from "../context";
import { AddBilling } from "../modals";
import { StatisticsDetail } from "./";

export const BillingsDetailsComponent = () => {

  const navigate = useNavigate();
  const location = useLocation();

  let defaultYear = null;

  if( location.state.defaultYear ) {
    defaultYear = location.state.defaultYear;
  } else{
    defaultYear = new Date().getFullYear();
  }

  const [showModal, setShowModal] = useState(false);
  const [year, setYear] = useState(defaultYear);
    
  
  const { id } = useParams();
  const { uid } = useContext(AuthContext);
  const { 
          loadBillingsWater, loadBillingsElectricity, loadBillingsGas, loadBillingsPhone,
          water, electricity, gas, phone, currentAddress
        } = useContext(HomeContext);
  
  const { totalWater, totalElectricity, totalGas, totalPhone, totalAnnual, spendingsByMonth } = useCalculateStatistics(water, electricity, gas, phone)
  
  const handleModal = () => {
    setShowModal(true);
  }
  
  const handleChange = ({ target }) => {
    const { value } = target;
    setYear(value);
  }
  
  useEffect(() => {
    loadBillingsWater(uid, id, year);
    loadBillingsElectricity(uid, id, year);
    loadBillingsGas(uid, id, year);
    loadBillingsPhone(uid, id, year);
  }, [year])
  
  const navigateTo = (type) => {
   
    navigate(`/facturas/${id}/${year}/${type}`, { state: { type: type, currentAddress: currentAddress, spendingsByMonth: spendingsByMonth } });
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

              <StatisticsDetail to='electricidad' icon='emoji_objects' totalBilling={ totalElectricity } spendingsByMonth={ spendingsByMonth } year={ year } />
              
              <StatisticsDetail to='gas' icon='mode_heat' totalBilling={ totalGas } spendingsByMonth={ spendingsByMonth } year={ year } />
              
            </div>
            <div className="billing-row flex-row">

              <StatisticsDetail to='agua' icon='water_drop' totalBilling={ totalWater } spendingsByMonth={ spendingsByMonth } year={ year } />
            
              <StatisticsDetail to='telefono' icon='call' totalBilling={ totalPhone } spendingsByMonth={ spendingsByMonth } year={ year } />

            </div>
          </div>

          <div className="totalSpendings linkTo" onClick={ () => navigateTo('annualSummary') }>
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
