import { types } from "./";

export const authReducer = (state, action) => {

    const { payload } = action;

    switch (action.type) {
        case types.checkingStatus:
            
            return {
                ...state,
                status: 'checking',
            }
    
        case types.register:
            
            return {
                ...state,
                status: 'not-authenticated',
                errorMessage: payload?.errorMessage || null,
                message: payload?.message || null
            }
        case types.login:
            
            return {
                ...state,
                status: payload?.status || 'authenticated',
                email: payload.email,
                uid: payload.uid,
                errorMessage: null,
                message: null
            }
        case types.errorLogin:
            
            return {
                ...state,
                status: 'not-authenticated',
                errorMessage: payload?.errorMessage,
            }
        case types.logout:
            
            return {
                ...state,
                status: 'not-authenticated',
                email: null,
                uid: null,
                errorMessage: null,
                message: null
            }
    
        default:
            return state;
    }
  
}
