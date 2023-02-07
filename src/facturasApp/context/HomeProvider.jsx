import { useReducer } from 'react';
import { HomeContext, homeReducer, homeTypes } from './';
import { useLoadAllAddressesByUser, useUploadNewAddress } from '../../hooks';


export const HomeProvider = ({ children }) => {
    
    const initialState = {
        allAddresses: null,
        currentAddress: null,
        billings: null
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

    return (
        <HomeContext.Provider value={{
                ...homeState,
                getAllAddressesByUser,
                setCurrentAddress
        }}>
            { children }
        </HomeContext.Provider>
    )
}
