import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Text, View } from 'react-native';

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

const Home = () => {
  return (
    <View>
      <Text>asasdd</Text>
    </View>
  );
};

export default HomeNavigator;
