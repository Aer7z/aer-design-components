<template>
  <TriggerPopup>
    <template v-slot:default>
      <slot></slot>
    </template>
  </TriggerPopup>
</template>

<script lang="ts" setup>
import { TriggerPopup } from '../trigger/index'

defineOptions({
  name: 'ModalTriggerPopup',
})
</script>

<style lang="less" src="./style/index.less"></style>
