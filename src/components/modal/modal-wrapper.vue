<template>
  <div :class="[clsModalWrapper]">
    <div :class="[clsModalContent]">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'ModalContent',
})

const clsModalWrapper: string = `${getClsPrefix() + 'modal-wrapper'} `
const clsModalContent: string = `${getClsPrefix()}modal-content`
</script>

<style lang="less" src="./style/index.less"></style>
