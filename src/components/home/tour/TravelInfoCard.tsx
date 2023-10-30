import { fontPercentage, heightPercentage, widthPercentage } from '@/styles/globalStyle';
import { searchKeywordListResponse } from '@/types/response';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface props {
  itemDetail: searchKeywordListResponse;
}

const TravelInfoCard = ({ itemDetail }: props) => {
  useEffect(() => {
    console.log(itemDetail.contentid);
  }, [itemDetail]);
  if (itemDetail.firstimage)
    return (
      <View style={styles.card}>
        <Image style={styles.img} resizeMode="cover" source={{ uri: itemDetail.firstimage }} />
        <Text style={styles.text_title} numberOfLines={1} ellipsizeMode="tail">
          {itemDetail.title}
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: widthPercentage(7),
  },
  img: {
    width: widthPercentage(200),
    height: heightPercentage(140),
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
