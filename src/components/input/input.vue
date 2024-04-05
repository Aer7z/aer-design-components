<template>
  <span :class="[styleClass]" class="newInput">
    <span v-if="$slots.prepend" class="prepend">
      <slot name="prepend" />
    </span>
    <span v-if="$slots.prefix" class="prefix">
      <slot name="prefix" />
    </span>
    <input
      v-model="model"
      :class="[styleClass]"
      :disabled="disabled"
      :placeholder="placeholder"
      :maxlength="maxLength"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"
      @keydown.enter="handlePressEnter"
    />
    <span v-if="showCount" class="styleCount">{{ countRate }}</span>
    <span v-if="showClear" class="styleClear" @click="handleClear($event)">x</span>
    <span v-if="$slots.suffix" class="suffix">
      <slot name="suffix" />
    </span>
    <span v-if="$slots.append" class="append">
      <slot name="append" />
    </span>
  </span>
</template>

<script setup lang="ts">
// console.log(getCurrentInstance())
import { onMounted, computed } from 'vue'
import type { InputEmits, InputProps } from './interface'

defineOptions({
  name: 'Input'
})
const model = defineModel()
// console.log(model.value)

const props = withDefaults(defineProps<InputProps>(), {
  disabled: false,
  maxLength: 100,
  readOnly: false,
  showClear: false,
  showCount: false,
  size: 'medium',
  status: 'normal',
  type: 'text'
})

const emits = defineEmits<InputEmits>()

onMounted(() => {
  //默认值和双向绑定数值之间该做什么样的取舍?
  //优先选择设置了默认值的默认数值

  //因此，先看看有无设置默认值，有就先将input的内容设置为默认值
  model.value = props.defaultValue || model.value

  if (props.maxLength != 100) {
    model.value = String(model.value).slice(0, props.maxLength)
  }
})

const styleClass = computed(() => [
  'cls',
  `${props.size ?? 'medium'}`,
  {
    disabled: props.disabled
  }
])

const countRate = computed(() => {
  const InputStr: string = String(model.value).replace(/\n|\r/, '') //转换成为字符串，并且去除回车换行符
  return `${InputStr.length}/${props.maxLength}`
})

const handleBlur = (ev: FocusEvent) => {
  emits('blur', ev)
}
const handleChange = (ev: Event) => {
  const value = (ev.target as HTMLInputElement).value
  emits('change', value, ev)
}
const handleClear = (ev: MouseEvent) => {
  model.value = ''
  emits('clear', ev)
}
const handleFocus = (ev: FocusEvent) => {
  emits('focus', ev)
}
const handleInput = (ev: Event) => {
  const value = (ev.target as HTMLInputElement).value
  emits('input', value, ev)
}
const handlePressEnter = (ev: KeyboardEvent) => {
  emits('pressEnter', ev)
}
</script>

<style lang="less" src="./style/input.less" scpoed></style>
