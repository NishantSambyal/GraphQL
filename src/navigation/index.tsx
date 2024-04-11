import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  RoutesItem,
  authenticatedStackRoutes,
} from './utility/screenConstants';
import { RootStackProps } from './utility/types';

const Route = () => {
  const Stack = createNativeStackNavigator<RootStackProps>();

  const renderHomeStack = () => {
    return (
      <>
        {authenticatedStackRoutes.map((item: RoutesItem<RootStackProps>) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {renderHomeStack()}
    </Stack.Navigator>
  );
};

export default Route;
