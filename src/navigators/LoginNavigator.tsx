import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Access from '../screens/Access';
import Recovery from '../screens/Recovery';
import RecoveryCode from '../screens/RecoveryCode';
import PasswordReset from '../screens/PasswordReset';
import Register from '../screens/Register';
import Success from '../screens/Success';

type NativeStackParamList = {
  Login: undefined;
  Access: undefined;
  Recovery: undefined;
  RecoveryCode: undefined;
  PasswordReset: undefined;
  Register: undefined;
  Success: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

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
      <Stack.Screen name="Access">
        {props => <Access authenticate={authenticate} />}
      </Stack.Screen>
      <Stack.Screen name="Recovery" component={Recovery} />
      <Stack.Screen name="RecoveryCode" component={RecoveryCode} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Success">
        {props => <Success authenticate={authenticate} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
