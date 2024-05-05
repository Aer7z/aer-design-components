// input.test.js
// vitest js-dom

import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../components/input/index.js'
import { getTagAProps, getTagCls, testComponentsClsContain } from './tess_utils.js'
import { INPUT_SIZES, INPUT_STATUSES, INPUT_TYPES } from '../components/input/constants'

describe('测试 Input 组件是否能根据状态生成对应类名', () => {
  test('测试与默认值的无关样式', () => {
    const wrapper = mount(Input)
    const classNames = getTagCls(wrapper, 'input')
    expect(classNames).toContain('aer-input')
  })
  test('测试 disabled 样式', () => {})
  test('测试 size 样式', () => {})
  test('测试 status 样式', () => {})
  test('测试 type 样式', () => {})
})