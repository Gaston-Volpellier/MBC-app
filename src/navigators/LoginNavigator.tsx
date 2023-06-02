import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export default function LoginNavigator(props): JSX.Element {
  const {authenticate} = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login">
        {props => <Login authenticate={authenticate} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}