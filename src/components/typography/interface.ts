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

export const DEFAULT_TYPOGRAPHY_TEXT_PROPS: TypographyTextProps = {
  size: 'medium',
  color: 'black',
}

// export const DEFAULT_Typography_PROPS: TypographyProps = {
// }
