<template>
  <Teleport to="body">
    <div v-if="triggerPopupVisible" :style="[triggerPopupPosRec]">
      <slot></slot>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { onBeforeUnmount } from 'vue'
import { DEFAULT_TRIGGER_POPUP_PROPS, type TriggerPopupProps } from './interface'
import { useTriggerContext } from './context'

defineOptions({
  name: 'TriggerPopup',
})

const { triggerPopupPosRec, triggerPopupVisible } = useTriggerContext()

const props = withDefaults(defineProps<TriggerPopupProps>(), DEFAULT_TRIGGER_POPUP_PROPS)

function handleTurnPopupOff() {
  triggerPopupVisible.value = false
}

onBeforeUnmount(() => {
  handleTurnPopupOff()
})
</script>
