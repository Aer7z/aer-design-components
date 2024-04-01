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

defineOptions({
  name: 'AerInput'
})
const model = defineModel()
// console.log(model.value)

const props = defineProps({
  //是否显示输入框内容清除按钮，默认值false
  showClear: { type: Boolean, default: false },
  //是否显示输入框字数统计按钮，默认值false
  showCount: { type: Boolean, default: false },
  /**
   * @zh 默认值（非受控状态）
   * @en Default value (uncontrolled state)
   */
  defaultValue: {
    type: String,
    default: ''
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 输入值的最大长度，
   * @en Enter the maximum length of the value
   */
  maxLength: {
    type: Number,
    default: 100
  },
  placeholder: {
    type: String,
    default: ''
  },
  /**
   * @zh 是否为只读状态
   * @en Whether it is read-only
   */
  readonly: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 输入框的尺寸
   * @en input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { type: String, default: 'medium' },
  /**
   * @zh 输入框的状态
   * @en input state
   * @values 'normal','error','warning'
   * @defaultValue 'normal'
   */
  status: {
    type: String,
    default: 'normal'
  },
  // wordLengh:{},
  /**
   * @zh 输入框类型，
   * @en type of input
   * @values 'email','number','password','search','tel','text','url'
   * @defaultValue 'text'
   */
  type: {
    type: String,
    default: 'text'
  },

  // filled Outlined Borderless
  variant: {}
})

const emits = defineEmits({
  blur: (ev: FocusEvent) => true,
  /**
   * @zh 仅在输入框失焦或按下回车时触发
   * @en Only triggered when the input box is out of focus or when you press Enter
   * @param {string} value
   * @param {Event} ev
   */
  change: (value: string, ev: Event) => true,
  /**
   * @zh 用户点击清除按钮时触发
   * @en Triggered when the user clicks the clear button
   * @param {MouseEvent} ev
   */
  clear: (ev: MouseEvent) => true,
  /**
   * @zh 用户输入时触发
   * @en Triggered when the user enters
   * @param {string} value
   * @param {Event} ev
   */
  input: (value: string, ev: Event) => true,
  /**
   * @zh 用户按下回车时触发
   * @en Triggered when the user presses enter
   * @param {KeyboardEvent} ev
   */
  pressEnter: (ev: KeyboardEvent) => true,
  /**
   * @zh 输入框获取焦点时触发
   * @en Triggered when the input box gets focus
   * @param {FocusEvent} ev
   */
  focus: (ev: FocusEvent) => true
})

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

<style lang="less" src="./style/Input.less" scpoed></style>
