import { useGetCommon } from '@/pages/Home/_queries';
import { fontPercentage, heightPercentage, widthPercentage } from '@/styles/globalStyle';
import { petTourListResponse } from '@/types/response';
import React, { useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

interface props {
  itemDetail: petTourListResponse;
}

const PetTourInfoCard = ({ itemDetail }: props) => {
  const { commonDetail, isLoading } = useGetCommon(itemDetail.contentid);

  useEffect(() => {
    console.log(commonDetail);
  }, [commonDetail]);

  if (commonDetail?.firstimage)
    return (
      <Pressable style={styles.card}>
        <Image style={styles.img} resizeMode="cover" source={{ uri: commonDetail.firstimage }} />
        <Text style={styles.text_title} numberOfLines={1} ellipsizeMode="tail">
          {commonDetail.title}
        </Text>
        <Text style={styles.text_petInfo} numberOfLines={1} ellipsizeMode="tail">
          {itemDetail.acmpyNeedMtr}
        </Text>
      </Pressable>
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
  text_petInfo: {
    fontSize: fontPercentage(13),
    color: '#333',
  },
  text_title: {
    fontSize: fontPercentage(17),
    fontWeight: '700',
    width: 200,
  },
});

export default PetTourInfoCard;
