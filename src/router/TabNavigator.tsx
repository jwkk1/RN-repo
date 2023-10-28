import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import HomeUnactive from '@assets/tabBar/Property 1=tab_1, Property 2=unactive.svg';
import HomeActive from '@assets/tabBar/Property 1=tab_1, Property 2=active.svg';
import RecodeActive from '@assets/tabBar/Property 1=tab_2, Property 2=active.svg';
import RecodeUnactive from '@assets/tabBar/Property 1=tab_2, Property 2=unactive.svg';
import MagazineActive from '@assets/tabBar/Property 1=tab_5, Property 2=active.svg';
import MagazineUnactive from '@assets/tabBar/Property 1=tab_5, Property 2=unactive.svg';
import ShoppingActive from '@assets/tabBar/Property 1=tab_4, Property 2=active.svg';
import ShoppingunActive from '@assets/tabBar/Property 1=tab_4, Property 2=unactive.svg';
import HomeNavigator from './HomeNavigator';
import { heightPercentage, widthPercentage } from '@/styles/globalStyle';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }: { navigation: any }) => {
  const [activeTab, setActiveTab] = useState<string>('HomeNavigator');

  return (
    <Tab.Navigator
      tabBar={() => {
        return (
          <View style={styles.tabBar}>
            <Pressable
              onPress={() => {
                setActiveTab('HomeNavigator');
                navigation.navigate('HomeNavigator');
              }}
            >
              {activeTab === 'HomeNavigator' ? <HomeActive /> : <HomeUnactive />}
            </Pressable>
            <Pressable
              onPress={() => {
                setActiveTab('Navigator2');
                navigation.navigate('Navigator2');
              }}
            >
              {activeTab === 'Navigator2' ? <RecodeActive /> : <RecodeUnactive />}
            </Pressable>
            <Pressable
              onPress={() => {
                setActiveTab('Shopping');
                navigation.navigate('Shopping');
              }}
            >
              {activeTab === 'Shopping' ? <ShoppingActive /> : <ShoppingunActive />}
            </Pressable>
            <Pressable
              onPress={() => {
                setActiveTab('Magazine');
                navigation.navigate('Magazine');
              }}
            >
              {activeTab === 'Magazine' ? <MagazineActive /> : <MagazineUnactive />}
            </Pressable>
          </View>
        );
      }}
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        initialParams={{}}
        options={{
          title: '홈',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Navigator2"
        component={Navigator2}
        initialParams={{}}
        options={{
          title: '홈',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: heightPercentage(70),
    paddingHorizontal: widthPercentage(25),
    paddingVertical: heightPercentage(8),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

const Navigator2 = () => {
  return (
    <View>
      <Text>2</Text>
    </View>
  );
};

export default TabNavigator;
