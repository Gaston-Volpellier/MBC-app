import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useContext, useState} from 'react';
import {clearAllAsyncData, storeData} from '../services/functions';
import {googleLogOut} from './GoogleAuth';
import {serverLogout, validateApi} from '../services/api';

const SessionContext = createContext();

export default function SessionProvider({children}): JSX.Element {
  const session = useSessionProvider();
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => {
  return useContext(SessionContext);
};

function useSessionProvider() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [idToken, setIdToken] = useState('');
  const [photo, setPhoto] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [google_id, setGoogleId] = useState('');
  const [isAdmin, setIsAdmin] = useState(0);
  const [notEmail, setNotEmail] = useState(false);
  const [notPush, setNotPush] = useState(false);
  const [showAd, setShowAd] = useState(true);
  const [passwordCode, setPasswordCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasAccess, setHasAccess] = useState(isAuthenticated);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [scannedCoupon, setScannedCoupon] = useState();
  const [adData, setAdData] = useState({
    foto: '',
    btn_link: '',
    btn_txt: '',
    descripcion: '',
    titulo: '',
  });
  const [socialData, setSocialData] = useState({
    facebook: '',
    instagram: '',
    terminos: '',
    politicas: '',
    tienda: ''
  });

  const clearSession = () => {
    console.log('Clearing session...');
    setUserName('');
    setEmail('');
    setIdToken('');
    setPhoto('');
    setBirthDate('');
    setPhone('');
    setGoogleId('');
    setNotEmail(false);
    setNotPush(false);
    setIsAdmin(0);
    clearAllAsyncData();
  };

  const logout = () => {
    console.log('Logging out...');
    serverLogout(idToken);
    googleLogOut();
    clearSession();
    setIsAuthenticated(false);
    setHasAccess(false);
  };

  const handleUserData = async (idToken: string) => {
    const response = await validateApi(idToken);

    if (!response.error && response.cliente) {
      setIdToken(idToken);

      const userName: string | null = response.cliente.nombre;
      const email: string | null = response.cliente.email;
      const photo: string | null = await AsyncStorage.getItem('photo');
      let birthDate: string | null = response.cliente.fecha_nacimiento;;
      const phone: string | null = response.cliente.telefono;;
      const google_id: string | null = response.cliente.google_id;;
      const notEmail: string | null = response.cliente.not_email;;
      const notPush: string | null = response.cliente.not_push;;
      const isadminString: string | null = await AsyncStorage.getItem('isAdmin');
      const isAdmin = parseInt(isadminString);

      let parts = birthDate ? birthDate.split('-') : [];
      if (parts.length == 3) birthDate = parts.reverse().join('/');

      userName && setUserName(userName);
      email && setEmail(email);
      photo && setPhoto(photo);
      birthDate && setBirthDate(birthDate);
      phone && setPhone(phone);
      google_id && setGoogleId(google_id);
      notEmail && setNotEmail(notEmail == '1' ? true : false);
      notPush && setNotPush(notPush == '1' ? true : false);
      isAdmin && setIsAdmin(isAdmin);
      !isAdmin && setShowAd(false);
    }else {
      serverLogout(idToken);
      googleLogOut();
      clearSession();
      setIsAuthenticated(false);
      setHasAccess(false);
    }
  };

  const storeUserData = async (
    token: string,
    name: string,
    email: string,
    birthDate: string,
    phone?: string,
    google_id?: string,
    notEmail?: boolean,
    notPush?: boolean,
    photo?: string,
    isAdmin?: number,
  ) => {
    //Stores data from the api into async storage & session state.
    storeData('name', name);
    setUserName(name);
    storeData('email', email);
    setEmail(email);
    storeData('idToken', token);
    setIdToken(token);
    birthDate && (storeData('birthDate', birthDate), setBirthDate(birthDate));
    phone && (storeData('phone', phone), setPhone(phone));
    google_id && (storeData('google_id', google_id), setGoogleId(google_id));
    notEmail && (storeData('notEmail', notEmail), setNotEmail(notEmail));
    notPush && (storeData('notPush', notPush), setNotPush(notPush));
    photo && (storeData('photo', photo), setPhoto(photo));
    isAdmin && (storeData('isAdmin', isAdmin.toString()), setIsAdmin(isAdmin));
    setShowAd(true);
  };

  return {
    userName,
    email,
    idToken,
    photo,
    isAuthenticated,
    birthDate,
    phone,
    google_id,
    notEmail,
    notPush,
    isAdmin,
    setIsAuthenticated,
    clearSession,
    handleUserData,
    storeUserData,
    logout,
    setNotEmail,
    setNotPush,
    setIsAdmin,
    passwordCode,
    setPasswordCode,
    setEmail,
    setUserName,
    setIdToken,
    showAd,
    setShowAd,
    hasAccess,
    setHasAccess,
    loginModalVisible,
    setLoginModalVisible,
    scannedCoupon,
    setScannedCoupon,
    adData,
    setAdData,
    socialData,
    setSocialData
  };
}
