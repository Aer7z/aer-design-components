<template>
  <label :class="[clsRadioWrapper]">
    <!-- <template v-if="radioType === 'button'">
      <button :class="[clsRadio]" :disabled="props.disabled" :name="radioName">
        <div :class="[clsRadioLabel]">
          <slot></slot>
        </div>
      </button>
    </template>
    <template v-else> -->
    <input
      :type="radioType"
      :value="props.value"
      :class="[clsRadio]"
      :disabled="props.disabled"
      :name="radioName"
      :checked="isChecked"
      @change="handleChange"
    />
    <div :class="[clsRadioLabel]">
      <slot></slot>
    </div>
    <!-- </template> -->
  </label>
</template>
<script lang="ts" setup>
import { ref, computed, inject, onBeforeMount, onMounted } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { RadioProps, RadioEmits } from './interface'
import { getClsPrefix } from '../_utils/global-config'

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

const setInitialChecked: () => void = () => {
  if (radioChecked === props.value) isChecked.value = true
}

// 定义单选组件的通用样式。
const clsRadioCommon: string[] = [
  `${getClsPrefix()}radio-hover`, // 悬停效果样式
  `${props.disabled ? getClsPrefix() + 'radio-disabled' : ''}` // 禁用状态样式
]

// 单选组件的包装器样式。
const clsRadioWrapper: ComputedRef<string[]> = computed(() => [
  ...clsRadioCommon, // 包含通用样式
  `${getClsPrefix()}radio-wrapper` // 特定的包装器样式
])

// 单选组件本身的样式。
const clsRadio: ComputedRef<string[]> = computed(() => [
  ...clsRadioCommon, // 包含通用样式
  `${getClsPrefix()}radio` // 特定的单选样式
])

// 单选内容的样式。
const clsRadioLabel: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}radio-font-size-${radioSize}`, // 根据属性设置字体大小，或默认设置为中等大小
  `${getClsPrefix()}radio-content` // 内容特定的样式
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
