import { searchKeywordRequest } from '@/types/request';
import instance from '.';

export const requestSearchKeyword = async (params: searchKeywordRequest) => {
  const result = await instance.get('/searchKeyword1', { params });
  return result;
};
