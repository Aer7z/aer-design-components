<template>
  <TriggerListen>
    <template v-slot:default>
      <slot></slot>
    </template>
  </TriggerListen>
</template>

<script lang="ts" setup>
import { TriggerListen } from '@/components/trigger/index'

defineOptions({
  name: 'ModalTrigger',
})
</script>

<style lang="less" src="./style/index.less"></style>
