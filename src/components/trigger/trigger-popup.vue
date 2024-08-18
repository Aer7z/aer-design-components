<template>
  <Teleport to="body">
    <span
      v-if="triggerContext.triggerPopupVisible.value"
      :style="['position:absolute', triggerContext.triggerPopupRec.value]"
    >
      <slot></slot>
    </span>
  </Teleport>
</template>

<script lang="ts" setup>
import { onBeforeUnmount } from 'vue'
import { DEFAULT_TRIGGER_POPUP_PROPS, type TriggerPopupProps } from './interface'
import { useTriggerContext } from './context'

defineOptions({
  name: 'TriggerPopup',
})

const triggerContext = useTriggerContext()

const props = withDefaults(defineProps<TriggerPopupProps>(), DEFAULT_TRIGGER_POPUP_PROPS)

function handleTurnPopupOff() {
  triggerContext.triggerPopupVisible.value = false
}

onBeforeUnmount(() => {
  handleTurnPopupOff()
})
</script>
