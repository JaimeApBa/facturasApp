import { Header } from "../../ui";
import { Navbar } from "../components";

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="form-container flex-column">
        <div className="form-outer">
          <form className="formControl pb-43">
            <input type="text" className="input-field" placeholder="Correo Electrónico" />
            <p className="msg errorMessage">errorMessage</p>
            <input type="password" className="input-field" placeholder="Contraseña" />
            <p className="msg errorMessage">errorMessage</p>
            <button type="submit" className="bt bt-login">Envia</button>
            <p className="msg errorMessage center">errorMessage</p>
          </form>
        </div>
      </div>
    </>
  )
}
