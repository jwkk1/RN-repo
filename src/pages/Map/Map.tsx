import { globalStyles } from '@/styles/globalStyle';
// import { KakaoMapView } from '@jiggag/react-native-kakao-maps';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Map = () => {
  return (
    <SafeAreaView style={globalStyles.screen}>
      <Text>asd</Text>
      {/* <KakaoMapView
        width={300}
        height={500}
        centerPoint={{
          lat: 37.59523,
          lng: 127.086,
        }}
        markerList={[
          {
            lat: 37.59523,
            lng: 127.086,
            markerName: 'marker',
          },
          {
            lat: 37.59523,
            lng: 127.08705,
            markerName: 'marker2',
          },
        ]}
        onChange={(event) => {
          // event.nativeEvent
          console.log(event);
        }}
      ></KakaoMapView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Map;
