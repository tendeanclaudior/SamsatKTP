import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './router';
import { Akun, Register } from './pages';
import { ExpandList } from './components/molecules';
import ExpandList2 from './components/molecules/ExpandList2';


const App = () => {
  return (
    <NavigationContainer>
      <Akun />
      {/* <ExpandList2 /> */}
    </NavigationContainer>
  );
};

export default App;
