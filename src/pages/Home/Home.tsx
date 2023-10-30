import PetTourArea from '@/components/home/petTour/PetTourArea';
import SearchCategory from '@/components/home/tour/SearchCategory';
import { globalStyles } from '@/styles/globalStyle';
import { HomeNavigatorProps } from '@/types/navigation';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

type props = HomeNavigatorProps;

const Home = ({ navigation, route }: props) => {
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
