import { colors, fontPercentage, heightPercentage, widthPercentage } from '@/styles/globalStyle';
import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
interface props {
  buttonStyle: 'solid' | 'solidUnabled' | 'outLine' | 'outLineUnabled' | 'outLine2' | 'text';
  text: string;
  handler?: () => void;
  margin?: boolean;
}

const CommonButtonMedium = ({ buttonStyle, text, handler, margin }: props) => {
  const containerStyle = {
    solid: {
      backgroundColor: colors.signature,
      borderColor: colors.signature,
    },
    solidUnabled: {
      backgroundColor: '#f8c3a7',
      borderColor: '#f8c3a7',
    },
    outLine: {
      backgroundColor: '#FFFFFF',
      borderColor: colors.signature,
    },
    outLineUnabled: {
      backgroundColor: '#FFFFFF',
      borderColor: '#f8c3a7',
    },
    outLine2: {
      backgroundColor: '#FFFFFF',
      borderColor: '#CCCCCC',
    },
    text: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  };

  const textStyle = {
    solid: {
      color: '#FFFFFF',
    },
    solidUnabled: {
      color: '#FFFFFF',
    },
    outLine: {
      color: colors.signature,
    },
    outLineUnabled: {
      color: '#f8c3a7',
    },
    outLine2: {
      color: '#ABABAB',
    },
    text: {
      color: colors.signature,
    },
  };

  return (
    <Pressable
      style={[
        styles.container,
        containerStyle[buttonStyle],
        margin && { marginHorizontal: widthPercentage(5) },
      ]}
      onPress={handler}
    >
      <Text style={[styles.text, textStyle[buttonStyle]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.signature,
    paddingHorizontal: widthPercentage(15),
    paddingVertical: heightPercentage(6),
    backgroundColor: colors.signature,
  },
  text: {
    fontSize: fontPercentage(14),
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'left',
  },
});

export default CommonButtonMedium;
