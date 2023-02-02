import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';
import { customErrorMessages } from '../auth/validators';


export const registerUserWithMailAndPassword = async (email, password) => {
  
  try {
    await createUserWithEmailAndPassword(FirebaseAuth, email, password);

    return {
      ok: true,
      message: 'success'
    }

  } catch (error) {
    const errorMessage = customErrorMessages(error.message);
    
    return {
        ok: false,
        errorMessage,
        message: null
    }
  }
}

export const loginWithMailPassword = async( email, password ) => {

  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

    const { uid } = resp.user;

    return {
      ok: true,
      email,
      uid
    }

  } catch (error) {
    const errorMessage = customErrorMessages(error.message);

    return {
      ok: false,
      errorMessage
    }
  }

}

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
}
