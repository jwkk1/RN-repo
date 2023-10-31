import { globalStyles } from '@/styles/globalStyle';
// import { KakaoMapView } from '@jiggag/react-native-kakao-maps';
import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { useGetLocation } from '../Home/_queries';
import { locationSearchResponse } from '@/types/response';

const Map = () => {
  const [location, setLocation] = useState<number[]>([]);
  const { locationList } = useGetLocation(location[0], location[1]);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation([latitude, longitude]);
        console.log(latitude, longitude);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, []);

  if (location[0])
    return (
      <SafeAreaView style={globalStyles.screen}>
        <MapView
          style={styles.mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location[0],
            longitude: location[1],
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {locationList?.data.response.body.items &&
            locationList?.data.response.body.items.map((item: locationSearchResponse) => {
              return (
                <Marker
                  coordinate={{ latitude: Number(item.mapx), longitude: Number(item.mapy) }}
                  title={item.title}
                  key={item.contentid}
                />
              );
            })}
        </MapView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {},
  mapView: {
    flex: 1,
  },
});

export default Map;
