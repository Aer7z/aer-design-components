<template>
  <Input placeholder="这是默认输入框" size="large" v-model="str" />
  <label>{{ str }}</label
  ><br /><br />
  <Input placeholder="这是默认输入框" size="small" v-model="str" disabled /><br />
  <br /><Input defaultValue="awerewersda" placeholder="这是默认输入框" showClear>
    <template v-slot:append><AerButton>后置标签</AerButton></template>
    <template v-slot:prepend><AerButton>前置标签</AerButton></template>
    <template v-slot:prefix><div>前缀元素</div></template>
    <template v-slot:suffix>后缀元素</template>
  </Input>
  <br />
  <br /><Input defaultValue="awerewersda" placeholder="这是默认输入框" showClear>
    <template v-slot:append><AerButton>后置标签</AerButton></template>
    <template v-slot:prepend><AerButton>前置标签</AerButton></template>
  </Input>
  <br />
  <br /><Input
    defaultValue="awerewersda"
    placeholder="这是默认输入框"
    showCount
    showClear
    :maxLength="10"
  >
    <template v-slot:append><AerButton>后置标签</AerButton></template>
    <template v-slot:prepend><AerButton>前置标签</AerButton></template>
  </Input>
  <AerButton>wo </AerButton>
</template>

<script setup>
import Input from '@/components/input'
import { ref } from 'vue'

var str = ref('我没变')
</script>

<style scoped>
div {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
</style>
