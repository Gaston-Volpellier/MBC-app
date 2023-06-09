import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/navigators/BottomNavigator';
import LoginNavigator from './src/navigators/LoginNavigator';
import DrawerNavigator from './src/navigators/DrawerNavigator';
import Loading from './src/screens/Loading';

function App(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {/* <Loading /> */}
      {isAuthenticated ? (
        <DrawerNavigator
          authenticated={isAuthenticated}
          authenticate={setIsAuthenticated}
        />
      ) : (
        <LoginNavigator authenticate={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}

export default App;
