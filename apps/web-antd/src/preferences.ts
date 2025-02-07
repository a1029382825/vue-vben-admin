import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 * !!! 更改配置后请清空缓存，否则可能不生效
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: import.meta.env.VITE_APP_TITLE,
    enableRefreshToken: true,
  },
  copyright: {
    companyName: '北京东龙网络',
    companySiteLink: 'https://www.nongxiao123.com',
    date: '2025',
  },
  footer: {
    enable: true,
  },
  sidebar: {
    width: 220,
  },
  theme: {
    builtinType: 'custom',
    colorPrimary: 'hsl(220 48% 32%)',
    mode: 'light',
    semiDarkSidebar: true,
  },
  logo: {
    enable: true,
    source: 'https://openresource.nongxiao123.com/iam/logo.svg',
  },
});
