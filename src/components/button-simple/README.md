# API

## `<ButtonSimple>` Props说明

|  参数名  |                                   描述                                    |      类型       |   默认值    |
| :------: | :-----------------------------------------------------------------------: | :-------------: | :---------: |
| disabled |                              是否为禁用状态                               |    `boolean`    |   `false`   |
|   size   |                按钮尺寸`('mini','small','medium','large')`                |  `ButtonSize`   | `'medium'`  |
|  shape   |                   按钮形状`('square','circle','round')`                   |  `ButtonShape`  | `'square'`  |
|  target  |                           link 类型按钮跳转链接                           |    `string`     |    `''`     |
| variant  | 按钮的类型`('primary','secondary','outline','text', 'link','destructive')` | `ButtonVariant` | `'primary'` |

## `<ButtonSimple>` Event说明

| 事件名 | 描述           | 参数             |
| ------ | -------------- | ---------------- |
| click  | 点击按钮时触发 | ev: `MouseEvent` |

## `<ButtonSimple>` Slots说明

| 插槽名  | 描述 | 参数 |
| ------- | :--: | ---- |
| default | 文案 | -    |
| icon    | 图标 | -    |
