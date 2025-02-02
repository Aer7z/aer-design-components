<template>
  <Teleport to="body" :disabled="props.teleportToBody">
    <template v-if="triggerContext.triggerContentVisible.value">
      <slot></slot>
    </template>
  </Teleport>
</template>

<script lang="ts" setup>
import { type TriggerContentProps } from './interface'
import { useTriggerContext } from './context'

defineOptions({
  name: 'TriggerContent',
})
const triggerContext = useTriggerContext()
const props = withDefaults(defineProps<TriggerContentProps>(), {
  teleportToBody: true,
})
</script>
