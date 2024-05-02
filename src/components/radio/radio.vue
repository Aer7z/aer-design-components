<template>
  <label :class="[styleClassRadioWrapper]">
    <!-- <template v-if="radioType === 'button'">
      <button :class="[styleClassRadio]" :disabled="props.disabled" :name="radioName">
        <div :class="[styleClassRadioContent]">
          <slot></slot>
        </div>
      </button>
    </template>
    <template v-else> -->
    <input
      :type="radioType"
      :value="props.value"
      :class="[styleClassRadio]"
      :disabled="props.disabled"
      :name="radioName"
      :checked="isChecked"
      @change="handleChange"
    />
    <div :class="[styleClassRadioContent]">
      <slot></slot>
    </div>
    <!-- </template> -->
  </label>
</template>
<script lang="ts" setup>
import { ref, computed, inject, onBeforeMount, onMounted } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { RadioProps, RadioEmits } from './interface'
import { getComponentsClassPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Radio'
})
// const radioModel = defineModel()

const props = withDefaults(defineProps<RadioProps>(), {
  defaultChecked: false,
  disabled: false,
  size: 'medium',
  type: 'radio',
  value: true
})
// radioModel.value = ref(props.value)
let isChecked = ref(props.defaultChecked)

const radioName: string | undefined = inject('radioGroupName', undefined)
const radioSize: string | undefined = inject('radioGroupSize', undefined) || props.size
const radioType: string | undefined = inject('radioGroupType', undefined) || props.type
const radioChecked: string | undefined = inject('radioGroupDefaultCheckedValue', undefined)

const setInitialChecked = () => {
  if (radioChecked === props.value) isChecked.value = true
}

// 定义单选组件的通用样式。
const styleClassRadioCommon: string[] = [
  `${getComponentsClassPrefix()}radio-hover`, // 悬停效果样式
  `${props.disabled ? getComponentsClassPrefix() + 'radio-disabled' : ''}` // 禁用状态样式
]

// 单选组件的包装器样式。
const styleClassRadioWrapper: ComputedRef<string[]> = computed(() => [
  ...styleClassRadioCommon, // 包含通用样式
  `${getComponentsClassPrefix()}radio-wrapper` // 特定的包装器样式
])

// 单选组件本身的样式。
const styleClassRadio: ComputedRef<string[]> = computed(() => [
  ...styleClassRadioCommon, // 包含通用样式
  `${getComponentsClassPrefix()}radio` // 特定的单选样式
])

// 单选内容的样式。
const styleClassRadioContent: ComputedRef<string[]> = computed(() => [
  `${getComponentsClassPrefix()}radio-font-size-${radioSize ?? 'medium'}`, // 根据属性设置字体大小，或默认设置为中等大小
  `${getComponentsClassPrefix()}radio-content` // 内容特定的样式
])
const emits = defineEmits<RadioEmits>()

const handleChange = (ev: Event) => {
  const element: HTMLInputElement = ev.target as HTMLInputElement
  emits('radioChecked', element.value)
}

onMounted(() => {
  setInitialChecked()
})
</script>

<style lang="less" src="./style/index.less"></style>
