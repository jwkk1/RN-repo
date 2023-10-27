import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';

const Navigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Navigator;
