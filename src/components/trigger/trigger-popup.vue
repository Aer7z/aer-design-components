<template>
  <Teleport to="body" :disabled="props.teleportToBody">
    <template v-if="triggerContextObject.triggerPopupVisible.value">
      <slot></slot>
    </template>
  </Teleport>
</template>

<script lang="ts" setup>
import { DEFAULT_TRIGGER_POPUP_PROPS, type TriggerPopupProps } from './interface'
import { triggerContext } from './context'
import { ref, type Ref, inject } from 'vue'

defineOptions({
  name: 'TriggerPopup',
})
const triggerContextObject: triggerContext | undefined = inject('triggerContextObject')
triggerContextObject?.useTriggerContext.call(triggerContextObject)

const props = withDefaults(defineProps<TriggerPopupProps>(), DEFAULT_TRIGGER_POPUP_PROPS)
</script>
