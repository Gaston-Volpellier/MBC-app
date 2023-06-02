import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Offers from '../screens/Offers';
import Coupons from '../screens/Coupons';
import Stores from '../screens/Stores';

const Stack = createNativeStackNavigator();

export default function HomeNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Offers" component={Offers} />
      <Stack.Screen name="Coupons" component={Coupons} />
      <Stack.Screen name="Stores" component={Stores} />
    </Stack.Navigator>
  );
}
