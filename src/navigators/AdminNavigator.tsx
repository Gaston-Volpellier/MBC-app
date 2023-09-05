import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminView from '../screens/AdminView';
import CashierCoupon from '../screens/CashierCoupon';
import ScanCoupon from '../screens/ScanCoupon';
import EnterCoupon from '../screens/EnterCoupon';

type NativeStackParamList = {
  AdminView: undefined;
  ScanCoupon: undefined;
  EnterCoupon: undefined;
  CashierCoupon: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

export default function AdminNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'AdminView'}>
      <Stack.Screen name="AdminView" component={AdminView} />
      <Stack.Screen name="ScanCoupon" component={ScanCoupon} />
      <Stack.Screen name="EnterCoupon" component={EnterCoupon} />
      <Stack.Screen name="CashierCoupon" component={CashierCoupon} />
    </Stack.Navigator>
  );
}
