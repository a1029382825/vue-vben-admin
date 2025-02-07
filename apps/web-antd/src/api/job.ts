import type { CommonApi } from './common';
import type { DeviceApi } from './device';
import type { TaskApi } from './task';

import { requestClient } from '#/api/request';

export namespace JobApi {
  export interface Job {
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
    description: string;
    type: string;
    task: TaskApi.Task;
    device: DeviceApi.Device;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface JobListParams extends Partial<CommonApi.CommonParams> {}
}

/**
 * 获取作业列表
 */
export async function getJobList(params: JobApi.JobListParams) {
  return requestClient.get<CommonApi.CommonList<JobApi.Job>>('/job/list', {
    params,
  });
}

/**
 * 获取作业详情
 */
export async function getJobDetail(id: number) {
  return requestClient.get<JobApi.Job>('/job/get', { params: { id } });
}

/**
 * 添加作业
 */
export async function addJob(data: JobApi.Job) {
  return requestClient.post('/job/add', data);
}

/**
 * 更新作业
 */
export async function updateJob(data: JobApi.Job) {
  return requestClient.post('/job/update', data);
}
