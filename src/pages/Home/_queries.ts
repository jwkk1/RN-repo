import {
  requestAreaBasedList,
  requestDetailCommon,
  requestDetailPetTour,
  requestLocationBasedList,
  requestSearchKeyword,
} from '@/api/getData';
import { getDeviceInfo } from '@/util/util';
import Toast from 'react-native-toast-message';
import { useInfiniteQuery, useQuery } from 'react-query';

const errorMsg = () => {
  Toast.show({
    type: 'customToast',
    text1: '인터넷 연결을 확인해 주세요.',
  });
};

export const useGetSearchKeyword = (keyword: string) => {
  const deviceInfo = getDeviceInfo();

  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ['searchKeyword', keyword],
    ({ pageParam = 1 }) => {
      // console.log(pageParam, 'asdasdasd');
      const params = {
        serviceKey: deviceInfo.serviceKey,
        MobileOS: deviceInfo.MobileOS,
        MobileApp: deviceInfo.MobileApp,
        keyword: '11',
        _type: deviceInfo._type,
        numOfRows: 10,
        arrange: 'R',
        pageNo: pageParam,
      };
      return requestSearchKeyword(params);
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.response.body.totalCount > lastPage.data.response.body.pageNo * 10
          ? lastPage.data.response.body.pageNo + 1
          : undefined;
      },
      enabled: !!keyword,
    },
  );

  return {
    searchKeywordList: data,
    fetchNextPage: fetchNextPage,
    isLoading,
  };
};

export const useGetAreaBased = (areaCode: string | undefined) => {
  const deviceInfo = getDeviceInfo();
  const params = {
    serviceKey: deviceInfo.serviceKey,
    MobileOS: deviceInfo.MobileOS,
    MobileApp: deviceInfo.MobileApp,
    areaCode: areaCode && areaCode,
    _type: deviceInfo._type,
    numOfRows: 5,
    arrange: 'R',
  };
  const { data, isLoading, refetch } = useQuery(
    ['areaBasedList', areaCode],
    () => requestAreaBasedList(params),
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
        errorMsg();
      },
    },
  );

  return { areaBasedList: data?.data.response.body.items.item, isLoading, refetch };
};

export const useGetPetTour = () => {
  const deviceInfo = getDeviceInfo();
  const params = {
    serviceKey: deviceInfo.serviceKey,
    MobileOS: deviceInfo.MobileOS,
    MobileApp: deviceInfo.MobileApp,
    _type: deviceInfo._type,
    numOfRows: 10,
  };
  const { data, isLoading, refetch } = useQuery(
    ['petTourList'],
    () => requestDetailPetTour(params),
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
        errorMsg();
      },
    },
  );

  return { petTourList: data?.data.response.body.items.item, isLoading, refetch };
};

export const useGetCommon = (contentId: string) => {
  const deviceInfo = getDeviceInfo();
  const params = {
    serviceKey: deviceInfo.serviceKey,
    MobileOS: deviceInfo.MobileOS,
    MobileApp: deviceInfo.MobileApp,
    _type: deviceInfo._type,
    contentId: contentId,
    defaultYN: 'Y',
    firstImageYN: 'Y',
  };
  const { data, isLoading, refetch } = useQuery(
    ['commonPetDetail', contentId],
    () => requestDetailCommon(params),
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
        errorMsg();
      },
    },
  );

  return { commonDetail: data?.data.response.body.items.item[0], isLoading, refetch };
};

export const useGetCommonDetail = (contentId: string) => {
  const deviceInfo = getDeviceInfo();
  const params = {
    serviceKey: deviceInfo.serviceKey,
    MobileOS: deviceInfo.MobileOS,
    MobileApp: deviceInfo.MobileApp,
    _type: deviceInfo._type,
    contentId: contentId,
    defaultYN: 'Y',
    firstImageYN: 'Y',
    areacodeYN: 'Y',
    addrinfoYN: 'Y',
    overviewYN: 'Y',
    mapinfoYN: 'Y',
  };
  const { data, isLoading, refetch } = useQuery(
    ['commonDetail', contentId],
    () => requestDetailCommon(params),
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
        errorMsg();
      },
    },
  );

  return { commonDetail: data?.data.response.body.items.item[0], isLoading, refetch };
};

export const useGetLocation = (mapX: number, mapY: number) => {
  const deviceInfo = getDeviceInfo();
  const params = {
    serviceKey: deviceInfo.serviceKey,
    MobileOS: deviceInfo.MobileOS,
    MobileApp: deviceInfo.MobileApp,
    _type: deviceInfo._type,
    mapX: mapX ? mapX.toString() : '',
    mapY: mapY ? mapY.toString() : '',
    radius: '200000',
  };
  const { data, isLoading, refetch } = useQuery(
    ['location', mapX, mapY],
    () => requestLocationBasedList(params),
    {
      enabled: !!mapX && !!mapY,
      onSuccess: async ({ data }) => {
        if (data.response.header.resultCode !== '0000') {
          Toast.show({
            type: 'customToast',
            text1: data.response.resultMsg,
          });
        }
      },
      onError: async () => {
        errorMsg();
      },
    },
  );

  return { locationList: data, isLoading, refetch };
};
