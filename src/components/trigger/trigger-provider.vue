<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { createTriggerContext } from './context'
defineOptions({
  name: 'TriggerProvider',
})

// 提供触发器组件所需要的上下文
createTriggerContext()
</script>
