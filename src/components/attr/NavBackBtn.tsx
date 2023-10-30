import { Image, Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import BackBtnSvg from 'assets/arrt/btn/Property 1=outline, Property 2=left.svg';
export default function BackBtn() {
  return (
    <View style={styles.button}>
      <BackBtnSvg />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginLeft: Platform.OS === 'ios' ? 16 : 7,
    // ...Platform.select({
    //   ios: {
    //     marginVertical: 10,
    //     marginRight: 15,
    //   },
    // }),
  },
});
