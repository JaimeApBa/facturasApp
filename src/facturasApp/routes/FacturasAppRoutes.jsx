import { Navigate, Route, Routes } from "react-router-dom";
import { BillingsPage, HomePage } from '../pages';
import { HomeRouterContext } from '../context';

export const FacturasAppRoutes = () => {
  return (
    <Routes>
        <Route element={ <HomeRouterContext /> }>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/facturas/:id" element={ <BillingsPage /> } />
          <Route path="/*" element={ <Navigate to="/" /> } />
        </Route>

    </Routes>
  )
}
