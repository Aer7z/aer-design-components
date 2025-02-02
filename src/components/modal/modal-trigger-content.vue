<template>
  <TriggerContent>
    <template v-slot:default>
      <slot></slot>
    </template>
  </TriggerContent>
</template>

<script lang="ts" setup>
import { TriggerContent } from '@/components/trigger/index'

defineOptions({
  name: 'ModalTriggerContent',
})
</script>

<style lang="less" src="./style/index.less"></style>
