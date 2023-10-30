import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from '@/pages/Home/Home';
import { RootStackParamList } from '@/types/navigation';
import TourDetail from '@/pages/Home/tour/TourDetail';

const HomeNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={() => ({
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="TourDetail" component={TourDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
