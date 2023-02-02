
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { FacturasAppRoutes } from "../facturasApp/routes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../ui";

export const FacturasAppRouter = () => {

    const status = useCheckAuth();
    
    if(status === 'checking') {
        return <CheckingAuth />
    }
  
  return (
    <Routes>
      {
        (status === 'authenticated')
          ? <Route path="/*" element={ <FacturasAppRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
