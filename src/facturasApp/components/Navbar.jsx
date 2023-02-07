import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";
import { HomeContext } from "../context";

export const Navbar = () => {
    const location = useLocation();
    const { email, logout } = useContext(AuthContext);
    const { currentAddress } = useContext(HomeContext);
    
    const { address, number, floor, door, side, city } = currentAddress || '';
    
    const navigate = useNavigate();

    const { pathname } = location;
    
    const navigateBack = () => {
        navigate(-1);
    }
    
    return (
        <nav className="navbar"> 
            <div className="nav-navbar flex-row flex-between">
                {
                    (pathname === '/')
                        ? (
                            <>
                                <p className="ml-20">Bienvenido, <span className="underline">{ email }</span></p>
                                <p className="mr-20">
                                    <span   className="material-symbols-outlined linkTo" 
                                            onClick={ logout }
                                    >logout</span>
                                </p>
                                
                            </>
                            )
                        : (
                            <>
                                <p className="ml-20">
                                    <span   className="material-symbols-outlined linkTo" 
                                            onClick={ navigateBack }
                                    >arrow_back</span>
                                </p>
                                {
                                    (currentAddress)
                                        && <p className="currentAddress">
                                                { address }, { number }. <small>{ floor } - { door }, { side }. ({ city })</small>
                                            </p>
                                }
                                
                                <p className="mr-20">
                                    <span   className="material-symbols-outlined linkTo" 
                                            onClick={ logout }
                                    >logout</span>
                                </p>
                                
                            </>
                        )
                }
            </div>
        </nav>
    )
}
