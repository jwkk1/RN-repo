import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from '@/pages/Home/Home';

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={() => ({
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
