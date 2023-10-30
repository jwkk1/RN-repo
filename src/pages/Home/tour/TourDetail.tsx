import { TourDetailNavigatorProps } from '@/types/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useGetCommon } from '../_queries';
import FavoriteOn from 'assets/Home/favorite/on.svg';
import FavoriteOFF from 'assets/Home/favorite/off.svg';
import { globalStyles, heightPercentage, widthPercentage } from '@/styles/globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { searchKeywordListResponse } from '@/types/response';

type props = TourDetailNavigatorProps;

const TourDetail = ({ navigation, route }: props) => {
  const { commonDetail, isLoading } = useGetCommon(route.params.tourDetail.contentid);
  const [favoriteList, setFavoriteList] = useState<searchKeywordListResponse[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const onPressFavoriteIcon = async () => {
    const currentValue = JSON.stringify([route.params.tourDetail, ...favoriteList]);
    await AsyncStorage.setItem('favoriteTourList', currentValue);
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

  const removeStorageData = async () => {
    await AsyncStorage.removeItem('favoriteTourList');
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable style={styles.nav_right} onPress={() => onPressFavoriteIcon()}>
          <View style={styles.nav_icon}>{isFavorite ? <FavoriteOn /> : <FavoriteOFF />}</View>
        </Pressable>
      ),
    });
  }, [navigation, favoriteList]);

  useEffect(() => {
    getStorageFavoriteList();
  }, [commonDetail]);

  return (
    <SafeAreaView style={globalStyles.screen}>
      <ScrollView style={styles.scrollView}>
        <Text>asdasd</Text>
        <Button title="asd" onPress={removeStorageData} />
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
  scrollView: {
    paddingHorizontal: widthPercentage(20),
    paddingVertical: heightPercentage(20),
  },
});

export default TourDetail;
