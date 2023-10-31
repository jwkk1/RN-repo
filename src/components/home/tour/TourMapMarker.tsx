import { colors, fontPercentage, heightPercentage } from '@/styles/globalStyle';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

interface props {
  latitude: string;
  longitude: string;
  title: string;
}

const TourMapMarker = ({ latitude, longitude, title }: props) => {
  return (
    <View>
      <Text style={styles.text_title}>상세 위치</Text>
      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: Number(latitude),
          longitude: Number(longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: Number(latitude), longitude: Number(longitude) }}
          title={title}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapView: {
    width: '100%',
    height: heightPercentage(300),
    borderRadius: 20,
  },
  text_title: {
    fontSize: fontPercentage(18),
    letterSpacing: -0.5,
    lineHeight: 24,
    fontWeight: '800',
    marginBottom: heightPercentage(10),
  },
});

export default TourMapMarker;
