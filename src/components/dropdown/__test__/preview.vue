<template>
  <Dropdown>
    <dropdown-trigger>
      <button>点击</button>
    </dropdown-trigger>
    <DropdownTriggerPopup>
      <div>展示</div>
    </DropdownTriggerPopup>
  </Dropdown>
</template>

<script lang="ts" setup>
import { Dropdown, DropdownTrigger, DropdownTriggerPopup } from '../index'
</script>
