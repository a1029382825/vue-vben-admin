export namespace CommonApi {
  export interface Location {
    id: number;
    longitude: number;
    latitude: number;
  }

  export interface Map {
    id: number;
    createTime: string;
    updateTime: string;
    userId: number;
    userName: string;
    province: string;
    city: string;
    county: string;
    town: string;
    provinceCode: string;
    cityCode: string;
    countyCode: string;
    townCode: string;
    name: string;
    locations: Location[];
  }

  export interface CommonParams {
    search: string;
    current: number;
    pageSize: number;
    startTime: string;
    endTime: string;
  }

  export interface CommonList<T> {
    recordsTotal: number;
    data: T[];
  }
}
