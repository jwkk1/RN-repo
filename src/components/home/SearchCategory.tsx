import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CommonButtonMedium from '@components/attr/CommonBtn';
import { location } from '../data/data';
import { heightPercentage, widthPercentage } from '@/styles/globalStyle';
import TravelInfoCard from './TravelInfoCard';
import { useGetSearchKeyword } from '@/pages/Home/_queries';

const SearchCategory = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('서울');

  const { searchKeywordList, isLoading } = useGetSearchKeyword(selectedLocation);

  useEffect(() => {
    console.log(searchKeywordList);
  }, [searchKeywordList]);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.category_BtnContainer}
      >
        {location.map((item, i) => {
          return (
            <View key={i}>
              <CommonButtonMedium
                text={item.name}
                buttonStyle={selectedLocation === item.name ? 'solid' : 'outLine'}
                mr={true}
                handler={() => setSelectedLocation(item.name)}
              />
            </View>
          );
        })}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.content}>
        <TravelInfoCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  category_BtnContainer: {
    flexDirection: 'row',
    marginBottom: heightPercentage(20),
  },
  //   content: {
  //     paddingHorizontal: widthPercentage(20),
  //   },
});

export default SearchCategory;
