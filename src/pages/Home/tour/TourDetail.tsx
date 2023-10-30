import { TourDetailNavigatorProps } from '@/types/navigation';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

type props = TourDetailNavigatorProps;

const TourDetail = ({ navigation, route }: props) => {
  useEffect(() => {
    console.log(route);
  }, [route]);
  return (
    <SafeAreaView>
      <Text>TourDetail</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TourDetail;
