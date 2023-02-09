import { homeTypes } from "./";

export const homeReducer = ( state, action ) => {

    const { payload } = action;

    switch (action.type) {
        case homeTypes.allAddress:
            
            return {
                ...state,
                allAddresses: payload
            }
        case homeTypes.currentAddress:
            
            return {
                ...state,
                currentAddress: payload
            }

        case homeTypes.water:
            
            return {
                ...state,
                water: payload
            }
        case homeTypes.electricity:
            
            return {
                ...state,
                electricity: payload
            }
        case homeTypes.gas:
            
            return {
                ...state,
                gas: payload
            }
        case homeTypes.phone:
            
            return {
                ...state,
                phone: payload
            }
    
        default:
            return state;
    }
  
}
