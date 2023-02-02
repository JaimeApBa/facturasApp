
export const customErrorMessages = (msg) => {
    let message = '';
    
    switch (msg) {
        case 'Firebase: Error (auth/email-already-in-use).':
          message = 'El correo electrónico ya existe';
          break;
        case 'Firebase: Error (auth/invalid-email).':
          message = 'El correo electrónico no es correcto';
          break;
        case 'Firebase: Error (auth/user-not-found).':
          message = 'El usuario no existe';
          break;
        case 'Firebase: Error (auth/wrong-password).':
          message = 'La contraseña no es correcta';
          break;
      
        default:
          message = msg;
      }

      return message;
}
