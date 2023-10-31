import { heightPercentage, widthPercentage } from '@/styles/globalStyle';
import { searchKeywordListResponse } from '@/types/response';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface props {
  detailInfo: searchKeywordListResponse;
}

const SearchCardInfo = ({ detailInfo }: props) => {
  if (detailInfo.firstimage)
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{ uri: detailInfo.firstimage.replace('http', 'https') }}
        />
        <Text>123</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPercentage(15),
    paddingVertical: heightPercentage(15),
    flexDirection: 'row',
    borderradius: 30,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: heightPercentage(10),
  },
  img: {
    width: widthPercentage(90),
    height: heightPercentage(70),
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: widthPercentage(20),
  },
});

export default SearchCardInfo;
