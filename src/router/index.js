import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Register, SignIn } from '../pages';

const Stack= createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
  )
}

export default Router