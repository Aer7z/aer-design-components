<template>
  <template v-if="target">
    <a
      class="element"
      :class="[styleClass, type, shape, size, status]"
      :href="target"
      @click="handleclick"
    >
      <slot />
    </a>
  </template>
  <template v-else>
    <button
      class="element"
      :class="[styleClass, type, shape, size, status]"
      :disabled="disabled"
      @click="handleclick"
    >
      <span v-if="loading"> </span>
      <slot />
    </button>
  </template>
  <!-- <h3>{{ props }}</h3> -->
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { ButtonType, ButtonShape, ButtonStatus, ButtonSize } from './constant'
//console.log(getCurrentInstance())

defineOptions({
  name: 'AerButton'
})

const props = defineProps({
  /**
   * @zh 按钮是否禁用
   * @en Whether the button is disabled
   * @defaultValue false
   */
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String
  },
  /**
   * @zh 按钮是否为加载中状态
   * @en Whether the button is in the loading state
   */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 按钮的尺寸
   * @en Button size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium'
  },
  /**
   * @zh 按钮的形状
   * @en Button shape
   * @values 'square','circle','round'
   * @defaultValue 'square'
   *
   */
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'square'
  },
  /**
   * @zh 按钮的状态
   * @en Button state
   * @values 'normal','warning','success','danger'
   * @defaultValue 'normal'
   */
  status: {
    type: String as PropType<ButtonStatus>,
    default: 'normal'
  },
  /**
   * @zh 设置跳转链接。设置此属性时，按钮渲染为a标签。
   * @en Set up a jump link. When this property is set, the button is rendered as `<a>`
   */
  target: {
    type: String
  },
  /**
   * @zh 按钮的类型，分为五种：默认按钮、主要按钮、虚框按钮、文字按钮、链接按钮。
   * @en Button types are divided into five types: default, primary, dashed, text and link.
   * @defaultValue 'default'
   */
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  }
})
const emits = defineEmits({
  click: (ev: MouseEvent) => true
})

const styleClass = computed(() => {
  return {
    disabled: props.disabled
  }
})

// const cls = computed(() => [])

function handleclick(ev: MouseEvent): void {
  if (props.loading || props.disabled) {
    ev.preventDefault()
    return
  }
  ;(ev.currentTarget as HTMLButtonElement).blur()
  emits('click', ev)
}
</script>

<style lang="less" src="./style/Index.less" scoped></style>
