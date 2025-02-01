<template>
  <div :class="[clsModalBody]">
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts" setup>
import type { ModalEmits } from './interface'
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'ModalBody',
})

const emits = defineEmits<ModalEmits>()

const clsModalBody: string = `${getClsPrefix()}modal-body`
</script>

<style lang="less" src="./style/index.less"></style>
