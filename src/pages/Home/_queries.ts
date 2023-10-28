import { requestSearchKeyword } from '@/api/getData';
import { getDeviceInfo } from '@/util/util';
import { useQuery } from 'react-query';

export const useGetSearchKeyword = (keyword: string) => {
  const deviceInfo = getDeviceInfo();
  const params = {
    serviceKey: deviceInfo.serviceKey,
    MobileOS: deviceInfo.MobileOS,
    MobileApp: deviceInfo.MobileApp,
    keyword: keyword,
  };
  const { data, isLoading, refetch } = useQuery(['searchKeyword', keyword], () =>
    requestSearchKeyword(params),
  );

  return { searchKeywordList: data, isLoading, refetch };
};
