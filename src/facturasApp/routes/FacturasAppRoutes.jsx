import { Navigate, Route, Routes } from "react-router-dom";
import { FacturasAppPage } from '../pages';

export const FacturasAppRoutes = () => {
  return (
    <Routes>
        <Route path="home" element={ <FacturasAppPage /> } />
        <Route path="/*" element={ <Navigate to="/home" /> } />
    </Routes>
  )
}
