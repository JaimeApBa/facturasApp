import { useContext } from 'react';
import { AuthContext } from '../../auth';
import { HomeContext } from '../context';
import { useDeleteAddress } from '../../hooks';
import { useNavigate } from 'react-router-dom';


export const AddressComponent = (singleAddress) => {
    
    const { id, address, number, floor, door, side, postalCode, city, country } = singleAddress;

    const { uid } = useContext(AuthContext);
    const { getAllAddressesByUser, setCurrentAddress } = useContext(HomeContext);
    const navigate = useNavigate();
    
    const deleteAddress = (id) => {
        
        useDeleteAddress(uid, id);
        getAllAddressesByUser(uid);
    }

    const navigateTo = () => {
        setCurrentAddress(singleAddress);
        navigate(`facturas/${id}`, { state: { currentAddress: singleAddress } });
    }
    
    return (
        <div className="address-row linkTo" onClick={ navigateTo }>
            <div className="address-container">
                <p className="mainAddress">{ address }, { number }</p>
                <p className="addressDetails">{ floor } - { door } { side || ''}</p>
                <p className="addressRegion">{ postalCode } { city } ({ country})</p>
                <button className="bt-delete linkTo" onClick={ () => deleteAddress(id) }>Eliminar</button>
            </div>
        </div>
    )
}
