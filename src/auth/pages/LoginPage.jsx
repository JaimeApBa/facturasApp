
import { Header } from "../../ui";
import { Navbar } from "../components";

export const LoginPage = () => {

  return (
    <>
      <Header />
      <Navbar />
      <div className="form-container flex-column">
        <div className="form-outer">
          <form className="formControl">
            <input type="text" className="input-field m-field" placeholder="Correo Electrónico" />
            <input type="password" className="input-field m-field" placeholder="Contraseña" />
            <button type="submit" className="bt bt-login">Entrar</button>
          </form>
        </div>
      </div>
    </>
  )
}
