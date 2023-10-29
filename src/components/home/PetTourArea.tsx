import { useGetPetTour } from '@/pages/Home/_queries';
import { fontPercentage, heightPercentage } from '@/styles/globalStyle';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PetTourInfoCard from './PetTourInfoCard';
import { petTourListResponse } from '@/types/response';

const PetTourArea = () => {
  const { petTourList, isLoading } = useGetPetTour();

  return (
    <View>
      <Text style={styles.text_mainTitle}>반려동물 동반 여행지.</Text>
      <Text style={[styles.text_mainTitle, styles.mb20]}>반려동물과 함께 떠나요</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.content}>
        {petTourList?.map((item: petTourListResponse) => {
          return (
            <View key={item.contentid}>
              <PetTourInfoCard itemDetail={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text_mainTitle: {
    fontSize: fontPercentage(25),
    fontWeight: '800',
    lineHeight: heightPercentage(30),
  },
  content: {
    height: heightPercentage(400),
  },
  mb20: {
    marginBottom: heightPercentage(20),
  },
});

export default PetTourArea;
