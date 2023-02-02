import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../auth";
import { useForm, useUploadNewAddress } from "../../hooks";

const formData = {
    address: '',
    number: '',
    floor: '',
    door: '',
    side: '',
    postalCode: '',
    city: '',
    country: ''
  }

export const AddAddress = ({ setShowModal }) => {

        const { formState, address, number, floor, door, side, postalCode, city, country, onInputChange, onResetForm } = useForm(formData, {});

        const { uid } = useContext(AuthContext);

        const closeModal = () => {
                setShowModal(false);
        }
        
        const onSubmit = (event) => {
                event.preventDefault();
                useUploadNewAddress(formState, uid);
                Swal.fire('Enhorabuena', 'Has registrado una nueva dirección','success');
                onResetForm();
        }       



        return (
                <section className='addAddress-body'>
                <span className="material-symbols-outlined close-icon linkTo" onClick={ closeModal }>close</span>
                <div className="addAddress-container">
                        <form className="formControl addAddressForm pb-43">
                        <input  type="text" 
                                className="input-field m-field mt-20"
                                placeholder="Dirección" 
                                name='address'
                                value={ address }
                                onChange={ onInputChange }
                        />
                        <input  type="text" 
                                className="input-field m-field"
                                placeholder="Numero"
                                name='number'
                                value={ number }
                                onChange={ onInputChange }
                        />
                        <input  type="text" 
                                className="input-field m-field"
                                placeholder="Piso"
                                name='floor'
                                value={ floor }
                                onChange={ onInputChange }
                        />
                        <input  type="text" 
                                className="input-field m-field"
                                placeholder="Puerta"
                                name='door'
                                value={ door }
                                onChange={ onInputChange }
                        />
                        <input  type="text" 
                                className="input-field m-field"
                                placeholder="Escalera/Bloque"
                                name='side'
                                value={ side }
                                onChange={ onInputChange }
                        />
                        <input  type="text" 
                                className="input-field m-field"
                                placeholder="Código Postal"
                                name='postalCode'
                                value={ postalCode }
                                onChange={ onInputChange }
                        />
                        <input  type="text" 
                                className="input-field m-field"
                                placeholder="Ciudad"
                                name='city'
                                value={ city }
                                onChange={ onInputChange }
                        />
                        <input  type="text" 
                                className="input-field m-field"
                                placeholder="País"
                                name='country'
                                value={ country }
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
