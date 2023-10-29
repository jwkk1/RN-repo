import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CommonButtonMedium from '@components/attr/CommonBtn';
import { regionCode } from '../../constants/data';
import { fontPercentage, heightPercentage, widthPercentage } from '@/styles/globalStyle';
import TravelInfoCard from './TravelInfoCard';
import { useGetSearchKeyword } from '@/pages/Home/_queries';
import { searchKeywordListResponse } from '@/types/response';

const SearchCategory = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('전국');
  const { searchKeywordList, isLoading } = useGetSearchKeyword(selectedLocation);

  return (
    <View style={styles.container}>
      <Text style={styles.text_mainTitle}>지역별 맞춤 여행 정보</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.category_BtnContainer}
      >
        {regionCode.map((item, i) => {
          return (
            <View key={i}>
              <CommonButtonMedium
                text={item.id}
                buttonStyle={selectedLocation === item.id ? 'solid' : 'outLine'}
                margin
                handler={() => setSelectedLocation(item.id)}
              />
            </View>
          );
        })}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.content}>
        {searchKeywordList?.map((item: searchKeywordListResponse) => {
          return (
            <View key={item.contentid}>
              <TravelInfoCard itemDetail={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthPercentage(-10),
    marginBottom: heightPercentage(30),
  },
  text_mainTitle: {
    fontSize: fontPercentage(25),
    fontWeight: '800',
    marginBottom: heightPercentage(20),
    paddingLeft: widthPercentage(10),
  },
  category_BtnContainer: {
    flexDirection: 'row',
    marginBottom: heightPercentage(20),
  },
  content: {
    height: heightPercentage(190),
  },
});

export default SearchCategory;
