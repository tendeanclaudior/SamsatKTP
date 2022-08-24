import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddVehicle,
  Akun,
  Dashboard,
  ListVehicle,
  Login,
  LoginGoogle,
  Notification,
  Register,
  VehicleDetail,
} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginGoogle"
        component={LoginGoogle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListVehicle"
        component={ListVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VehicleDetails"
        component={VehicleDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddVehicle"
        component={AddVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Akun}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
