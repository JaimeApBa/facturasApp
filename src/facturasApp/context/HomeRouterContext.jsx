import { Outlet } from "react-router-dom";
import { HomeProvider } from "./";


export const HomeRouterContext = () => {
  return (
    <HomeProvider>
        <Outlet />
    </HomeProvider>
  )
}
