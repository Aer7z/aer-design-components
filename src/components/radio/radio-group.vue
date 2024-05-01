<template>
  <div :class="[styleClassRadioGroupContainer]">
    <slot> </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, provide, onBeforeMount } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { RadioGroupProps, RadioGroupEmits } from './interface'
import { getComponentsClassPrefix } from '../_utils/global-config'

defineOptions({
  name: 'RadioGroup'
})

const props = withDefaults(defineProps<RadioGroupProps>(), {
  defaultChecked: false,
  direction: 'horizontal',
  disabled: false,
  modelValue: '',
  size: 'medium',
  type: 'radio',
  value: true
})

const styleClassRadioGroupContainer: ComputedRef<string[]> = computed(() => [
  `${getComponentsClassPrefix()}radio-group-container-${props.direction}`,
  `${getComponentsClassPrefix()}radio-group-container`
])

const provideRadioGroupName = () => {
  // 创建一个唯一的 radioGroupName
  const radioGroupName = ref<string>(
    Date.now().toString(36) + Math.random().toString(36).slice(2, 5)
  )
  // 使用 provide 提供给子组件
  provide('radioGroupName', radioGroupName)
}
const radioPropsInject = () => {
  provide('radioGroupSize', props.size)
  provide('radioGroupType', props.type)
  provide('radioGroupDirection', props.direction)
}
// 在父组件的生命周期钩子函数 onBeforeMount 中执行 provideRadioGroupName 函数，
// 父组件的onBeforeMount生命周期在子组件的setup生命周期之前，确保在子组件的 setup 生命周期之前就提供了数据给子组件
// 链接参考：https://blog.csdn.net/leilei__66/article/details/118699960
onBeforeMount(() => {
  provideRadioGroupName()
  radioPropsInject()
})
</script>

<style lang="less" src="./style/index.less"></style>
