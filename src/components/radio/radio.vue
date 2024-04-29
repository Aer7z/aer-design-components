<template>
  <template v-if="isRadio">
    <div>单选</div>
  </template>
  <template v-if="isButton">
    <div>按钮</div>
  </template>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { RadioProps, RadioEmits } from './interface'
import { getComponentsClassPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Radio'
})

const props = withDefaults(defineProps<RadioProps>(), {
  defaultChecked: false,
  disabled: false,
  modelValue: '',
  type: 'radio',
  value: true
})

const isRadio: ComputedRef<boolean> = computed((): boolean =>
  props.type === 'radio' ? true : false
)
const isButton: ComputedRef<boolean> = computed((): boolean =>
  props.type === 'button' ? true : false
)
</script>

<style lang="less" src="./style/index.less"></style>
