import { heightPercentage } from '@/styles/globalStyle';
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
});

export default TourMapMarker;
