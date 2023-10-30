import {
  areaBasedRequest,
  detailCommonRequest,
  detailPetTourRequest,
  locationBasedRequest,
  searchKeywordRequest,
} from '@/types/request';
import instance from '.';

export const requestSearchKeyword = async (params: searchKeywordRequest) => {
  const result = await instance.get('/searchKeyword1', { params });
  return result;
};

export const requestDetailPetTour = async (params: detailPetTourRequest) => {
  const result = await instance.get('/detailPetTour1', { params });
  return result;
};

export const requestDetailCommon = async (params: detailCommonRequest) => {
  const result = await instance.get('/detailCommon1', { params });
  return result;
};

export const requestLocationBasedList = async (params: locationBasedRequest) => {
  const result = await instance.get('/locationBasedList1', { params });
  return result;
};

export const requestAreaBasedList = async (params: areaBasedRequest) => {
  const result = await instance.get('/areaBasedList1', { params });
  return result;
};
