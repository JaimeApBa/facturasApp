import { useReducer } from "react";
import { loginWithMailPassword, logoutFirebase, registerUserWithMailAndPassword } from "../../firebase/provider";
import { AuthContext, authReducer, types } from './';


export const AuthProvider = ({ children }) => {
  
    const initialState = {
        status: 'checking',
        uid: null,
        email: null,
        errorMessage: null,
        message: null
    }

    const [authState, dispatch] = useReducer(authReducer, initialState);

    const registerWithCredentials = async ({ email, password }) => {
        
        const result = await registerUserWithMailAndPassword(email, password);
        
        const action = {
            type: types.register,
            payload: result
        }

        dispatch(action);
    }

    const loginWithCredentials = async({ email, password }) => {
        const result = await loginWithMailPassword(email, password);
    
        const { ok } = result;
        let actionType = '';

        if(ok) {
            actionType = types.login;
        } else {
            actionType = types.errorLogin;
        }
        
        const action = {
            type: actionType,
            payload: result
        }

        dispatch(action);
    }

    const login = ({ email, uid }) => {
        const action = {
            type: types.login,
            payload: { email, uid }
        }

        dispatch(action)
    }

    const logout = () => {
        
        logoutFirebase();
        
        const action = {
            type: types.logout
        }

        dispatch(action)
    }
    
    const checkingStatus = () => {
        const action = {
            type: types.checkingStatus
        }
        dispatch(action)
    }

    return(
        <AuthContext.Provider
            value={ {
                ...authState,
                registerWithCredentials,
                loginWithCredentials,
                login,
                logout,
                checkingStatus
            }}
        >
        { children }
        </ AuthContext.Provider>
    )
}
