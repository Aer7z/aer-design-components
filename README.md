# aer-design-components

这是基于 Vue3 + TS 封装基础标签而成的组件库，为了应对不同业务中重复代码的产生而出现

## 目前进展

通用组件部分：
Button、ButtonDisuse、Dropdown、Input、Modal、Radio和RadioGroup

基础工具组件：
Trigger、clickOutside、placement、typography、overlay、

## 项目规范

见根目录下 [code-style-guide.md](./code-style-guide.md)

## 思想/技术详情：

1. 全局样式解决方案：CSS变量 + 类名切换 + less, 详情设计和组织见 [code-style-guide.md](./code-style-guide.md)
2. 将面向接口的思想融入代码设计, 提取 props、emits 的类型约定到 interface.ts
3. 结构化组件设计(如 dropdown 组件), 层次结构分别书写, 组合成 dropdown 组件, 语义清晰, 拓展性强
4. 无渲染组件设计(如 trigger、placement组件), 提供组件上下文, 用于实现基础逻辑的复用
5. 自动化测试: vitest + jsdom + vue-test-utils, 使用`npm run coverage`即可获取代码覆盖率, 工作量大, 正在逐步提高代码覆盖率

## 使用方法

以Modal组件为例，import 引入后再 `app.use(Modal)`

## 组件样式测试流程

切换版本至node18.12以上
根目录输入指令: `pnpm story`
