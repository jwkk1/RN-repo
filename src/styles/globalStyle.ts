import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const FIGMA__WINDOW__WIDTH = 375;
const FIGMA__WINDOW__HEIGHT = 812;

export const widthPercentage = (width: number) => {
  const percentage = (width / FIGMA__WINDOW__WIDTH) * 100;

  return responsiveWidth(percentage);
};
export const heightPercentage = (height: number) => {
  const percentage = (height / FIGMA__WINDOW__HEIGHT) * 100;

  return responsiveHeight(percentage);
};
export const fontPercentage = (size: number) => {
  const percentage = size * 0.125;

  return responsiveFontSize(percentage);
};

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    paddingTop: heightPercentage(20),
    paddingHorizontal: widthPercentage(10),
  },
});

export const colors = {
  white: '#FFFFFF',
  measurementBackground: '#FCFCFF',
  homeBackground: '#FCFCFC',
  signature: '#26a69a',
};
