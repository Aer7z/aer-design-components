<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { DEFAULT_MODAL_PROPS, type ModalEmits, type ModalProps } from './interface'
import { createModalPropsContext, createModalTriggerContext } from './context'

defineOptions({
  name: 'Modal',
})

const props = withDefaults(defineProps<ModalProps>(), DEFAULT_MODAL_PROPS)

const emits = defineEmits<ModalEmits>()
createModalTriggerContext()
createModalPropsContext(props)
</script>

<style lang="less" src="./style/modal.less"></style>
