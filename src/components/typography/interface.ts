import type {} from './constants'

//Button的事件列表
export interface TypographyEmits {
  [key: string]: any // 添加索引签名
  // click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface TypographyProps {}

export interface TypographyTextProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  color?: 'black' | 'success' | 'danger' | 'white'
}
