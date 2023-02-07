import { useContext } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../auth";
import { useForm, useUploadNewBilling } from "../../hooks";


const formData = {
  type: '',
  totalAmount: '',
  usage: '',
  date: '',

}

export const AddBilling = ({ setShowModal }) => {

  let { formState, totalAmount, usage, date, onInputChange, onResetForm } = useForm(formData, {});

  const { uid } = useContext(AuthContext);
  const { id } = useParams();
  
  const closeModal = () => {
    setShowModal(false);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    useUploadNewBilling(formState, uid, id);
    Swal.fire('Enhorabuena', 'Has registrado una nueva factura','success');
    onResetForm();
    resetInputRadio();
  }
  
  const resetInputRadio = () => {
    document.querySelector("input[type=radio]:checked").checked= false;
  }


  return (
    <section className='addAddress-body'>
      <span className="material-symbols-outlined close-icon linkTo" onClick={ closeModal }>close</span>
      <div className="addAddress-container">
          <form className="formControl addBillingsForm pb-43">
              <div className="billing-selector">
                <input  type="radio"
                        className="input-field m-field mt-20 input-field-radio"
                        name="type"
                        value="Electricidad"
                        onChange={ onInputChange }
                />Electricidad
                <input  type="radio"
                        className="input-field m-field mt-20 input-field-radio"
                        name="type"
                        value="Gas"
                        onChange={ onInputChange }      
                />Gas
                <input  type="radio"
                        className="input-field m-field mt-20 input-field-radio"
                        name="type"
                        value="Agua"
                        onChange={ onInputChange }      
                />Agua
                <input  type="radio"
                        className="input-field m-field mt-20 input-field-radio"
                        name="type"
                        value="Teléfono"
                        onChange={ onInputChange }       
                />Teléfono

              </div>
              <input  type="text" 
                      className="input-field m-field mt-20"
                      placeholder="Total Factura" 
                      name='totalAmount'
                      value={ totalAmount }
                      onChange={ onInputChange }
              />
              <input  type="text" 
                      className="input-field m-field"
                      placeholder="Consumo"
                      name='usage'
                      value={ usage }
                      onChange={ onInputChange }
              />
              <input  type="date" 
                      className="input-field m-field"
                      placeholder="Fecha"
                      name='date'
                      value={ date }
                      onChange={ onInputChange }
              />
                              
              <button type="submit" 
                      className="bt bt-login m-field"
                      onClick={ onSubmit }
              >
              Enviar
              </button>
        </form>
    </div>
 </section>
  )
}
