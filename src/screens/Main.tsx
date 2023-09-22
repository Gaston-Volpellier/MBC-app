import React, {useState} from 'react';
import 'react-native-gesture-handler';

import {useSession} from '../utils/SessionProvider';
import Loading from './Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_WEBCLIENT} from '@env';
import NavigatorRouter from './NavigationRouting';

function Main(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const {setIsAuthenticated, setHasAccess, handleUserData} = useSession();

  const findUser = async () => {
    setIsLoading(true);
    try {
      const idToken = await AsyncStorage.getItem('idToken');
      if (idToken !== null) {
        //Saves async data into session provider
        handleUserData(idToken);

        setIsAuthenticated(true);
        setHasAccess(true);
      } else {
        console.log('It is not authenticated yet.');
      }
      setIsLoading(false);
    } catch (e) {
      console.log('Authentication error.', e);
    }
  };

  React.useEffect(() => {
    try {
      findUser();
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  }, []);

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEBCLIENT,
      offlineAccess: true,
    });
  }, []);

  return <>{isLoading ? <Loading /> : <NavigatorRouter />}</>;
}

export default Main;
