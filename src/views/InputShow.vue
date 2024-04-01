<template>
  <Input placeholder="这是默认输入框" size="large" v-model="str" />
  <label>{{ str }}</label
  ><br /><br />
  <Input placeholder="这是默认输入框" size="small" v-model="str" disabled /><br />
  <br /><Input defaultValue="awerewersda" placeholder="这是默认输入框" showClear>
    <template v-slot:append><Button>后置标签</Button></template>
    <template v-slot:prepend><Button>前置标签</Button></template>
    <template v-slot:prefix><div>前缀元素</div></template>
    <template v-slot:suffix>后缀元素</template>
  </Input>
  <br />
  <br /><Input defaultValue="awerewersda" placeholder="这是默认输入框" showClear>
    <template v-slot:append><Button>后置标签</Button></template>
    <template v-slot:prepend><Button>前置标签</Button></template>
  </Input>
  <br />
  <br /><Input
    defaultValue="awerewersda"
    placeholder="这是默认输入框"
    showCount
    showClear
    :maxLength="10"
  >
    <template v-slot:append><Button>后置标签</Button></template>
    <template v-slot:prepend><Button>前置标签</Button></template>
  </Input>
</template>

<script setup>
import Input from '@/components/input'
import Button from '../components/button'
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
