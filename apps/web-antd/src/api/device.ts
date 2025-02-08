import type { CommonApi } from './common';

import { requestClient } from '#/api/request';

export namespace DeviceApi {
  export interface DeviceType {
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
    isDeleted: number;
    name: string;
    description: string;
  }

  export interface Device {
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
    type: DeviceType;
    boughtTime: string;
    manufacturer: string;
    model: string;
    description: string;
    tel: string;
    location: CommonApi.Location;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DeviceListParams extends Partial<CommonApi.CommonParams> {}
}

/**
 * 获取设备列表
 */
export async function getDeviceList(params: DeviceApi.DeviceListParams) {
  return requestClient.get<CommonApi.CommonList<DeviceApi.Device>>(
    '/device/list',
    {
      params,
    },
  );
}

/**
 * 获取设备详情
 */
export async function getDeviceDetail(id: number) {
  return requestClient.get<DeviceApi.Device>('/device/get', { params: { id } });
}

/**
 * 添加设备
 */
export async function addDevice(data: Partial<DeviceApi.Device>) {
  return requestClient.post('/device/add', data);
}

/**
 * 更新设备
 */
export async function updateDevice(data: Partial<DeviceApi.Device>) {
  return requestClient.post('/device/update', data);
}
