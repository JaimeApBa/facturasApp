import { useReducer } from 'react';
import { HomeContext, homeReducer, homeTypes } from './';
import { useLoadAllAddressesByUser, useLoadBillingsByYear, useUploadNewAddress } from '../../hooks';


export const HomeProvider = ({ children }) => {
    
    const initialState = {
        allAddresses: null,
        currentAddress: null,
        water: null,
        electricity: null,
        gas: null,
        phone: null,
    }

    const [homeState, dispatch] = useReducer(homeReducer, initialState);

    const getAllAddressesByUser = async (id) => {
        const result = await useLoadAllAddressesByUser(id);
        
        const action = {
            type: homeTypes.allAddress,
            payload: result
        }

        dispatch(action);
    }

    const setCurrentAddress = (address) => {
        const action = {
            type: homeTypes.currentAddress,
            payload: address
        }
        
        dispatch(action);
    }

    const loadBillingsWater = async (uid, id, year) => {
        const billingType = 'Agua';
        const result = await useLoadBillingsByYear(uid, id, billingType,year);

        const action = {
            type: homeTypes.water,
            payload: result
        }
        
        dispatch(action);
    }
    const loadBillingsElectricity = async (uid, id, year) => {
        const billingType = 'Electricidad';
        const result = await useLoadBillingsByYear(uid, id, billingType,year);

        const action = {
            type: homeTypes.electricity,
            payload: result
        }

        dispatch(action);
    }
    const loadBillingsGas = async (uid, id, year) => {
        const billingType = 'Gas';
        const result = await useLoadBillingsByYear(uid, id, billingType,year);

        const action = {
            type: homeTypes.gas,
            payload: result
        }

        dispatch(action);
    }
    const loadBillingsPhone = async (uid, id, year) => {
        const billingType = 'Teléfono';
        const result = await useLoadBillingsByYear(uid, id, billingType,year);

        const action = {
            type: homeTypes.phone,
            payload: result
        }

        dispatch(action);
    }

    return (
        <HomeContext.Provider value={{
                ...homeState,
                getAllAddressesByUser,
                setCurrentAddress,
                loadBillingsWater,
                loadBillingsElectricity,
                loadBillingsGas,
                loadBillingsPhone
        }}>
            { children }
        </HomeContext.Provider>
    )
}
