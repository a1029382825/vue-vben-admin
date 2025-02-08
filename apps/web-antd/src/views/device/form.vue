<script lang="ts" setup>
import type { DeviceApi } from '#/api/device';

import { useVbenModal } from '@vben/common-ui';

import { message } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { addDevice } from '#/api/device';

defineOptions({
  name: 'FarmFormModal',
});

const deviceTypeOptions = [
  {
    name: '运输车',
    id: '1',
  },
  {
    name: '喷药车',
    id: '2',
  },
  {
    name: '割草机',
    id: '3',
  },
  {
    name: '碎枝机',
    id: '4',
  },
  {
    name: '开沟施肥机',
    id: '5',
  },
];

const [Form, formApi] = useVbenForm({
  handleSubmit: onSubmit,
  schema: [
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入设备名称',
      },
      fieldName: 'name',
      label: '设备名称',
      rules: 'required',
    },
    {
      // 组件需要在 #/adapter.ts内注册，并加上类型
      component: 'Select',
      // 对应组件的参数
      componentProps: {
        allowClear: true,
        filterOption: false,
        options: deviceTypeOptions.map((item) => ({
          label: item.name,
          value: item.id,
        })),
        placeholder: '请选择设备类型',
        showSearch: false,
        style: {
          width: '100%',
        },
      },
      // 字段名
      fieldName: 'type',
      // 界面显示的label
      label: '设备类型',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入设备型号',
      },
      fieldName: 'model',
      label: '设备型号',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入生产厂家',
      },
      fieldName: 'manufacturer',
      label: '生产厂家',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入联系电话',
      },
      fieldName: 'tel',
      label: '联系电话',
      rules: 'required',
    },
  ],
  showDefaultActions: false,
});

const [Modal, modalApi] = useVbenModal({
  fullscreenButton: false,
  onCancel() {
    modalApi.close();
  },
  onConfirm: async () => {
    await formApi.validateAndSubmitForm();
  },
  onOpenChange(isOpen: boolean) {
    if (isOpen) {
      const { values } = modalApi.getData<Record<string, any>>();
      if (values) {
        formApi.setValues(values);
      }
    }
  },
  title: '添加设备',
});

async function onSubmit(values: Record<string, any>) {
  message.loading({
    content: '正在提交中...',
    duration: 0,
    key: 'is-form-submitting',
  });
  modalApi.lock();

  values.type = deviceTypeOptions.find((item) => item.id === values.type);

  await addDevice(values as Partial<DeviceApi.Device>);
  modalApi.close();
  message.success({
    content: '添加成功',
    duration: 2,
    key: 'is-form-submitting',
  });
}
</script>
<template>
  <Modal>
    <Form />
  </Modal>
</template>
