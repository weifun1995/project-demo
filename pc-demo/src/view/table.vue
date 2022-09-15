<template>
    <div class="tdesign-demo-block-column-large">
      <div style="float: right;padding-bottom:10px;">
        <t-button @click="columnControllerVisible = true">显示列配置弹窗</t-button>
      </div>
      <t-table
        bordered
        stripe
        v-model:displayColumns="displayColumns"
        v-model:columnControllerVisible="columnControllerVisible"
        row-key="index"
        :data="data"
        :columns="columns"
        :column-controller="{
          fields: ['platform', 'type', 'default'],
          dialogProps: { preventScrollThrough: true },
          hideTriggerButton: true,
        }"
        :pagination="{ defaultPageSize: 5, defaultCurrent: 1, total: 100 }"
        table-layout="auto"
        @column-change="onColumnChange"
      >
      <template #status="{ row }">
        <p v-if="row.needed === '是'" style="color:green">是</p>
        <p v-if="row.needed === '否'" >否</p>
      </template>
      <template #operation>
        <a class="link" >删除</a>
        <t-button theme="primary" shape="rectangle" variant="base" >管理</t-button>
      </template>
    </t-table>
    
    </div>
  </template>
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const initialData = [];
  for (let i = 0; i < 100; i++) {
    initialData.push({
      index: i,
      platform: i % 2 === 0 ? '共有' : '私有',
      type: ['String', 'Number', 'Array', 'Object'][i % 4],
      default: ['-', '0', '[]', '{}'][i % 4],
      detail: {
        position: `读取 ${i} 个数据的嵌套信息值`,
      },
      needed: i % 4 === 0 ? '是' : '否',
      description: '数据源',
    });
  }
  
  const data = ref([...initialData]);
  
  const staticColumn = ['index', 'needed', 'detail.position'];
  const displayColumns = ref(staticColumn.concat(['platform', 'type', 'default']));
  
  const columnControllerVisible = ref(false);
  
  const columns = [
    {
      align: 'center',
      className: 'row',
      colKey: 'index',
      title: '序号',
    },
    {
      colKey: 'platform',
      title: '平台',
    },
    {
      colKey: 'type',
      title: '类型',
    },
    {
      colKey: 'default',
      title: '默认值',
    },
    {
      colKey: 'needed',
      title: '是否必传',
    },
    {
      colKey: 'detail.position',
      title: '详情信息',
      ellipsis: true,
    },
    {
        colKey: 'operation',
        title: '操作',
        width: 100,
        cell: 'operation'
    },
  ];
  
  const onColumnChange = (params: string) => {
    console.log(params);
  };
  </script>
  