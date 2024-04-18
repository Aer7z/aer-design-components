<template>
  <Dialog :title="dialogTitle" :body="dialogBody"></Dialog>
</template>

<script setup lang="ts">
import Dialog from '../components/dialog/index'

const dialogTitle: string = '标题在此'
const dialogBody: string = '如果我拿指甲剪剔牙会怎么样\n我是天才'
</script>

<style></style>
