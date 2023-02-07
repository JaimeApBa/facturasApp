import { useState } from "react";
import { AddBilling } from "../modals";

export const BillingsDetailsComponent = () => {

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  }
  

  return (
    <>
      <section className="container">
        <header className="billings-heading">
          <h1>Resumen anual de tus facturas</h1>
          <div className="year-selector-container">
            <label className="year-selector-label">Año</label>
            <input type="number" className="year-selector" min="2020" max="2099" step="1" defaultValue="2023"/>
          </div>
        </header>
          
          <div className="sectionBillings">


            
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
