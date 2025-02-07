<script lang="ts" setup>
import type { FarmApi } from '#/api/farm';

import { useVbenModal } from '@vben/common-ui';

import { message } from 'ant-design-vue';

import { useVbenForm } from '#/adapter/form';
import { createFarm } from '#/api/farm';

defineOptions({
  name: 'FarmFormModal',
});

const [Form, formApi] = useVbenForm({
  handleSubmit: onSubmit,
  schema: [
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入地块名称',
      },
      fieldName: 'name',
      label: '地块名称',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入地块面积',
      },
      fieldName: 'area',
      label: '地块面积',
      rules: 'required',
    },
    {
      component: 'Input',
      componentProps: {
        placeholder: '请输入作物类型',
      },
      fieldName: 'crop',
      label: '作物类型',
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
  title: '新增地块',
});

async function onSubmit(values: Record<string, any>) {
  message.loading({
    content: '正在提交中...',
    duration: 0,
    key: 'is-form-submitting',
  });
  modalApi.lock();

  await createFarm(values as Partial<FarmApi.Farm>);
  modalApi.close();
  message.success({
    content: '创建成功',
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
