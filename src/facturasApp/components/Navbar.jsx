import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../auth";

export const Navbar = () => {
    const location = useLocation();
    const { email, logout } = useContext(AuthContext);

    const { pathname } = location;
    
    
    return (
        <nav className="navbar"> 
            <div className={ (pathname === '/home') ? "nav-navbar flex-row flex-between" : "nav-navbar" }>
                {
                    (pathname === '/home')
                        && (
                            <>
                                <p className="ml-20">Bienvenido, <span className="underline">{ email }</span></p>
                                <p className="mr-20"><span className="material-symbols-outlined linkTo" onClick={ logout }>logout</span></p>
                                
                            </>
                            )
                }
            </div>
        </nav>
    )
}
