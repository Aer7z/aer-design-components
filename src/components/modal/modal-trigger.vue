<template>
  <Trigger>
    <template v-slot:default>
      <span>
        <!-- <span @click="handleClick(true)"> -->
        <slot></slot>
      </span>
    </template>
  </Trigger>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { ModalEmits, ModalProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'
import Trigger from '../trigger/index'

defineOptions({
  name: 'ModalTrigger'
})

// const props = withDefaults(defineProps<ModalProps>(), {
//   title: '暂无内容',
//   body: '暂无内容'
// })
</script>

<style lang="less" src="./style/modal.less"></style>
