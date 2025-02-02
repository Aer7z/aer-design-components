<template>
  <Placement>
    <Trigger>
      <slot></slot>
    </Trigger>
  </Placement>
</template>

<script lang="ts" setup>
import { Trigger } from '@/components/trigger/index'
import { Placement } from '@/components/placement'

defineOptions({
  name: 'Dropdown',
})
</script>

<style lang="less" src="./style/index.less"></style>
