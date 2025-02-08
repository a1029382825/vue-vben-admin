<script lang="ts" setup>
import type { VbenFormProps } from '#/adapter/form';
import type { VxeTableGridOptions } from '#/adapter/vxe-table';
import type { DeviceApi } from '#/api/device';

import { Page, useVbenModal } from '@vben/common-ui';

import { Button, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { getDeviceList } from '#/api/device';

import DeviceFormModal from './form.vue';

const formOptions: VbenFormProps = {
  // 默认展开
  collapsed: true,
  schema: [
    {
      component: 'Input',
      defaultValue: '',
      fieldName: 'search',
      label: '设备名称',
    },
  ],
  // 控制表单是否显示折叠按钮
  showCollapseButton: false,
  // 是否在字段值改变时提交表单
  submitOnChange: true,
  // 按下回车时是否提交表单
  submitOnEnter: false,
};

const gridOptions: VxeTableGridOptions<DeviceApi.Device> = {
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { align: 'left', field: 'name', title: '设备名称' },
    { field: 'type', title: '设备类型' },
    { field: 'model', title: '设备型号' },
    { field: 'manufacturer', title: '生产厂家' },
    { field: 'tel', title: '联系电话' },
    { field: 'boughtTime', title: '购买时间' },
    { field: 'location', title: '设备位置' },
    { field: 'createTime', title: '创建时间' },
    { field: 'updateTime', title: '更新时间' },
    {
      field: 'action',
      fixed: 'right',
      title: '操作',
      width: 120,
      slots: { default: 'action' },
    },
  ],
  exportConfig: {},
  height: 'auto',
  keepSource: true,
  pagerConfig: {},
  proxyConfig: {
    ajax: {
      query: async ({ page }, formValues) => {
        const { recordsTotal, data } = await getDeviceList({
          current: page.currentPage,
          pageSize: page.pageSize,
          ...formValues,
        });
        return {
          items: data,
          total: recordsTotal,
        };
      },
    },
  },
  toolbarConfig: {
    custom: true,
    export: true,
    refresh: true,
    resizable: true,
    search: false,
    zoom: true,
  },
};

const [Grid, gridApi] = useVbenVxeGrid({
  formOptions,
  gridOptions,
});

const [FormModal, formModalApi] = useVbenModal({
  connectedComponent: DeviceFormModal,
  onOpenChange: (isOpen) => {
    if (!isOpen) {
      gridApi.reload();
    }
  },
});

function handleAdd() {
  formModalApi.open();
}

function handleView(row: DeviceApi.Device) {
  message.info(JSON.stringify(row));
}
</script>

<template>
  <Page auto-content-height>
    <FormModal />
    <Grid>
      <template #toolbar-actions>
        <Button class="mr-2" type="primary" @click="handleAdd">
          添加设备
        </Button>
      </template>
      <template #action="{ row }">
        <Button type="link" @click="handleView(row)">查看</Button>
      </template>
    </Grid>
  </Page>
</template>
