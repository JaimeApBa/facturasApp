import { useLocation, useParams } from 'react-router-dom';
import { Header } from '../../ui';
import {  AnnualSymmaryChart, MainChart, Navbar } from '../components/';


export const AnualBillingPage = () => {

  const { year, type } = useParams();
  const { state } = useLocation();
  const { type:billingsData, spendingsByMonth } = state;
  const typeCapitalize = type.substring(0,1).toUpperCase() + type.substring(1, type.length);
  
  return (
    <>
      <Header />
      <Navbar />

      <section className="container">

        <header className="billings-heading">
          <h1>Resumen mensual de tus facturas</h1>
          {
            (type === 'annualSummary')
            ? (<p className="year-selector-container">
                { year }
              </p>)
            : (<p className="year-selector-container">
            { typeCapitalize } { year }
          </p>)
          }
          
        </header>

        <div className="sectionBillings flex-column mb-20">
          {
            (type === 'annualSummary')
            ? <AnnualSymmaryChart billingsDataByMonth = { spendingsByMonth } />
            : <MainChart billingsData={ billingsData } />
          }
          
        </div>

      </section>
    </>
  )
}
2