import type { CommonApi } from './common';

import { requestClient } from '#/api/request';

export namespace FarmApi {
  export interface Farm {
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
    area: string;
    crop: string;
    maps: CommonApi.Map[];
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface FarmListParams extends Partial<CommonApi.CommonParams> {}
}

/**
 * 获取地块列表
 */
export async function getFarmList(params: FarmApi.FarmListParams) {
  return requestClient.get<CommonApi.CommonList<FarmApi.Farm>>('/farm/list', {
    params,
  });
}

/**
 * 获取地块详情
 */
export async function getFarmDetail(id: number) {
  return requestClient.get<FarmApi.Farm>('/farm/get', { params: { id } });
}

/**
 * 创建地块
 */
export async function addFarm(data: Partial<FarmApi.Farm>) {
  return requestClient.post('/farm/add', data);
}

/**
 * 更新地块
 */
export async function updateFarm(data: Partial<FarmApi.Farm>) {
  return requestClient.post('/farm/update', data);
}
