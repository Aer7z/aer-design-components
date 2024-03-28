<template>
  <!-- <Button> </Button> -->
  <Button type="default" shape="circle" disabled>我是default按钮</Button>
  <Button type="default" shape="round">我</Button>
  <!-- <input type="text" value="fsdaf" />
  <buton>fsdfsdf</buton> <buton>fsdfsdf</buton> <buton>fsdfsdf</buton> -->
  <Input placeholder="这是默认输入框" size="large" v-model="str" />
  <label>{{ str }}</label>
  <Input placeholder="这是默认输入框" size="small" v-model="str" disabled />
  <!-- <Input defaultValue="awerewersda" placeholder="这是默认输入框" :allowClear="true">
    <template v-slot:append><Button>后置标签</Button></template>
    <template v-slot:prepend><Button>前置标签</Button></template>
    <template v-slot:prefix><Button>前缀元素</Button></template>
    <template v-slot:suffix><Button>后缀元素</Button></template>
  </Input> -->
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Button from './components/button/index'
import Input from './components/input/index'
import { ref } from 'vue'

var str = ref('我没变')
</script>

<style scoped>
#app{
  
}
</style>
