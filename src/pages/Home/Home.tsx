import CommonButtonMedium from '@/components/attr/CommonBtn';
import PetTourArea from '@/components/home/petTour/PetTourArea';
import SearchCategory from '@/components/home/tour/SearchCategory';
import { globalStyles } from '@/styles/globalStyle';
import { HomeNavigatorProps, TourDetailNavigatorProps } from '@/types/navigation';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

type props = HomeNavigatorProps;

const Home = ({ navigation }: props) => {
  return (
    <SafeAreaView style={globalStyles.screen}>
      <ScrollView style={globalStyles.mainContainer} showsVerticalScrollIndicator={false}>
        <SearchCategory navigation={navigation} />
        <PetTourArea />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
