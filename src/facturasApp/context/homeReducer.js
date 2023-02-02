import { homeTypes } from "./";

export const homeReducer = ( state, action ) => {

    const { payload } = action;

    switch (action.type) {
        case homeTypes.allAddress:
            
            return {
                ...state,
                allAddresses: payload
            }

        case homeTypes.billings:
            
            return {
                ...state,
                billings: payload
            }
    
        default:
            return state;
    }
  
}
