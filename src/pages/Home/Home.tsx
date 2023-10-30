import CommonButtonMedium from '@/components/attr/CommonBtn';
import PetTourArea from '@/components/home/petTour/PetTourArea';
import SearchCategory from '@/components/home/tour/SearchCategory';
import { globalStyles } from '@/styles/globalStyle';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={globalStyles.screen}>
      <ScrollView style={globalStyles.mainContainer} showsVerticalScrollIndicator={false}>
        <SearchCategory />
        <PetTourArea />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
