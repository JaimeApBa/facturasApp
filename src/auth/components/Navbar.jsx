import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();

    const { pathname } = location;
    
    return (
        <nav className="navbar">
            <ul className="nav-navbar flex-row">
                <li className={(pathname === '/auth/login') ? "nav-list nav-login nav-active" : "nav-list nav-login"}>
                    <Link to="/auth/login">Inicio Sesión</Link>
                </li>
                <li className={(pathname === '/auth/register') ? "nav-list nav-register nav-active" : "nav-list nav-register"}>
                    <Link to="/auth/register">Registro</Link>
                </li>
            </ul>
        </nav>
    )
}
