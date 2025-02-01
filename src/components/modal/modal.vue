<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { type ModalEmits, type ModalProps } from './interface'
import { createModalPropsContext, createModalTriggerContext } from './context'

defineOptions({
  name: 'Modal',
})

const props = withDefaults(defineProps<ModalProps>(), {
  isMaskShow: true,
})

const emits = defineEmits<ModalEmits>()
createModalTriggerContext()
createModalPropsContext(props)
</script>

<style lang="less" src="./style/index.less"></style>
