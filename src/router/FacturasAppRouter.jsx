import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { FacturasAppRoutes } from "../facturasApp/routes";

export const FacturasAppRouter = () => {
  return (
    <Routes>
        <Route path="/index" element={ <FacturasAppRoutes /> } />
        <Route path="/auth/*" element={ <AuthRoutes /> } />
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
