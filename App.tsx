import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SessionProvider from './src/utils/SessionProvider';
import Main from './src/screens/Main';
import DataProvider from './src/utils/DataProvider';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SessionProvider>
        <DataProvider>
          <Main />
        </DataProvider>
      </SessionProvider>
    </NavigationContainer>
  );
}

export default App;
