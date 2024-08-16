<template>
  <Layout>
    <layout-header>头部</layout-header>
    <layout-sidebar width="40%">侧边框</layout-sidebar>
    <Layout>
      <layout-header>头部</layout-header>
      <layout-content>内容</layout-content>
      <layout-sidebar width="40%">侧边框</layout-sidebar>
      <layout-footer>尾部</layout-footer>
    </Layout>
  </Layout>
</template>

<script lang="ts" setup>
import { Layout, LayoutHeader, LayoutContent, LayoutSidebar, LayoutFooter } from '../index'
</script>
