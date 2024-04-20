<template>
  <span>遮蔽层和z-index测试<Modal :title="modalTitle" :body="modalBody"></Modal></span>
  <!-- <span style="z-index: 999">遮蔽层和z-index测试</span> -->
  <button style="position: relative; z-index: 1001">1</button>
</template>

<script setup lang="ts">
import Modal from '../components/modal/index'

const modalTitle: string = '标题在此'
const modalBody: string = '如果我拿指甲剪剔牙会怎么样\n我是天才'
</script>

<style></style>
