# API

## `<Input>` Props说明

|    参数名    |                                 描述                                  |     类型      |   默认值   |
| :----------: | :-------------------------------------------------------------------: | :-----------: | :--------: |
| defaultValue |       默认值(非受控状态) 支持v-model，若有defaultValue，值为其        |   `string`    |     -      |
|   disabled   |                            是否为禁用状态                             |   `boolean`   |  `false`   |
|  maxLength   |                           输入值的最大长度                            |   `number`    |   `100`    |
| placeholder  |                               提示文字                                |   `string`    |     -      |
|   readOnly   |                            是否为只读状态                             |   `boolean`   |  `false`   |
|  showClear   |                         是否显示内容清除按钮                          |   `boolean`   |  `false`   |
|  showCount   |                         是否显示字数统计按钮                          |   `boolean`   |  `false`   |
|     size     |              按钮尺寸`('mini','small','medium','large')`              |  `InputSize`  | `'medium'` |
|    status    |                按钮状态`('normal','error','warning')`                 | `InputStatus` | `'normal'` |
|     type     | 按钮的类型`('email','number','password','search','tel','text','url')` |  `InputType`  |  `'text'`  |

## `<Input>` Event说明

| 事件名     | 描述                           | 参数                         |
| ---------- | ------------------------------ | ---------------------------- |
| blur       | 输入框失去焦点时触发           | ev: `FocusEvent`             |
| change     | 仅在输入框失焦或按下回车时触发 | value: `string`, ev: `Event` |
| clear      | 用户点击清除按钮时触发         | ev: `MouseEvent`             |
| input      | 用户输入时触发                 | value: `string`, ev: `Event` |
| pressEnter | 用户按下回车时触发             | ev: `KeyboardEvent`          |
| focus      | 输入框获取焦点时触发           | ev: `FocusEvent`             |

## `<Input>` Slots说明

| 插槽名  |   描述   | 参数 |
| ------- | :------: | ---- |
| append  | 后置标签 | -    |
| prepend | 前置标签 | -    |
| suffix  | 后缀元素 | -    |
| prefix  | 前缀元素 | -    |
