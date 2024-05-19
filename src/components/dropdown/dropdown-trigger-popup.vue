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
  name: 'DropdownTriggerPopup'
})
</script>

<style lang="less" src="./style/index.less"></style>
