<script lang="ts" setup>
import type { VbenFormProps } from '#/adapter/form';
import type { VxeTableGridOptions } from '#/adapter/vxe-table';
import type { TaskApi } from '#/api/task';

import { Page } from '@vben/common-ui';

import { Button, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { getTaskList } from '#/api/task';

const formOptions: VbenFormProps = {
  // 默认展开
  collapsed: true,
  schema: [
    {
      component: 'Input',
      defaultValue: '',
      fieldName: 'search',
      label: '任务名称',
    },
  ],
  // 控制表单是否显示折叠按钮
  showCollapseButton: false,
  // 是否在字段值改变时提交表单
  submitOnChange: true,
  // 按下回车时是否提交表单
  submitOnEnter: false,
};

const gridOptions: VxeTableGridOptions<TaskApi.Task> = {
  columns: [
    { title: '序号', type: 'seq', width: 50 },
    { align: 'left', field: 'name', title: '任务名称' },
    { field: 'type', title: '任务类型' },
    { field: 'description', title: '任务描述' },
    { field: 'userName', title: '创建人' },
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
        const { recordsTotal, data } = await getTaskList({
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

const [Grid] = useVbenVxeGrid({
  formOptions,
  gridOptions,
});

function handleAdd() {
  message.info('新建任务');
}

function handleView(row: TaskApi.Task) {
  message.info(JSON.stringify(row));
}
</script>

<template>
  <Page auto-content-height>
    <Grid>
      <template #toolbar-actions>
        <Button class="mr-2" type="primary" @click="handleAdd">
          新建任务
        </Button>
      </template>
      <template #action="{ row }">
        <Button type="link" @click="handleView(row)">查看</Button>
      </template>
    </Grid>
  </Page>
</template>
