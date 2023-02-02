import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../hooks";
import { Header } from "../../ui";
import { AuthNavbar } from "../components";
import { AuthContext } from "../context";
import { formValidations } from "../validators";


const formData = {
  email: '',
  password : ''
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [registerCompleted, setRegisterCompleted] = useState(false);

  const { registerWithCredentials, errorMessage } = useContext(AuthContext);

  const { formState, email, password, onInputChange,
    emailValid, passwordValid, isFormValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;

    registerWithCredentials(formState);
    
    setRegisterCompleted(true);
  }
  const modalAlert = () => {

    if(formSubmitted && registerCompleted && !errorMessage) {
      Swal.fire('Enhorabuena', 'Te has registrado correctamente','success');
    } else if(formSubmitted && !registerCompleted && !!errorMessage) {
      Swal.fire('Atención', 'Ha habido algun problema y no se ha podido completar el registro','error');
    }
  }
  useEffect(() => {
    modalAlert();
  }, [errorMessage])
  
 

  return (
    <>
      <Header />
      <AuthNavbar />
      <div className="form-container flex-column">
        <div className="form-outer">
          <form className="formControl pb-43">
            <input  type="text" 
                    className={ (formSubmitted && !!emailValid) ? "input-field border-red" : "input-field m-field" }
                    placeholder="Correo Electrónico" 
                    name='email'
                    value={ email }
                    onChange={ onInputChange }
            />
            {
              (formSubmitted && !!emailValid)
                  && <p className="msg errorMessage pl-10">{ emailValid }</p>
            }
            
            <input  type="password" 
                    className={ (formSubmitted && !!passwordValid) ? "input-field border-red" : "input-field m-field" }
                    placeholder="Contraseña"
                    name='password'
                    value={ password }
                    onChange={ onInputChange }
            />
            {
              (formSubmitted && !!passwordValid)
                  && <p className="msg errorMessage pl-10">{ passwordValid }</p>
            }
            
            <button type="submit" 
                    className={ (!errorMessage) ? "bt bt-login m-field" : "bt bt-login" } 
                    onClick={ onSubmit }
            >
              Registrar
            </button>
            {
              (formSubmitted && !!errorMessage)
                  && <p className="msg errorMessage center">{ errorMessage }</p>
            }
            
          </form>
        </div>
      </div>
    </>
  )
}
