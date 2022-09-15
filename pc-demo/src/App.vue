<script setup lang="ts">
import { useRouter } from 'vue-router';

const list = [
  {value: 'chart', label: '图表', icon: 'chart-bar'},
  {value: 'table', label: '表格', icon: 'app'},
  {value: 'temp', label: '合同', icon: 'file-pdf'},
  {value: 'editor', label: '富文本编辑器', icon: 'edit'},
]

const router = useRouter()

function changeMenu (urlName: string) {
  router.push({
    path: urlName
  })
}
</script>

<template>
  <t-layout style="height: 100%;">
    <t-header>
      <t-head-menu value="item1" height="120px">
        <template #logo>
          <h1 style="padding-left:20px">vite 后台管理系统</h1> 
        </template>
        <template #operations>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="home" /></a>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout class="page">
      <t-aside style="border-top: 1px solid var(--component-border)">
        <t-menu theme="light" value="dashboard" style="margin-right: 50px" height="550px">
          <t-menu-item v-for="(item, index) in list"
          :key="'item'+index" 
          :value="item.value"
          @click="changeMenu(item.value)"
          >
            <template #icon>
              <t-icon :name="item.icon" />
            </template>
            {{item.label}}
          </t-menu-item>
        </t-menu>
      </t-aside>
      <t-layout>
        <t-content class="main-content">
          <router-view></router-view>
        </t-content>
      </t-layout>
    </t-layout>
  </t-layout>
</template>
<style>
.main-content {
  padding: 20px;
  overflow: scroll;
}
.page {
  overflow: hidden;
}
</style>