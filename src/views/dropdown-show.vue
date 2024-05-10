<template>
  <Dropdown>
    <template v-slot:trigger>
      <DropdownTrigger>
        <button>test</button>
      </DropdownTrigger>
    </template>
    <template v-slot:triggerContent>
      <DropdownContent>
        <label>测试</label>
      </DropdownContent>
    </template>
  </Dropdown>
  <div>233</div>
</template>

<script setup lang="ts">
import Dropdown from '../components/dropdown/index'
import { DropdownTrigger, DropdownContent } from '../components/dropdown/index'

// import Button from '../components/button/index'
</script>

<style></style>
