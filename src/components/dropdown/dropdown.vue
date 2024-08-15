<template>
  <slot></slot>
  <!-- <div>23123</div> -->
</template>

<script lang="ts" setup>
import { createDropdownTriggerContext } from './context'

defineOptions({
  name: 'Dropdown',
})

createDropdownTriggerContext()
</script>

<style lang="less" src="./style/index.less"></style>
