<template>
  <div :class="[clsRadioGroupContainer]" @change="handleChange($event)">
    <slot> </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, provide, onBeforeMount } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type { RadioGroupProps, RadioGroupEmits } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'RadioGroup'
})

const props = withDefaults(defineProps<RadioGroupProps>(), {
  direction: 'horizontal',
  disabled: false,
  // modelValue: '',
  size: 'medium',
  type: 'radio'
})
const model = defineModel()

const clsRadioGroupContainer: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}radio-group-container-${props.direction}`,
  `${getClsPrefix()}radio-group-container`
])
const emits = defineEmits<RadioGroupEmits>()

const handleChange = (ev: Event) => {
  const element: HTMLInputElement = ev.target as HTMLInputElement
  model.value=element.value
  // console.log('the radio-group now checked value is ', element?.value)
  emits('checkedChange', element?.value)
}

const provideRadioGroupName = () => {
  // 创建一个唯一的 radioGroupName , 保证每组都独有
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
  provide('radioGroupDefaultCheckedValue', props.defaultValue)

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
