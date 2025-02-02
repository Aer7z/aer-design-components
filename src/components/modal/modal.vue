<template>
  <Trigger>
    <slot></slot>
  </Trigger>
</template>

<script lang="ts" setup>
import { type ModalEmits, type ModalProps } from './interface'
import { createModalPropsContext } from './context'
import { Trigger } from '@/components/trigger/index'

defineOptions({
  name: 'Modal',
})

const props = withDefaults(defineProps<ModalProps>(), {
  isMaskShow: true,
})

const emits = defineEmits<ModalEmits>()
createModalPropsContext(props)
</script>

<style lang="less" src="./style/index.less"></style>
