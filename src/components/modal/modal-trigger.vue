<template>
  <Trigger>
    <template v-slot:default>
      <slot></slot>
    </template>
  </Trigger>
</template>

<script lang="ts" setup>
import { Trigger } from '../trigger/index'

defineOptions({
  name: 'ModalTrigger',
})
</script>

<style lang="less" src="./style/index.less"></style>
