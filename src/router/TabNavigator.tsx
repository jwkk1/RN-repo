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
import { colors, fontPercentage, heightPercentage, widthPercentage } from '@/styles/globalStyle';
import Map from '@/pages/Map/Map';

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
              {activeTab === 'HomeNavigator' ? (
                <View style={styles.btn}>
                  <HomeActive />
                  <Text
                    style={[
                      styles.text_btn,
                      activeTab === 'HomeNavigator' && { color: colors.signature },
                    ]}
                  >
                    홈
                  </Text>
                </View>
              ) : (
                <View style={styles.btn}>
                  <HomeUnactive />
                  <Text style={styles.text_btn}>홈</Text>
                </View>
              )}
            </Pressable>
            <Pressable
              onPress={() => {
                setActiveTab('My');
                navigation.navigate('My');
              }}
            >
              {activeTab === 'My' ? (
                <View style={styles.btn}>
                  <RecodeActive />
                  <Text
                    style={[styles.text_btn, activeTab === 'My' && { color: colors.signature }]}
                  >
                    MY
                  </Text>
                </View>
              ) : (
                <View style={styles.btn}>
                  <RecodeUnactive />
                  <Text style={styles.text_btn}>MY</Text>
                </View>
              )}
            </Pressable>
            <Pressable
              onPress={() => {
                setActiveTab('Shopping');
                navigation.navigate('Shopping');
              }}
            >
              {activeTab === 'Shopping' ? (
                <View style={styles.btn}>
                  <ShoppingActive />
                  <Text
                    style={[
                      styles.text_btn,
                      activeTab === 'Shopping' && { color: colors.signature },
                    ]}
                  >
                    쇼핑
                  </Text>
                </View>
              ) : (
                <View style={styles.btn}>
                  <ShoppingunActive />
                  <Text style={styles.text_btn}>쇼핑</Text>
                </View>
              )}
            </Pressable>
            <Pressable
              onPress={() => {
                setActiveTab('Map');
                navigation.navigate('Map');
              }}
            >
              {activeTab === 'Map' ? (
                <View style={styles.btn}>
                  <MagazineActive />
                  <Text
                    style={[styles.text_btn, activeTab === 'Map' && { color: colors.signature }]}
                  >
                    지도
                  </Text>
                </View>
              ) : (
                <View style={styles.btn}>
                  <MagazineUnactive />
                  <Text style={styles.text_btn}>지도</Text>
                </View>
              )}
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
        name="My"
        component={My}
        initialParams={{}}
        options={{
          title: '홈',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
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
    backgroundColor: '#FFFFFF',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_btn: {
    fontSize: fontPercentage(12),
    fontWeight: '600',
  },
});

const My = () => {
  return (
    <View>
      <Text>2</Text>
    </View>
  );
};

export default TabNavigator;
