import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  TourDetail: { contentid: string };
};

export type HomeNavigatorProps = StackScreenProps<RootStackParamList, 'Home'>;
export type TourDetailNavigatorProps = StackScreenProps<RootStackParamList, 'TourDetail'>;
