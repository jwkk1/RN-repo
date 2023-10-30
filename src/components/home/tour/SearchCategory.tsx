import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import CommonButtonMedium from '@components/attr/CommonBtn';
import { regionCode } from '../../../constants/data';
import { fontPercentage, heightPercentage, widthPercentage } from '@/styles/globalStyle';
import TravelInfoCard from './TravelInfoCard';
import { useGetAreaBased } from '@/pages/Home/_queries';
import { searchKeywordListResponse } from '@/types/response';
import { HomeNavigatorProps } from '@/types/navigation';

type props = HomeNavigatorProps;

const SearchCategory = ({ navigation, route }: props) => {
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(undefined);
  const { areaBasedList, isLoading } = useGetAreaBased(selectedLocation);

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
                buttonStyle={selectedLocation === item.code ? 'solid' : 'outLine'}
                margin
                handler={() => setSelectedLocation(item.code)}
              />
            </View>
          );
        })}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.content}>
        {areaBasedList?.map((item: searchKeywordListResponse) => {
          return (
            <Pressable
              key={item.contentid}
              onPress={() => navigation.navigate('TourDetail', { tourDetail: item })}
            >
              <TravelInfoCard itemDetail={item} />
            </Pressable>
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
