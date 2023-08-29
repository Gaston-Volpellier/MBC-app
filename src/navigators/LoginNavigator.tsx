import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Access from '../screens/Access';
import Recovery from '../screens/Recovery';
import RecoveryCode from '../screens/RecoveryCode';
import PasswordReset from '../screens/PasswordReset';
import Register from '../screens/Register';
import Success from '../screens/Success';
import AdminView from '../screens/AdminView';

type NativeStackParamList = {
  Login: undefined;
  Access: undefined;
  Recovery: undefined;
  RecoveryCode: undefined;
  PasswordReset: undefined;
  Register: undefined;
  Success: undefined;
  AdminView: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

export default function LoginNavigator(props): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login">{props => <Login />}</Stack.Screen>
      <Stack.Screen name="Access">{props => <Access />}</Stack.Screen>
      <Stack.Screen name="Recovery" component={Recovery} />
      <Stack.Screen name="RecoveryCode" component={RecoveryCode} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="AdminView" component={AdminView} />
    </Stack.Navigator>
  );
}
