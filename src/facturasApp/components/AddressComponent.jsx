
export const AddressComponent = (singleAddress) => {
    
    const { address, number, floor, door, side, postalCode, city, country } = singleAddress;
    
    const deleteAddress = () => {

    }
    
    return (
        <div className="address-row linkTo">
            <div className="address-container">
                <p className="mainAddress">{ address }, { number }</p>
                <p className="addressDetails">{ floor } - { door } { side || ''}</p>
                <p className="addressRegion">{ postalCode } { city } ({ country})</p>
                <button className="bt-delete linkTo" oncClick={ deleteAddress }>Eliminar</button>
            </div>
            </div>
    )
}
