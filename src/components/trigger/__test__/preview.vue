<template>
  <div>
    <Trigger><button>按钮</button></Trigger>
    <TriggerPopup><div>展示页面</div></TriggerPopup>
  </div>
</template>

<script lang="ts" setup>
import { Trigger, TriggerPopup } from '../index'
import { createTriggerContext } from '../context'
createTriggerContext()
</script>
