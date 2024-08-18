<template>
  <!-- <span>
    <Trigger><button>默认情况按钮</button></Trigger>
    <TriggerPopup><span>展示页面</span></TriggerPopup>
  </span> -->
  <!-- <span> -->
  <TriggerProvider>
    <Trigger position="top"><button>按钮</button></Trigger>
    <TriggerPopup><span>展示页面</span></TriggerPopup>
  </TriggerProvider>
  <!-- </span> -->
  <!-- <span>
    <Trigger position="bottom"><button>按钮</button></Trigger>
    <TriggerPopup><span>展示页面</span></TriggerPopup>
  </span>
  <span>
    <Trigger position="left"><button>按钮</button></Trigger>
    <TriggerPopup><span>展示页面</span></TriggerPopup>
  </span>
  <span>
    <Trigger position="right"><button>按钮</button></Trigger>
    <TriggerPopup><span>展示页面</span></TriggerPopup>
  </span> -->
</template>

<script lang="ts" setup>
import { TriggerProvider, Trigger, TriggerPopup } from '../index'
// import { createTriggerContext } from '../context'
// createTriggerContext()
</script>
