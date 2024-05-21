//Checkbox 组件 未修改
export const RADIO_SIZES = ['mini', 'small', 'medium', 'large'] as const
export type RadioSize = (typeof RADIO_SIZES)[number]

export const RADIO_TYPES = ['button', 'radio'] as const
export type RadioType = (typeof RADIO_TYPES)[number]

//RadioGroup 组件

export const RADIO_GROUP_DIRECTIONS = ['horizontal', 'vertical'] as const
export type RadioGroupDirection = (typeof RADIO_GROUP_DIRECTIONS)[number]

export const RADIO_GROUP_SIZES = ['mini', 'small', 'medium', 'large'] as const
export type RadioGroupSize = (typeof RADIO_GROUP_SIZES)[number]

export const RADIO_GROUP_TYPES = ['button', 'radio'] as const
export type RadioGroupType = (typeof RADIO_GROUP_TYPES)[number]
