export interface searchKeywordRequest {
  MobileOS: string;
  MobileApp: string;
  keyword: string;
  _type: string;
  serviceKey: string;
  arrange?: string;
  areaCode?: string;
  numOfRows?: number;
}
