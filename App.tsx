import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SessionProvider from './src/utils/SessionProvider';
import Main from './src/screens/Main';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SessionProvider>
        <Main />
      </SessionProvider>
    </NavigationContainer>
  );
}

export default App;
