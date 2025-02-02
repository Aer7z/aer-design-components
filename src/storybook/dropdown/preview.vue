<template>
  <Dropdown>
    <dropdown-trigger>
      <button>点击</button>
    </dropdown-trigger>
    <DropdownTriggerContent>
      <div>展示</div>
    </DropdownTriggerContent>
  </Dropdown>
</template>

<script lang="ts" setup>
import { Dropdown, DropdownTrigger, DropdownTriggerContent } from '@/components/dropdown/index'
</script>
