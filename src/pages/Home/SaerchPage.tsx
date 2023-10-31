import BackBtn from '@/components/attr/NavBackBtn';
import { globalStyles, heightPercentage, widthPercentage } from '@/styles/globalStyle';
import React, { useEffect, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SearchIcon from '@assets/tabBar/search.svg';
import { SearchPageNavigatorProps } from '@/types/navigation';
import DeleteIcon from '@assets/arrt/btn/delete.svg';
import { useGetSearchKeyword } from './_queries';
import SearchCardInfo from '@/components/home/saerch/SaerchCardInfo';
import { FlatList } from 'react-native-gesture-handler';

type props = SearchPageNavigatorProps;

const SearchPage = ({ navigation }: props) => {
  const [onFocus, setOnfocus] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const { searchKeywordList, isLoading, fetchNextPage } = useGetSearchKeyword(searchKeyword);

  const dataTest = () => {
    const array = searchKeywordList?.pages.map((item) => item.data.response.body.items.item);

    const newArray =
      array &&
      array.reduce(function (prev, next) {
        return prev.concat(next);
      });

    return newArray;
  };

  return (
    <SafeAreaView style={globalStyles.screen}>
      <View style={styles.mainContainer}>
        <View style={styles.stickyContainer}>
          <View style={styles.navContainer}>
            <Pressable onPress={() => fetchNextPage()}>
              <BackBtn />
            </Pressable>
            <View style={styles.searchInput}>
              <TextInput
                style={styles.input}
                value={searchKeyword}
                onChangeText={(text) => setSearchKeyword(text)}
                placeholder="여행 어디로 가시나요?"
                onFocus={() => setOnfocus(true)}
                onBlur={() => setOnfocus(false)}
              />
              {onFocus && (
                <Pressable style={styles.deleteIcon} onPress={() => setSearchKeyword('')}>
                  <DeleteIcon />
                </Pressable>
              )}
            </View>
            <View style={styles.searchIcon}>
              <SearchIcon />
            </View>
          </View>
        </View>
        {searchKeywordList?.pages[0].data.response.body.items.item ? (
          <View style={{ paddingBottom: heightPercentage(70) }}>
            <FlatList
              style={styles.listContainer}
              data={dataTest()}
              keyExtractor={(item) => item.contentid}
              renderItem={({ item }) => {
                return <SearchCardInfo detailInfo={item} />;
              }}
              onEndReachedThreshold={0}
              onEndReached={() => {
                console.log('next');
                fetchNextPage();
              }}
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: widthPercentage(20),
  },
  input: {
    paddingVertical: heightPercentage(4),
  },
  searchIcon: {
    marginRight: widthPercentage(20),
  },
  rowCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    paddingVertical: heightPercentage(20),
    paddingHorizontal: widthPercentage(20),
  },
  deleteIcon: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
  },
  mainContainer: {
    flex: 1,
  },
  stickyContainer: {
    paddingVertical: heightPercentage(20),
    backgroundColor: '#FFFFFF',
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
});

export default SearchPage;
