import { TourDetailNavigatorProps } from '@/types/navigation';
import React, { useEffect, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Vibration,
  View,
} from 'react-native';
import FavoriteOn from 'assets/Home/favorite/on.svg';
import FavoriteOFF from 'assets/Home/favorite/off.svg';
import {
  colors,
  fontPercentage,
  globalStyles,
  heightPercentage,
  widthPercentage,
} from '@/styles/globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { searchKeywordListResponse } from '@/types/response';
import TourMapMarker from '@/components/home/tour/TourMapMarker';
import TourImgSwiper from '@/components/home/tour/TourImgSwiper';
import { useGetCommonDetail } from '../_queries';

type props = TourDetailNavigatorProps;

const TourDetail = ({ navigation, route }: props) => {
  const { commonDetail, isLoading } = useGetCommonDetail(route.params.tourDetail.contentid);
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

  const extractValues = (obj: searchKeywordListResponse) => {
    const returnValue = [
      obj['firstimage'].replace('http', 'https'),
      obj['firstimage2'].replace('http', 'https'),
    ];
    return returnValue;
  };

  if (commonDetail)
    return (
      <SafeAreaView style={globalStyles.screen}>
        <ScrollView style={styles.scrollView} stickyHeaderIndices={[0]}>
          <View style={[styles.headerContainer, styles.padding]}>
            <Text style={styles.text_headerAddr}>{commonDetail.addr1}</Text>
            <Text style={styles.text_headerTitle}>{commonDetail.title}</Text>
          </View>
          <View style={[styles.imgContainer, styles.padding]}>
            <TourImgSwiper imgArr={extractValues(commonDetail)} />
          </View>
          <View style={[styles.mapContainer, styles.padding]}>
            <TourMapMarker
              latitude={commonDetail.mapy}
              longitude={commonDetail.mapx}
              title={commonDetail.title}
            />
          </View>
          <View style={[styles.descriptContaienr, styles.padding]}>
            <View style={[styles.rowCon]}>
              <Text style={styles.text_subTitle}>주소</Text>
              <Text
                style={[
                  styles.text_subTitle,
                  { fontSize: fontPercentage(16), color: colors.signature },
                ]}
              >
                우편번호 : {commonDetail.zipcode}
              </Text>
            </View>
            <Text style={styles.text_content}>{commonDetail.addr1}</Text>
            <Text style={styles.text_content}>{commonDetail.addr2}</Text>
            <View style={[{ marginTop: heightPercentage(15) }]}>
              <Text style={styles.text_subTitle}>상세정보</Text>
              <View style={styles.descript}>
                <Text style={styles.text_content}>{commonDetail.overview}</Text>
              </View>
            </View>
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
    marginBottom: heightPercentage(8),
  },
  mapContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: heightPercentage(8),
  },
  descript: {
    borderRadius: 16,
    backgroundColor: '#eee',
    paddingHorizontal: widthPercentage(15),
    paddingVertical: heightPercentage(15),
  },
  padding: {
    paddingVertical: heightPercentage(20),
    paddingHorizontal: widthPercentage(20),
  },
  descriptContaienr: {
    backgroundColor: '#FFFFFF',
  },
  rowCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text_headerTitle: {
    fontSize: fontPercentage(26),
    letterSpacing: -0.5,
    lineHeight: 24,
    fontWeight: '500',
    color: '#000000',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginBottom: heightPercentage(8),
    shadowColor: 'rgba(24, 39, 75, 0.3)',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  text_subTitle: {
    fontSize: fontPercentage(20),
    fontWeight: '700',
    color: '#434343',
    marginBottom: heightPercentage(18),
  },
  text_content: {
    fontSize: fontPercentage(16),
    color: '#000000',
    marginBottom: heightPercentage(4),
  },
});

export default TourDetail;
