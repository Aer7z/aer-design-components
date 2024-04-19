<template>
  <Dodal :title="modalTitle" :body="modalBody"></Dodal>
</template>

<script setup lang="ts">
import Dodal from '../components/modal/index'

const modalTitle: string = '标题在此'
const modalBody: string = '如果我拿指甲剪剔牙会怎么样\n我是天才'
</script>

<style></style>