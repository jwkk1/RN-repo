interface commonRequestparam {
  MobileOS: string;
  MobileApp: string;
  _type: string;
  serviceKey: string;
}

export interface searchKeywordRequest extends commonRequestparam {
  keyword: string;
  arrange?: string;
  areaCode?: string;
  numOfRows?: number;
  pageNo?: number;
}

export interface detailPetTourRequest extends commonRequestparam {
  numOfRows?: number;
}

export interface detailCommonRequest extends commonRequestparam {
  contentId: string;
  defaultYN?: string;
  firstImageYN?: string;
  mapinfoYN?: string;
  overviewYN?: string;
  addrinfoYN?: string;
  areacodeYN?: string;
}

export interface locationBasedRequest extends commonRequestparam {
  mapX: string;
  mapY: string;
  radius: string;
}

export interface areaBasedRequest extends commonRequestparam {
  arrange?: string;
  areaCode?: string;
}
