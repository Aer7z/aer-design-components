import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

const getTagAProps = () => {
  return { target: 'www.baidu.com', type: 'link' }
}
// type tagAProps = { target: 'www.baidu.com'; type: 'link' }
const getTagCls: (wrapper: any, tagName: string) => string[] = (
  wrapper: any,
  tagName: string
): string[] => {
  return wrapper.find(tagName).classes()
}

/*
  componentName(组件名): string
  // componentType: string,
  componentClsPrefix(组件类名前缀): string,
  propsTypeArray(组件props类型的可读数组):  readonly string[],
  propsName(props名称): string,
  tagName(类名的载体标签名): string
*/
const testComponentsClsContain = (
  componentName: any,
  // componentType: string,
  componentClsPrefix: string,
  propsName: string,
  propsTypeArray: readonly string[],
  tagName: string,
  tagAProps?: any
) => {
  // 循环遍历 Button 组件的状态数组
  for (const element of propsTypeArray) {
    // 挂载组件并传递相应的 props
    const wrapper = mount(componentName, {
      props: { [propsName]: element, ...tagAProps }
    })
    // 获取组件的类名数组
    const classNames = wrapper.find(tagName).classes()
    // 断言类名中是否包含动态生成的类名
    expect(classNames).toContain(`${componentClsPrefix + propsName}-${element}`)
  }
}

export { getTagAProps, getTagCls, testComponentsClsContain }
