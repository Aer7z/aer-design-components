// // button.test.js
// // vitest js-dom
// import { describe, expect, test, vi } from 'vitest'
// import { mount } from '@vue/test-utils'
// import Button from '../components/button/index.js'
// import { getTagAProps, getTagCls, testComponentsClsContain } from './tess_utils.js'
// import {
//   BUTTON_SIZES,
//   BUTTON_SHAPES,
//   BUTTON_STATUSES,
//   BUTTON_TYPES
// } from '../components/button/constants.js'
// import { wrap } from 'module'

// // Button 组件的测试

// //默认状态另外再测
// describe('测试 Button 组件是否能根据状态生成对应类名', () => {
//   // Button 组件中识别为a标签的必备对象属性
//   const tagAProps: any = getTagAProps()
//   const clsPesfixButton: string = 'aer-btn-'
//   describe('测试与默认值的无关样式', () => {
//     test('a 标签', () => {
//       // 挂载组件并传递相应的 props
//       const wrapper = mount(Button, {
//         props: { ...tagAProps }
//       })
//       // 获取组件的类名数组
//       const classNames = getTagCls(wrapper, 'a')
//       //断言类名中是否包含动态生成的类名
//       expect(classNames).toContain('aer-btn')
//     })
//     test('button 标签', () => {
//       // 挂载组件并传递相应的 props
//       const wrapper = mount(Button)
//       // 获取组件的类名数组
//       const classNames = getTagCls(wrapper, 'button')
//       // 断言类名中是否包含动态生成的类名
//       expect(classNames).toContain('aer-btn')
//     })
//   })
//   describe('测试 disabled 样式', () => {
//     test('a 标签', () => {
//       // 挂载组件并传递相应的 props
//       const wrapper = mount(Button, {
//         props: { disabled: true, ...tagAProps }
//       })
//       // 获取组件的类名数组
//       const classNames = getTagCls(wrapper, 'a')
//       // 断言类名中是否包含动态生成的类名
//       expect(classNames).toContain('aer-btn-disabled')
//     })
//     test('button 标签', () => {
//       // 挂载组件并传递相应的 props
//       const wrapper = mount(Button, {
//         props: { disabled: true }
//       })
//       // 获取组件的类名数组
//       const classNames = getTagCls(wrapper, 'button')
//       // 断言类名中是否包含动态生成的类名
//       expect(classNames).toContain('aer-btn-disabled')
//     })
//   })
//   describe('测试 size 样式', () => {
//     test('a 标签', () => {
//       testComponentsClsContain(Button, clsPesfixButton, 'size', BUTTON_SIZES, 'a', tagAProps)
//     })
//     test('button 标签', () => {
//       testComponentsClsContain(Button, clsPesfixButton, 'size', BUTTON_SIZES, 'button')
//     })
//   })
//   describe('测试 shape 样式', () => {
//     test('a 标签', () => {
//       testComponentsClsContain(Button, clsPesfixButton, 'shape', BUTTON_SHAPES, 'a', tagAProps)
//     })
//     test('button 标签', () => {
//       testComponentsClsContain(Button, clsPesfixButton, 'shape', BUTTON_SHAPES, 'button')
//     })
//   })
//   describe('测试 status 样式', () => {
//     test('a 标签', () => {
//       testComponentsClsContain(Button, clsPesfixButton, 'status', BUTTON_STATUSES, 'a', tagAProps)
//     })
//     test('button 标签', () => {
//       testComponentsClsContain(Button, clsPesfixButton, 'status', BUTTON_STATUSES, 'button')
//     })
//   })
//   describe('测试 type 样式', () => {
//     test('不区分 button 标签还是 a 标签', () => {
//       testComponentsClsContain(Button, clsPesfixButton, 'type', BUTTON_TYPES, 'button')
//     })
//   })
// })

// describe('测试 Button 组件事件', () => {
//   describe('click事件', () => {
//     test('button 标签', async () => {
//       const clickFunction = (ev: MouseEvent) => {
//         console.log('我爱你')
//       }
//       const wrapper = mount(Button, {
//         emits: { click: clickFunction }
//       })
//       await wrapper.vm.$nextTick
//       // 创建一个 spy 来捕获 console.log 方法的调用, 并将其原始实现置空, 使其不再输出到控制台
//       const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined)
//       // 模拟点击按钮，触发输出到控制台的逻辑
//       const clickEvent = {
//         button: 0 // 主鼠标按钮
//       }
//       wrapper.find('button').trigger('click', clickEvent)
//       // 断言 console.log 是否被调用
//       expect(consoleLogSpy).toHaveBeenCalled()
//       // 断言 console.log 输出的内容是否符合预期
//       expect(consoleLogSpy).toHaveBeenCalledWith('我爱你')
//       // 将被 spy 的函数恢复为其原始的实现
//       consoleLogSpy.mockRestore()
//     })
//     test('a 标签', async () => {})
//   })
// })

// describe('测试 Button 组件插槽', () => {
//   test('默认插槽', () => {
//     const wrapper = mount(Button, {
//       slots: { default: '我是default按钮' }
//     })
//     // console.log(wrapper.html())
//   })
// })
