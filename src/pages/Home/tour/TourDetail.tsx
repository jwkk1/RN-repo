import { TourDetailNavigatorProps } from '@/types/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useGetCommon } from '../_queries';
import FavoriteOn from 'assets/Home/favorite/on.svg';
import FavoriteOFF from 'assets/Home/favorite/off.svg';
import {
  fontPercentage,
  globalStyles,
  heightPercentage,
  widthPercentage,
} from '@/styles/globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { searchKeywordListResponse } from '@/types/response';

type props = TourDetailNavigatorProps;

const TourDetail = ({ navigation, route }: props) => {
  const { commonDetail, isLoading } = useGetCommon(route.params.tourDetail.contentid);
  const [favoriteList, setFavoriteList] = useState<searchKeywordListResponse[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const onPressFavoriteIcon = async () => {
    if (isFavorite) {
      const deleteCurrentValue = favoriteList.filter((item) => {
        return item.contentid !== route.params.tourDetail.contentid;
      });
      const jsonReturnValue = JSON.stringify(deleteCurrentValue);
      await AsyncStorage.setItem('favoriteTourList', jsonReturnValue);
      setIsFavorite(false);
    } else {
      const currentValue = JSON.stringify([route.params.tourDetail, ...favoriteList]);
      await AsyncStorage.setItem('favoriteTourList', currentValue);
      setIsFavorite(true);
    }
  };

  const getStorageFavoriteList = async () => {
    const storageValue = await AsyncStorage.getItem('favoriteTourList');
    if (storageValue !== null) {
      const arrayValue = JSON.parse(storageValue);
      setFavoriteList(arrayValue);
      arrayValue.map((item: searchKeywordListResponse) => {
        if (item.contentid === route.params.tourDetail.contentid) {
          setIsFavorite(true);
        }
      });
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable style={styles.nav_right} onPress={() => onPressFavoriteIcon()}>
          <View style={styles.nav_icon}>{isFavorite ? <FavoriteOn /> : <FavoriteOFF />}</View>
        </Pressable>
      ),
    });
  }, [navigation, favoriteList, isFavorite]);

  useEffect(() => {
    getStorageFavoriteList();
  }, [commonDetail]);

  return (
    <SafeAreaView style={globalStyles.screen}>
      <ScrollView style={styles.scrollView} stickyHeaderIndices={[0]}>
        <View style={styles.headerContainer}>
          <Text style={styles.text_headerAddr}>addr1</Text>
          <Text style={styles.text_headerTitle}>title</Text>
        </View>
        <View style={styles.imgContainer}>
          <Text>img</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  nav_right: {
    marginRight: widthPercentage(20),
  },
  nav_icon: {
    padding: 4,
  },
  text_headerAddr: {
    fontSize: fontPercentage(16),
    color: '#898989',
    marginBottom: heightPercentage(8),
  },
  imgContainer: {
    backgroundColor: '#FFFFFF',
  },
  text_headerTitle: {
    fontSize: fontPercentage(26),
    letterSpacing: -0.5,
    lineHeight: 24,
    fontWeight: '500',
    color: '#000000',
  },
  headerContainer: {
    paddingVertical: heightPercentage(20),
    paddingHorizontal: widthPercentage(20),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginBottom: heightPercentage(10),
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});

export default TourDetail;
