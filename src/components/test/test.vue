<template>
  <label>Option 1</label>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'

defineOptions({
  name: 'Test'
})

const outerDiv: Ref = ref<HTMLElement>()

const f = (event: FocusEvent) => {
  if ((event.target as HTMLElement)?.tagName === 'BUTTON') {
    outerDiv.value.focus()
  }
}

function handleFocus() {
  console.log('Outer div focused!')
  // 在这里添加处理焦点事件的代码
}
</script>
<style></style>
