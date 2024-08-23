<template>
  <Teleport to="body" :disabled="props.teleportToBody">
    <template v-if="triggerContext.triggerPopupVisible.value">
      <slot></slot>
    </template>
  </Teleport>
</template>

<script lang="ts" setup>
import { DEFAULT_TRIGGER_POPUP_PROPS, type TriggerPopupProps } from './interface'
import { useTriggerContext } from './context'
import { ref, type Ref, inject } from 'vue'

defineOptions({
  name: 'TriggerPopup',
})
const triggerContext = useTriggerContext()
const props = withDefaults(defineProps<TriggerPopupProps>(), DEFAULT_TRIGGER_POPUP_PROPS)
</script>
