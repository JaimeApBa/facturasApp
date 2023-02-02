import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth";
import { HomeContext } from "../context";
import { AddAddress } from "../modals";
import { AddressComponent } from "./AddressComponent";

export const AllAddressesComponent = () => {

  const [showModal, setShowModal] = useState(false)
  const { getAllAddressesByUser, allAddresses } = useContext(HomeContext);
  const { uid } = useContext(AuthContext);

  useEffect(() => {
    getAllAddressesByUser(uid);
  }, [allAddresses])
  
  const handleModal = () => {
     setShowModal(true);
  }


  return (
    <>
      <div className="container">
        <header className="headerHome">
          <p className="textAddress">Selecciona una dirección:</p>
        </header>
        <section className="sectionHome">
          {
            (allAddresses && allAddresses.length > 0)
                && allAddresses.map(address => (
                  <AddressComponent {...address } key={ JSON.stringify(address) } />
                ))
          }
        </section>
        <footer className="footerHome">
          <p className="bt-add linkTo"><span className="material-symbols-outlined" onClick={ handleModal }>add</span></p>
        </footer>
      </div>
      {
        (showModal) && <AddAddress setShowModal={ setShowModal } />
      }
    </>
  )
}
