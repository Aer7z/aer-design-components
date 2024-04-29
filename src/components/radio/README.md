# API

## `<Radio>` Props说明

|     参数名     |                描述                |             类型              | 默认值  |
| :------------: | :--------------------------------: | :---------------------------: | :-----: |
| defaultChecked |            默认是否选中            |           `boolean`           | `false` |
|    disabled    |              是否禁用              |           `boolean`           | `false` |
|   modelValue   |        整个组件当前的绑定值        | `'string','number','boolean'` |   ---   |
|      type      | 单选组件的类型`('button','radio')` |          `RadioType`          | `radio` |
|     value      |            选项的 value            | `'string','number','boolean'` | `true`  |

## `<Radio>` Event说明

| 事件名 | 描述                                            | 参数 |
| ------ | ----------------------------------------------- | ---- |
| change | 值改变的时候触发`('string','number','boolean')` | ---- |

## `<Radio>` Slots说明

| 插槽名  | 描述 | 参数 |
| ------- | :--: | ---- |
| default | 文案 | ---- |

## `<RadioGroup>` Props说明

|     参数名     |                       描述                        |             类型              |    默认值    |
| :------------: | :-----------------------------------------------: | :---------------------------: | :----------: |
| defaultChecked |                   默认是否选中                    |           `boolean`           |   `false`    |
|   direction    |    单选组件的方向 `('horizontal','vartical')`     |           `boolean`           | `horizontal` |
|    disabled    |                     是否禁用                      |           `boolean`           |   `false`    |
|   modelValue   |               整个组件当前的绑定值                | `'string','number','boolean'` |     ---      |
|      size      | 单选组件的尺寸`('mini','small','medium','large')` |       `RadioGroupSize`        |   `medium`   |
|      type      |        单选组件的类型`('button','radio')`         |       `RadioGroupType`        |   `radio`    |
|     value      |                   选项的 value                    | `'string','number','boolean'` |    `true`    |

## `<RadioGroup>` Event说明

| 事件名 | 描述     | 参数 |
| ------ | -------- | ---- |
| change | 改变选择 | ---- |

## `<RadioGroup>` Slots说明

| 插槽名  |   描述    | 参数 |
| ------- | :-------: | ---- |
| radio   | radio插槽 | ---- |
| default |   文案    | ---- |
