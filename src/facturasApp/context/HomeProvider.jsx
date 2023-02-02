import { useReducer } from 'react';
import { HomeContext, homeReducer, homeTypes } from './';
import { useLoadAllAddressesByUser, useUploadNewAddress } from '../../hooks';


export const HomeProvider = ({ children }) => {
    
    const initialState = {
        allAddresses: null,
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

    return (
        <HomeContext.Provider value={{
                ...homeState,
                getAllAddressesByUser,
        }}>
            { children }
        </HomeContext.Provider>
    )
}
