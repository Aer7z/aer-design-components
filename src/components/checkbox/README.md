**目录**
[toc]
# API

## `<Checkbox>` Props说明

|     参数名     |                       描述                        |             类型              |  默认值  |
| :------------: | :-----------------------------------------------: | :---------------------------: | :------: |
| defaultChecked |                   默认是否选中                    |           `boolean`           | `false`  |
|    disabled    |                     是否禁用                      |           `boolean`           | `false`  |
|      size      | 单选组件的尺寸`('mini','small','medium','large')` |      `CheckboxGroupSize`      | `medium` |
|     value      |                   选项的 value                    | `'string','number','boolean'` |  `true`  |

## `<Checkbox>` Event说明

|     事件名      |           描述           |              参数               |
| :-------------: | :----------------------: | :-----------------------------: |
| checkboxChecked | checkbox被选中的时候触发 | `('string','number','boolean')` |

## `<Checkbox>` Slots说明

| 插槽名  |   描述   | 参数 |
| :-----: | :------: | :--: |
| default | 默认插槽 | ---- |

## `<CheckboxGroup>` Props说明

|       参数名        |                       描述                        |             类型              |    默认值    |
| :-----------------: | :-----------------------------------------------: | :---------------------------: | :----------: |
|    defaultValue     |     整个checkbox组默认选中的checkbox的 value      | `'string','number','boolean'` |     ---      |
|      direction      |    单选组件的方向 `('horizontal','vartical')`     |           `boolean`           | `horizontal` |
|      disabled       |                     是否禁用                      |           `boolean`           |   `false`    |
|         max         |            整个checkbox组最多选中数量             |          `'number'`           |     ---      |
| modelValue(v-model) |     整个checkbox组当前checkbox选中值的绑定值      | `'string','number','boolean'` |     ---      |
|        size         | 单选组件的尺寸`('mini','small','medium','large')` |      `CheckboxGroupSize`      |   `medium`   |

## `<CheckboxGroup>` Event说明

|    事件名     |              描述              |              参数               |
| :-----------: | :----------------------------: | :-----------------------------: |
| checkedChange | 组内checkbox选择改变的时候触发 | `('string','number','boolean')` |

## `<CheckboxGroup>` Slots说明

| 插槽名  |   描述   | 参数 |
| :-----: | :------: | :--: |
| default | 默认插槽 | ---- |
