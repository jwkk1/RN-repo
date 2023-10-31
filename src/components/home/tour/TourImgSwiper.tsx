import { fontPercentage, heightPercentage } from '@/styles/globalStyle';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

interface props {
  imgArr: string[];
}

const TourImgSwiper = ({ imgArr }: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_title}>관광지 이미지</Text>
      <Swiper>
        {imgArr?.map((item, i) => {
          return (
            <View key={i}>
              <Image style={styles.img} resizeMode="cover" source={{ uri: item }} />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: heightPercentage(250),
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  text_title: {
    fontSize: fontPercentage(18),
    letterSpacing: -0.5,
    lineHeight: 24,
    fontWeight: '800',
    marginBottom: heightPercentage(10),
  },
});

export default TourImgSwiper;
