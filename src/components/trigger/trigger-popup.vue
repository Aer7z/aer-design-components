<template>
  <Teleport to="body" :disabled="props.teleportToBody">
    <template v-if="triggerContext.triggerPopupVisible.value">
      <slot></slot>
    </template>
  </Teleport>
</template>

<script lang="ts" setup>
import { type TriggerPopupProps } from './interface'
import { useTriggerContext } from './context'

defineOptions({
  name: 'TriggerPopup',
})
const triggerContext = useTriggerContext()
const props = withDefaults(defineProps<TriggerPopupProps>(), {
  teleportToBody: true,
})
</script>
