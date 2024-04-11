import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import client from './src/GraphQL/client';
import Route from './src/navigation';

const App: FC = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Route />
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
