## 命名规范

- 目录、文件：小写， \- 分隔
- 常量：全部大写，单词间 \_ 做分隔
- 变量（含方法参数）、方法：小驼峰命名法（首字母小写，其余单词首字母大写）
- 类型约定、接口：大驼峰命名法（单词首字母均大写），也就是下面目录结构中指定的 constants.ts 和 interface.ts
- 样式类名：小写字母， \- 做分隔，若单词表示状态则 \_ 分隔

## 文件目录结构

组件库代码存放在/src/components中，组件结构为:

- xxx
  - style
    - index.less
    - index.ts
    - token.less
    - xxx.less
  - constants.ts
  - interface.ts
  - README.md
  - xxx.vue

## 组件编写部分

组件库中关于组件 props 的约定

1. 组件中的属性传递在前、绑定事件传递在后
2. 组件目录下的index.ts 负责合并导入导出本部分内的组件
3. interface.ts 定义 props 及 emit 接口, 以及相关类型

## CSS部分

CSS全局样式解决方案：CSS变量 + 类名切换 + Less, 需要CSS class命名上的规范, 以避免使用vue中自带的scoped

（全局样式存放于 /src/components/style/theme/index.less ）
如何使用：全局样式导入到 token.less 中进行定制，组件具体样式 xxx.less 在导入 token.less 后进行编写， index.less 聚合所有组件样式，最后使用 index.ts 再包裹一层

核心设计思想：

1. CSS主题样式切换行为由JS触发，但是样式管理归CSS；
2. 通过规范类命名，避免全局样式污染
