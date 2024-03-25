<template>
  <template v-if="target">
    <a
      :class="[type, shape, size, status]"
      :disabled="disabled"
      :href="target"
      @click="handleclick"
    >
      <slot />
    </a>
  </template>
  <template v-else>
    <button :class="[type, shape, size, status]" :disabled="disabled" @click="handleclick">
      <span v-if="loading"> </span>
      <slot />
    </button>
  </template>
  <!-- <h3>{{ props }}</h3> -->
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
// import { onMounted, getCurrentInstance, computed } from 'vue';
import type { ButtonType, ButtonShape, ButtonStatus, ButtonSize } from './constant'
//console.log(getCurrentInstance())

const props = defineProps({
  /**
   * @zh 按钮的类型，分为五种：默认按钮、主要按钮、虚框按钮、文字按钮、链接按钮。
   * @en Button types are divided into five types: default, primary, dashed, text and link.
   * @defaultValue 'default'
   */
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
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
   * @zh 设置跳转链接。设置此属性时，按钮渲染为a标签。
   * @en Set up a jump link. When this property is set, the button is rendered as `<a>`
   */
  target: {
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
  }
})
const emits = defineEmits({
  click: (ev: MouseEvent) => true
})

// const cls = computed(() => [])

function handleclick(ev: MouseEvent): void {
  if (props.loading || props.disabled) {
    ev.preventDefault()
    return
  }
  emits('click', ev)
}
</script>

<style scoped>
button,
a {
  background-color: var(--background-color);
  height: var(--height);
  font-size: var(--font-size);
  color: var(--color);
  border-style: var(--border-style);
  border-color: var(--border-color);

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  white-space: nowrap;
  margin: 2px;
  cursor: pointer;
  /* 禁止左键选中 */
  user-select: none;
}

.primary {
  --border-style: none;
}
.primary.normal {
  --color: rgba(248, 247, 240, 1);
  --background-color: rgba(91, 164, 174, 1);
}
.primary.success {
  --color: rgba(248, 247, 240, 1);
  --background-color: rgba(140, 184, 131, 1);
}
.primary.warning {
  --color: rgba(248, 247, 240, 1);
  --background-color: rgba(240, 85, 16, 1);
}
.primary.danger {
  --color: rgba(248, 247, 240, 1);
  --background-color: rgba(195, 37, 43, 1);
}
.primary.normal:hover {
  --background-color: rgba(91, 164, 174, 0.7);
  /* --background-color: rgba(248, 247, 240, 1); */
}
.primary.success:hover {
  --background-color: rgba(140, 184, 131, 0.7);
}
.primary.warning:hover {
  --background-color: rgba(240, 85, 16, 0.7);
}
.primary.danger:hover {
  --background-color: rgba(195, 37, 43, 0.7);
}

.default {
  border-style: solid;
}
.default.normal {
  --color: rgba(91, 164, 174, 1);
  --background-color: rgba(91, 164, 174, 0.1);
}
.default.success {
  --color: rgba(140, 184, 131, 1);
  --background-color: rgba(140, 184, 131, 0.1);
}
.default.warning {
  --color: rgba(240, 85, 16, 1);
  --background-color: rgba(240, 85, 16, 0.1);
}
.default.danger {
  --color: rgba(195, 37, 43, 1);
  --background-color: rgba(195, 37, 43, 0.1);
}
.dashed {
  --border-style: dashed;
}
.dashed.normal {
  --color: rgba(91, 164, 174, 1);
  --background-color: rgba(91, 164, 174, 0.1);
}
.dashed.success {
  --color: rgba(140, 184, 131, 1);
  --background-color: rgba(140, 184, 131, 0.1);
}
.dashed.warning {
  --color: rgba(240, 85, 16, 1);
  --background-color: rgba(240, 85, 16, 0.1);
}
.dashed.danger {
  --color: rgba(195, 37, 43, 1);
  --background-color: rgba(195, 37, 43, 0.1);
}

.default.normal:hover,
.dashed.normal:hover {
  --background-color: rgba(91, 164, 174, 0.3);
}
.default.success:hover,
.dashed.success:hover {
  --background-color: rgba(140, 184, 131, 0.3);
}
.default.warning:hover,
.dashed.warning:hover {
  --background-color: rgba(240, 85, 16, 0.3);
}
.default.danger:hover,
.dashed.danger:hover {
  --background-color: rgba(195, 37, 43, 0.3);
}

.text {
  --border-style: none;
}
.text:hover {
  --background-color: rgba(248, 247, 240, 1);
}
.text.normal {
  --color: rgba(91, 164, 174, 1);
}
.text.success {
  --color: rgba(140, 184, 131, 1);
}
.text.warning {
  --color: rgba(240, 85, 16, 1);
}
.text.danger {
  --color: rgba(195, 37, 43, 1);
}

/* .link {
} */

.link.normal {
  --color: rgba(91, 164, 174, 1);
}
.link.success {
  --color: rgba(140, 184, 131, 1);
}
.link.warning {
  --color: rgba(240, 85, 16, 1);
}
.link.danger {
  --color: rgba(195, 37, 43, 1);
}
.link.normal:hover {
  --color: rgba(91, 164, 174, 0.6);
}
.link.success:hover {
  --color: rgba(140, 184, 131, 0.6);
}
.link.warning:hover {
  --color: rgba(240, 85, 16, 0.6);
}
.link.danger:hover {
  --color: rgba(195, 37, 43, 0.6);
}
.square {
  border-radius: 0%;
}
.circle {
  border-radius: 10px;
}
.round {
  border-radius: 50%;
}

.mini {
  --height: 24px;
  --font-size: x-small;
}
.small {
  --height: 28px;
  --font-size: small;
}
.medium {
  --height: 32px;
  --font-size: medium;
}
.large {
  --height: 36px;
  --font-size: large;
}

button[disabled]:hover,
a[disabled='true']:hover {
  cursor: not-allowed;
}

/* a:hover,
button:hover {
  border-color: rgb(86, 166, 182);
  color: rgb(86, 166, 182);
} */

/* button[loading]:hover {
  border-color: rgb(86, 166, 182);
  color: rgb(86, 166, 182);
} */

/* button:active,
button:focus {
  border-color: rgb(86, 166, 182);
  color: rgb(86, 166, 182);
} */
</style>
