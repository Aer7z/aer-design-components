// button.test.js
// vitest js-dom
import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../components/button/index.js'
import {
  BUTTON_SIZES,
  BUTTON_SHAPES,
  BUTTON_STATUSES,
  BUTTON_TYPES
} from '../components/button/constants.js'
import { getTagAProps, getTagCls, testComponentsClsContain } from './tess_utils.js'

// Button 组件的测试

//默认状态另外再测
describe('测试是否能根据状态生成对应类名', () => {
  // Button 组件中识别为a标签的必备对象属性
  const tagAProps: any = getTagAProps()
  const clsPesfixButton: string = 'aer-btn-'
  describe('测试 Button 组件自带样式', () => {
    test('a 标签', () => {
      // 挂载组件并传递相应的 props
      const wrapper = mount(Button, {
        props: { ...tagAProps }
      })
      // 获取组件的类名数组
      const classNames = getTagCls(wrapper, 'a')
      //断言类名中是否包含动态生成的类名
      expect(classNames).toContain('aer-btn')
    })
    test('button 标签', () => {
      // 挂载组件并传递相应的 props
      const wrapper = mount(Button)
      // 获取组件的类名数组
      const classNames = getTagCls(wrapper, 'button')
      // 断言类名中是否包含动态生成的类名
      expect(classNames).toContain('aer-btn')
    })
  })
  describe('测试 Button 组件的 disabled', () => {
    test('a 标签', () => {
      // 挂载组件并传递相应的 props
      const wrapper = mount(Button, {
        props: { disabled: true, ...tagAProps }
      })
      // 获取组件的类名数组
      const classNames = getTagCls(wrapper, 'a')
      // 断言类名中是否包含动态生成的类名
      expect(classNames).toContain('aer-btn-disabled')
    })
    test('button 标签', () => {
      // 挂载组件并传递相应的 props
      const wrapper = mount(Button, {
        props: { disabled: true }
      })
      // 获取组件的类名数组
      const classNames = getTagCls(wrapper, 'button')
      // 断言类名中是否包含动态生成的类名
      expect(classNames).toContain('aer-btn-disabled')
    })
  })
  describe('测试 Button 组件的 size', () => {
    test('a 标签', () => {
      testComponentsClsContain(Button, clsPesfixButton, 'size', BUTTON_SIZES, 'a', tagAProps)
    })
    test('button 标签', () => {
      testComponentsClsContain(Button, clsPesfixButton, 'size', BUTTON_SIZES, 'button')
    })
  })
  describe('测试 Button 组件的 shape', () => {
    test('a 标签', () => {
      testComponentsClsContain(Button, clsPesfixButton, 'shape', BUTTON_SHAPES, 'a', tagAProps)
    })
    test('button 标签', () => {
      testComponentsClsContain(Button, clsPesfixButton, 'shape', BUTTON_SHAPES, 'button')
    })
  })
  describe('测试 Button 组件的 status', () => {
    test('a 标签', () => {
      testComponentsClsContain(Button, clsPesfixButton, 'status', BUTTON_STATUSES, 'a', tagAProps)
    })
    test('button 标签', () => {
      testComponentsClsContain(Button, clsPesfixButton, 'status', BUTTON_STATUSES, 'button')
    })
  })
  describe('测试 Button 组件的 type', () => {
    test('不区分 button 标签还是 a 标签', () => {
      testComponentsClsContain(Button, clsPesfixButton, 'type', BUTTON_TYPES, 'button')
    })
  })
})
