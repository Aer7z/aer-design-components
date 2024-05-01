<template>
  <label :class="[styleClassRadioWrapper]">
    <template v-if="radioType === 'button'">
      <button :class="[styleClassRadio]" :disabled="disabled" :name="radioName">
        <div :class="[styleClassRadioContent]">
          <slot></slot>
        </div>
      </button>
    </template>
    <template v-else>
      <input :type="type" :class="[styleClassRadio]" :disabled="disabled" :name="radioName" />
      <div :class="[styleClassRadioContent]">
        <slot></slot>
      </div>
    </template>
  </label>
</template>
<script lang="ts" setup>
import { ref, computed, inject } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { RadioProps, RadioEmits } from './interface'
import { getComponentsClassPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Radio'
})

const props = withDefaults(defineProps<RadioProps>(), {
  defaultChecked: false,
  disabled: false,
  modelValue: '',
  size: 'medium',
  type: 'radio',
  value: true
})

const radioName: string | undefined = inject('radioGroupName', undefined)
const radioSize: string | undefined = inject('radioGroupSize', undefined) || props.size
const radioType: string | undefined = inject('radioGroupType', undefined) || props.type

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

// onBeforeMount(() => {})
</script>

<style lang="less" src="./style/index.less"></style>
