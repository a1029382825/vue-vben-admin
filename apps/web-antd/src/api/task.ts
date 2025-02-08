import type { CommonApi } from './common';

import { requestClient } from '#/api/request';

export namespace TaskApi {
  export interface Task {
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
    map: CommonApi.Map;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface TaskListParams extends Partial<CommonApi.CommonParams> {}
}

/**
 * 获取任务列表
 */
export async function getTaskList(params: TaskApi.TaskListParams) {
  return requestClient.get<CommonApi.CommonList<TaskApi.Task>>('/task/list', {
    params,
  });
}

/**
 * 获取任务详情
 */
export async function getTaskDetail(id: number) {
  return requestClient.get<TaskApi.Task>('/task/get', { params: { id } });
}

/**
 * 添加任务
 */
export async function addTask(data: Partial<TaskApi.Task>) {
  return requestClient.post('/task/add', data);
}

/**
 * 更新任务
 */
export async function updateTask(data: Partial<TaskApi.Task>) {
  return requestClient.post('/task/update', data);
}
