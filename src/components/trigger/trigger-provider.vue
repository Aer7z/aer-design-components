<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { triggerContext } from './context'
import { provide } from 'vue'
defineOptions({
  name: 'TriggerProvider',
})

const triggerContextObject = new triggerContext()
console.log(triggerContextObject)
// 提供触发器组件所需要的上下文
provide('triggerContextObject', triggerContextObject)

triggerContextObject.createTriggerContext.call(triggerContextObject)
</script>
