//Button的事件列表
export interface ClickOutsideEmits {
  [key: string]: any // 添加索引签名
  // click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface ClickOutsideProps {
  handleClickOutside?: (ev: MouseEvent) => {}
}