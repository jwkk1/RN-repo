import { StackScreenProps } from '@react-navigation/stack';
import { searchKeywordListResponse } from './response';

export type RootStackParamList = {
  Home: undefined;
  SearchPage: undefined;
  TourDetail: { tourDetail: searchKeywordListResponse };
};

export type HomeNavigatorProps = StackScreenProps<RootStackParamList, 'Home'>;
export type TourDetailNavigatorProps = StackScreenProps<RootStackParamList, 'TourDetail'>;
export type SearchPageNavigatorProps = StackScreenProps<RootStackParamList, 'SearchPage'>;
