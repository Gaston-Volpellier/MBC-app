import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './src/navigators/BottomNavigator';
import LoginNavigator from './src/navigators/LoginNavigator';

function App(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <BottomNavigator />
      ) : (
        <LoginNavigator authenticate={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}

export default App;
