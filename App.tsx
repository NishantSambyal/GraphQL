import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import Route from './src/navigation';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default App;
