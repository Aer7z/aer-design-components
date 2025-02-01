<template>
  <Layout>
    <layout-header class="text-center" height="40px" background-color="#eaff8f">头部</layout-header>
    <layout-sidebar class="text-center" width="30%" background-color="#ffe58f">侧边框</layout-sidebar>
    <Layout>
      <layout-header class="text-center" background-color="#fffb8f">头部</layout-header>
      <layout-content class="text-center" height="70px" background-color="#b7eb8f">内容</layout-content>
      <layout-sidebar class="text-center" width="40%" background-color="#ffe58f">侧边框</layout-sidebar>
      <layout-footer class="text-center" height="60px" background-color="#eaff8f">尾部</layout-footer>
    </Layout>
    <layout-sidebar class="text-center" background-color="#b7eb8f">侧边框</layout-sidebar>
  </Layout>

  <layout-footer class="text-center" height="60px" background-color="#ffbb96">尾部</layout-footer>
</template>

<script lang="ts" setup>
import { Layout, LayoutHeader, LayoutContent, LayoutSidebar, LayoutFooter } from '@/components/layout/index'
</script>

<style>
.text-center {
  display: flex;
  /* text-align: center; */
  align-items: center;
  justify-content: center;
}
</style>
