import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Settings from '../screens/Settings';
import Notifications from '../screens/Notifications';
import DeleteAccount from '../screens/DeleteAccount';
import Legal from '../screens/Legal';
import Privacy from '../screens/Privacy';

type NativeStackParamList = {
  Profile: undefined;
  Edit_Profile: undefined;
  Settings: undefined;
  Notifications: undefined;
  Delete_Account: undefined;
  Legal: undefined;
  Privacy: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

export default function SettingsNavigator({route}): JSX.Element {
  const routeName = route.params.routeName;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={routeName}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit_Profile" component={EditProfile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Delete_Account" component={DeleteAccount} />
      <Stack.Screen name="Legal" component={Legal} />
      <Stack.Screen name="Privacy" component={Privacy} />
    </Stack.Navigator>
  );
}
