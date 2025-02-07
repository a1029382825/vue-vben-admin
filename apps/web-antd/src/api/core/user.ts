import { requestClient } from '#/api/request';

export interface UserInfo {
  userCode: string;
  userName: string;
  email: string;
  status: number;
  mobile: string;
  type: number;
  image: string;
  manager: number;
  special: boolean;
  modules: any[];
  roles: any[];
  permissions: any[];
  province: string;
  city: string;
  county: string;
  town: string;
  provinceCode: string;
  cityCode: string;
  countyCode: string;
  townCode: string;
  id: number;
  createTime: string;
}

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  return requestClient.get<UserInfo>('/user/info');
}
