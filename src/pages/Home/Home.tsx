import PetTourArea from '@/components/home/petTour/PetTourArea';
import SearchCategory from '@/components/home/tour/SearchCategory';
import { globalStyles, widthPercentage } from '@/styles/globalStyle';
import { HomeNavigatorProps } from '@/types/navigation';
import React, { useEffect } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import SearchIcon from '@assets/tabBar/search.svg';

type props = HomeNavigatorProps;

const Home = ({ navigation, route }: props) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            style={{ marginRight: widthPercentage(20) }}
            onPress={() => navigation.navigate('SearchPage')}
          >
            <SearchIcon />
          </Pressable>
        );
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView style={globalStyles.screen}>
      <ScrollView style={globalStyles.mainContainer} showsVerticalScrollIndicator={false}>
        <SearchCategory navigation={navigation} route={route} />
        <PetTourArea />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
