import { fontPercentage, heightPercentage, widthPercentage } from '@/styles/globalStyle';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const TravelInfoCard = () => {
  return (
    <Pressable style={styles.card}>
      <Image
        style={styles.img}
        resizeMode="cover"
        source={{ uri: 'https://tong.visitkorea.or.kr/cms/resource/85/2031885_image2_1.jpg' }}
      />
      <Text style={styles.text_title} numberOfLines={1} ellipsizeMode="tail">
        asdasdasdasdasdasdasdasd
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: widthPercentage(20),
  },
  img: {
    width: 200,
    height: 140,
    borderRadius: 20,
    marginBottom: heightPercentage(10),
    overflow: 'hidden',
  },
  text_title: {
    fontSize: fontPercentage(17),
    fontWeight: '700',
    width: 200,
  },
});

export default TravelInfoCard;
