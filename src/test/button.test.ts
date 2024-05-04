// sum.test.js
import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../components/button/index.js'

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3)
// })

describe('button.vue test', () => {
  test('status normal', async () => {
    const status = 'normal'

    // 挂载组件并传递相应的 props
    const wrapper = mount(Button, {
      props: { status }
    })
    // 等待组件更新
    // await wrapper.vm.$nextTick();

    // 断言组件是否存在
    expect(wrapper.exists()).toBe(true)
    // console.log(wrapper)

    console.log(wrapper.html()) // 打印组件的 HTML 结构
    const classNames = wrapper.find('button').classes() // 获取组件的类名数组
    console.log(classNames)

    // 断言类名中是否包含动态生成的类名
    // expect(classNames).toContain('test');
    // expect(classNames).toContain(`aer-btn-status-${status}`);
    // expect(wrapper.classes()).toEqual(expect.arrayContaining(['aer-btn-status-normal']))
    // expect(wrapper.classes()).toContain(['aer-btn-status-normal'])
    // expect(wrapper.classes()).toContain('aer-btn-status-normal');
  })
})
