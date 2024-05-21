**目录**
[toc]

# API

## `<Radio>` Props说明

|     参数名     |                       描述                        |             类型              |  默认值  |
| :------------: | :-----------------------------------------------: | :---------------------------: | :------: |
| defaultChecked |                   默认是否选中                    |           `boolean`           | `false`  |
|    disabled    |                     是否禁用                      |           `boolean`           | `false`  |
|      size      | 单选组件的尺寸`('mini','small','medium','large')` |       `RadioGroupSize`        | `medium` |
|      type      |        单选组件的类型`('button','radio')`         |          `RadioType`          | `radio`  |
|     value      |                   选项的 value                    | `'string','number','boolean'` |  `true`  |

## `<Radio>` Event说明

|    事件名    |         描述          |              参数               |
| :----------: | :-------------------: | :-----------------------------: |
| radioChecked | radio被选中的时候触发 | `('string','number','boolean')` |

## `<Radio>` Slots说明

| 插槽名  | 描述 | 参数 |
| :-----: | :--: | :--: |
| default | 文案 | ---- |

## `<RadioGroup>` Props说明

|       参数名        |                       描述                        |             类型              |    默认值    |
| :-----------------: | :-----------------------------------------------: | :---------------------------: | :----------: |
|    defaultValue     |        整个radio组默认选中的radio的 value         | `'string','number','boolean'` |     ---      |
|      direction      |    单选组件的方向 `('horizontal','vartical')`     |           `boolean`           | `horizontal` |
|      disabled       |                     是否禁用                      |           `boolean`           |   `false`    |
| modelValue(v-model) |        整个radio组当前radio选中值的绑定值         | `'string','number','boolean'` |     ---      |
|        size         | 单选组件的尺寸`('mini','small','medium','large')` |       `RadioGroupSize`        |   `medium`   |
|        type         |        单选组件的类型`('button','radio')`         |       `RadioGroupType`        |   `radio`    |

## `<RadioGroup>` Event说明

|    事件名     |            描述             |              参数               |
| :-----------: | :-------------------------: | :-----------------------------: |
| checkedChange | 组内radio选择改变的时候触发 | `('string','number','boolean')` |

## `<RadioGroup>` Slots说明

| 插槽名  |   描述   | 参数 |
| :-----: | :------: | :--: |
| default | 默认插槽 | ---- |
