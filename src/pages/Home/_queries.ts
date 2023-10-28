import { requestSearchKeyword } from '@/api/getData';
import { getDeviceInfo } from '@/util/util';
import Toast from 'react-native-toast-message';
import { useQuery } from 'react-query';

export const useGetSearchKeyword = (keyword: string) => {
  const deviceInfo = getDeviceInfo();
  const params = {
    serviceKey: deviceInfo.serviceKey,
    MobileOS: deviceInfo.MobileOS,
    MobileApp: deviceInfo.MobileApp,
    keyword: keyword,
    _type: deviceInfo._type,
    numOfRows: 5,
    arrange: 'R',
  };
  const { data, isLoading, refetch } = useQuery(
    ['searchKeyword', keyword],
    () => requestSearchKeyword(params),
    {
      onSuccess: async ({ data }) => {
        if (data.response.header.resultCode !== '0000') {
          Toast.show({
            type: 'customToast',
            text1: data.response.resultMsg,
          });
        }
      },
      onError: async () => {
        Toast.show({
          type: 'customToast',
          text1: '인터넷 연결을 확인해 주세요.',
        });
      },
    },
  );

  return { searchKeywordList: data?.data.response.body.items.item, isLoading, refetch };
};
