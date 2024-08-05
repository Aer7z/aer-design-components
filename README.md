# aer-design-components

基于Vue3+TS封装基础标签写成的组件库

## 目前进展

完成了button组件、input组件、modal组件、trigger组件、dropdown组件、radio和radioGroup组件

思想/技术详情：

1. 使用**css Variable** + **类名切换** + **less预编译器**完成主题样式切换；
2. 将依赖倒置原则和面向接口的思想融入代码；
3. **逻辑和样式分离**，样式文件存入同目录下的style文件，预计使用规范命名的方式避免样式的全局污染(不再使用scoped属性)；
4. **动态class样式**，根据传入参数动态选择样式；
5. 更加规范的全局样式分配，结合css Variable，**增加主题样式定制和切换**
6. 各自组件中style目录下的index.ts在之后"**结构逻辑**"与"**样式**"分离的时候使用
7. 采用**vitest、jsdom 和 vue-test-uitls** 来对组件库进行**自动化测试**，正在逐步提高代码覆盖率(测试结果在控制台输入命令 npm run coverage 可得)

## 使用方法

import 引入后再app.use(Modal)

## 如何测试组件

根目录输入指令: pnpm story
