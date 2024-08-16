<template>
  <Radio value="eeee">eeee</Radio>
  <div>2</div>
  <RadioGroup v-model="valueTest" defaultValue="d">
    <Radio value="a">a</Radio>
    <Radio value="b">b</Radio>
    <Radio value="c">c</Radio>
    <Radio value="d">d</Radio>
    {{ valueTest }}
  </RadioGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Radio, RadioGroup } from '../index'
let valueTest = ref('test')
</script>
