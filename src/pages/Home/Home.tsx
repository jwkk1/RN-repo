import CommonButtonMedium from '@/components/attr/CommonBtn';
import SearchCategory from '@/components/home/SearchCategory';
import { globalStyles } from '@/styles/globalStyle';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <SafeAreaView style={globalStyles.screen}>
      <View style={globalStyles.mainContainer}>
        <SearchCategory />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
