import { Navigate, Route, Routes } from "react-router-dom";
import { FacturasAppPage } from '../pages';
import { HomeRouterContext } from '../context';

export const FacturasAppRoutes = () => {
  return (
    <Routes>
        <Route element={ <HomeRouterContext /> }>
          <Route path="home" element={ <FacturasAppPage /> } />
          <Route path="/*" element={ <Navigate to="/home" /> } />
        </Route>

    </Routes>
  )
}
