import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { RootStackParamList } from '@/types/navigator.type';
import { Text, View } from 'react-native';

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
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
