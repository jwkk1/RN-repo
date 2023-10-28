import { SERVICE_KEY } from '@env';
import { Platform } from 'react-native';

export const getDeviceInfo = () => {
  const phoneInfo = {
    serviceKey: SERVICE_KEY,
    MobileOS: Platform.OS === 'ios' ? 'IOS' : 'AND',
    MobileApp: 'RN-REPO',
    _type: 'json',
  };
  return phoneInfo;
};
