import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { StyleSheet, Text, View } from 'react-native';
import { fontPercentage, heightPercentage, widthPercentage } from '@/styles/globalStyle';

const Stack = createStackNavigator();

const Navigator = () => {
  const toastConfig = {
    customToast: ({ text1 }: { text1: string }) => (
      <View style={styles.toastUI}>
        <Text style={styles.text_toastUI}>{text1}</Text>
      </View>
    ),
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} position="bottom" bottomOffset={heightPercentage(90)} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  toastUI: {
    paddingHorizontal: widthPercentage(30),
    opacity: 0.7,
    borderRadius: 20,
    backgroundColor: '#2f2f2f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: heightPercentage(8),
  },
  text_toastUI: {
    fontSize: fontPercentage(14),
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.56,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default Navigator;
