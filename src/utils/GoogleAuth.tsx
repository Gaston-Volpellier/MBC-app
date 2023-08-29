import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const googleLogOut = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
};

export const GoogleSingUp = async () => {
  let errorObj = {error: true, msg: ''};
  try {
    await GoogleSignin.hasPlayServices();
    const user = await GoogleSignin.signIn();

    return user;
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      errorObj.msg = 'Inicio de sesion cancelada !';
      return errorObj;
    } else if (error.code === statusCodes.IN_PROGRESS) {
      errorObj.msg = 'Sesion ya iniciada en otro dispositivo';
      return errorObj;
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      errorObj.msg =
        'Google play services no esta disponible o esta desactualizado !';
      return errorObj;
    } else {
      console.log(error);
      return false;
    }
  }
};

export const revokeGoogleAccess = async () => {
  try {
    const googleDelete = await GoogleSignin.revokeAccess();
    console.log('Google revoke Access: ', googleDelete);
  } catch (error) {
    console.log('Google delete error:', error);
  }
};
